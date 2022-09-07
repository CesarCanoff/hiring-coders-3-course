import User from "../models/User";

class UserController {
  async index(req, res) {
    try {
      return res.json(
        await User.findAll({
          attributes: ["id", "name", "email", "provider"],
        })
      );
    } catch (err) {
      if (err.errors) {
        const errors = {};
        for (let error of err.errors) {
          errors[error.path] = error.message;
        }

        return res.status(400).json({
          message: "Falha na listagem de usuários",
          errors: errors,
        });
      } else
        return res.status(400).json({
          message: "Falha na listagem de usuários",
          errors: `${err}`,
        });
    }
  }

  async store(req, res) {
    try {
      const emailExists = await User.findOne({
        where: { email: req.body.email },
      }).catch((err) => console.error(err));

      // http status 400 - error: bad request
      if (emailExists)
        return res.status(400).json({
          error: "Email já cadastrado.",
        });

      // We don't want to send the user's password and the created/updated dates in the response, so:
      const { id, name, email, provider } = await User.create(req.body);

      console.log(`User's auto-generated ID: ${id}`);
      return res.json({
        id,
        name,
        email,
        provider,
      });
    } catch (err) {
      if (err.errors) {
        const errors = {};
        for (let error of err.errors) {
          errors[error.path] = error.message;
        }

        return res.status(400).json({
          message: "Falha no cadastro",
          errors: errors,
        });
      } else
        return res.status(400).json({
          message: "Falha no cadastro",
          errors: `${err}`,
        });
    }
  }

  async update(req, res) {
    console.log(`\nUser ID ${req.userId} is authenticated.`);

    const { newUserPhoto, newName, newEmail, newPassword, password } = req.body;

    // Pk = Primary Key
    const user = await User.findByPk(req.userId);

    if (newEmail) {
      if (newEmail !== user.email) {
        // Verify if the new email choosen already exists in the database;
        const emailExists = await User.findOne({
          where: { email: newEmail },
        });

        if (emailExists)
          return res.status(400).json({
            error: "Email indisponível.",
          });
      } else
        return res.status(400).json({
          error: "Utilize um email diferente do já cadastrado.",
        });
    }

    if (newPassword) {
      if (await user.checkPassword(newPassword))
        return res.status(400).json({
          error: "Utilize uma senha diferente da atual.",
        });
    }

    // update user if the given password matches the db password
    if (password && (await user.checkPassword(password))) {
      try {
        const { id, name, email, provider } = await user.update({
          name: newName,
          email: newEmail,
          password: newPassword,
          photo_id: newUserPhoto,
        });

        if (newPassword) {
          return res.json({
            status: "Sucess",
            "Updated User": {
              id,
              name,
              email,
              provider,
              password_change: "yes",
            },
          });
        } else
          return res.json({
            status: "Sucess",
            "Updated User": {
              id,
              name,
              email,
              provider,
              password_change: "no",
            },
          });
      } catch (err) {
        if (err.errors) {
          const errors = {};
          for (let error of err.errors) {
            errors[error.path] = error.message;
          }

          return res.status(400).json({
            message: "Falha na atualização",
            errors: errors,
          });
        } else
          return res.status(400).json({
            message: "Falha na atualização",
            errors: `${err}`,
          });
      }
    } else
      return res.status(401).json({
        error: "Senha inválida.",
      });
  }
}

export default new UserController();
