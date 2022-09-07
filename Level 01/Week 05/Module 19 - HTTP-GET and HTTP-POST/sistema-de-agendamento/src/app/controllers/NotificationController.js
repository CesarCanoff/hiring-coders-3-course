import User from "../models/User";
import Notification from "../schemas/Notification";

class NotificationController {
  async index(req, res) {
    try {
      const isCollaborator = await User.findOne({
        where: { id: req.userId, provider: true },
      });

      if (!isCollaborator)
        return res.status(401).json({
          message: "Notificações disponíveis apenas para colaboradores.",
        });

      const notifications = await Notification.find({
        user: req.userId,
      })
        .select(["_id", "content", "read"])
        .sort({ createdAt: "desc" })
        .limit(20);

      return res.json(notifications);
    } catch (err) {
      if (err.errors) {
        const errors = {};
        for (let error of err.errors) {
          errors[error.path] = error.message;
        }

        return res.status(400).json({
          message: "Falha na obtenção das notificações",
          errors: errors,
        });
      } else
        return res.status(400).json({
          message: "Falha na obtenção das notificações",
          errors: `${err}`,
        });
    }
  }

  async update(req, res) {
    try {
      const isCollaborator = await User.findOne({
        where: { id: req.userId, provider: true },
      });

      if (!isCollaborator)
        return res.status(401).json({
          message: "Notificações disponíveis apenas para colaboradores.",
        });

      const notifications = await Notification.findByIdAndUpdate(
        req.params.id,
        { read: true },
        { new: true }
      ).select(["_id", "content", "read"]);

      return res.json(notifications);
    } catch (err) {
      if (err.errors) {
        const errors = {};
        for (let error of err.errors) {
          errors[error.path] = error.message;
        }

        return res.status(400).json({
          message: "Falha na obtenção das notificações",
          errors: errors,
        });
      } else
        return res.status(400).json({
          message: "Falha na obtenção das notificações",
          errors: `${err}`,
        });
    }
  }
}

export default new NotificationController();
