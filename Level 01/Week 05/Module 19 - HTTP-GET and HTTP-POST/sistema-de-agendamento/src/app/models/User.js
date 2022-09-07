"use strict";

import { Sequelize, Model } from "sequelize";
import bcrypt from "bcryptjs";
import dbConfig from "../../config/dbconfig/postgresdb";

// Models that hava association/relation with User
import File from "./File";

const sequelize = new Sequelize(dbConfig);

class User extends Model {
  // check about adding methods in models (in class ES6 type) in sequelize
  // https://sebhastian.com/sequelize-class-methods/
  checkPassword(password) {
    if (password) {
      return bcrypt.compare(password, this.password_hash);
    }

    return false;
  }
}

User.init(
  {
    // Model attributes are defined here.
    // We don't need to inform ID and Timestamps here, it will be genereted automatically.
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password_hash: {
      type: Sequelize.STRING,
      // allowNull: false
    },
    password: {
      type: Sequelize.VIRTUAL,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
    provider: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    photo_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

// The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).
User.belongsTo(File, {
  foreignKey: {
    name: "photo_id",
    defaultValue: null,
  },
  as: "photo",
});

User.beforeSave((user) => {
  if (user.password) {
    user.password_hash = bcrypt.hashSync(user.password, 10);
  }
});

export default User;
