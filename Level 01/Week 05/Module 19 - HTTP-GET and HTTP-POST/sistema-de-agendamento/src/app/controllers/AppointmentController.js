import Appointment from "../models/Appointment";

import User from "../models/User";
import File from "../models/File";

import Notification from "../schemas/Notification";

class AppointmentController {
  async index(req, res) {
    try {
      const { page = 1 } = req.query;

      return res.json(
        await Appointment.findAll({
          where: { user_id: req.userId, canceled_at: null },
          order: [["date", "ASC"]],
          attributes: ["id", "date"],
          limit: 20, // retrieved 20 items
          offset: (page - 1) * 20, // skips 0 in page 1, 20 in page 2, 40 in page 3, ...
          include: [
            {
              model: User,
              as: "collaborator",
              attributes: ["id", "name", "email"],
              include: [
                {
                  model: File,
                  as: "photo",
                  attributes: ["id", "path", "url"],
                },
              ],
            },
          ],
        })
      );
    } catch (err) {
      return res.status(400).json({
        message: "Falha de paginação",
        errors: `${err}`,
      });
    }
  }

  async store(req, res) {
    try {
      const { collaborator_id, date } = req.body;

      const isCollaborator = await User.findOne({
        where: { id: collaborator_id, provider: true },
      });

      if (!isCollaborator)
        return res.status(400).json({
          message: "Colaborador não localizado.",
        });

      if (req.userId === Number(collaborator_id))
        return res.status(400).json({
          message: "Você não pode marcar um appointment com sigo mesmo.",
        });

      const CollaboratorNotAvailable = await Appointment.findOne({
        where: { collaborator_id, canceled_at: null, date: new Date(date) },
      });

      if (CollaboratorNotAvailable)
        return res.status(400).json({
          message: "Colaborador não disponível neste horário.",
        });

      const { id, user_id } = await Appointment.create({
        user_id: req.userId,
        collaborator_id,
        date,
      });

      const { name: user_name } = await User.findByPk(req.userId);

      const formattedDate = new Date(date).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      const formattedHour = new Date(date).toLocaleString("pt-BR", {
        hour: "2-digit",
      });
      const formattedSeconds = new Date(date).toLocaleString("pt-BR", {
        minute: "2-digit",
      }); // Verify why 2-digit is not being applied.
      let contentDateText;

      if (Number(formattedSeconds) < 10) {
        contentDateText = `${formattedDate}, às ${formattedHour}h0${formattedSeconds}.`;
      } else {
        contentDateText = `${formattedDate}, às ${formattedHour}h${formattedSeconds}.`;
      }

      if (user_name)
        await Notification.create({
          content: `Novo agendamento de ${user_name} para ${contentDateText}`,
          user: collaborator_id,
        });

      return res.json({
        id,
        user_id,
        collaborator_id,
        date,
      });
    } catch (err) {
      if (err.errors) {
        const errors = {};
        for (let error of err.errors) {
          errors[error.path] = error.message;
        }

        return res.status(400).json({
          message: "Falha na criação",
          errors: errors,
        });
      } else
        return res.status(400).json({
          message: "Falha na criação",
          errors: `${err}`,
        });
    }
  }
}

export default new AppointmentController();
