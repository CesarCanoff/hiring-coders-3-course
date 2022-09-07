import User from "../models/User";
import File from "../models/File";

class CollaboratorController {
  async index(req, res) {
    const collaborators = await User.findAll({
      where: { provider: true },
      attributes: ["id", "name", "email", "provider"],
      include: [
        {
          model: File,
          as: "photo",
          attributes: ["name", "path", "url"],
        },
      ],
    });

    if (!collaborators)
      return res.json({
        message: "Ainda não possuímos colaboradores. Junte-se a nós!",
      });

    return res.json(collaborators);
  }
}

export default new CollaboratorController();
