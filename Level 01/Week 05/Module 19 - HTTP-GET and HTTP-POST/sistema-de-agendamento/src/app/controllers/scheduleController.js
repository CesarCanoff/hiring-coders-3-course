// Sequelize operator type
import { Op } from "sequelize";
import { endOfDay, startOfDay } from "date-fns";

import User from "../models/User";
import Appointment from "../models/Appointment";
import File from "../models/File";

class ScheduleController {
  async index(req, res) {
    try {
      const isCollaborator = await User.findOne({
        where: { id: req.userId, provider: true },
      });

      if (!isCollaborator)
        return res.status(400).json({
          message: "Este usuário não é um colaborador",
        });

      const { date } = req.query;
      console.log("\n> date:" + new Date(date) + "\n");

      res.json(
        await Appointment.findAll({
          where: {
            collaborator_id: req.userId,
            date: {
              [Op.between]: [
                startOfDay(new Date(date)),
                endOfDay(new Date(date)),
              ],
            },
            canceled_at: null,
          },
          order: [["date", "ASC"]],
          attributes: ["id", "date"],
          include: [
            {
              model: User,
              as: "user",
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
}

export default new ScheduleController();
