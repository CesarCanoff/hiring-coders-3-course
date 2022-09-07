import File from "../models/File";

class FileController {
  async store(req, res) {
    try {
      const { originalname: name, filename: path } = req.file;

      const file = await File.create({
        name,
        path,
      });

      return res.json(file);
    } catch (err) {
      if (err.errors) {
        const errors = {};
        for (let error of err.errors) {
          errors[error.path] = error.message;
        }

        return res.status(400).json({
          message: "Falha no upload",
          errors: errors,
        });
      } else
        return res.status(400).json({
          message: "Falha no upload",
          errors: `${err}`,
        });
    }
  }
}

export default new FileController();
