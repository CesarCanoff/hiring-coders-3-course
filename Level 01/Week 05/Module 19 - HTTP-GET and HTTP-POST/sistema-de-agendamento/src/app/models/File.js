"use strict";

import { Sequelize, DataTypes, Model } from "sequelize";
import dbConfig from "../../config/dbconfig/postgresdb";

const sequelize = new Sequelize(dbConfig);

class File extends Model {}

File.init(
  {
    // Model attributes are defined here.
    /* We don't need to inform ID and Timestamps here, it will be genereted automatically 
  (ID is setted with Auto Increment & Timestamps are defined as true in database config file). */
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    path: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    url: {
      type: Sequelize.VIRTUAL,
      get() {
        return `http://localhost:3333/files/${this.path}`;
      },
    },
  },
  {
    sequelize,
    modelName: "File",
    tableName: "files",
  }
);

export default File;
