"use strict";

import { Sequelize, Model } from "sequelize";
import dbConfig from "../../config/dbconfig/postgresdb";

// Models that hava association/relation with Appointment
import User from "./User";

const sequelize = new Sequelize(dbConfig);

class Appointment extends Model {}

Appointment.init(
  {
    // Model attributes are defined here.
    /* We don't need to inform ID and Timestamps here, it will be genereted automatically 
  (ID is setted with Auto Increment & Timestamps are defined as true in database config file). */
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: new Date().toISOString().match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/),
      },
    },
    user_id: {
      type: Sequelize.INTEGER,
      validate: {
        isNumeric: true,
        isInt: true,
      },
    },
    collaborator_id: {
      type: Sequelize.INTEGER,
      validate: {
        isNumeric: true,
        isInt: true,
      },
    },
    canceled_at: {
      type: Sequelize.DATE,
    },
  },
  {
    sequelize,
    modelName: "Appointment",
    tableName: "appointments",
  }
);

Appointment.belongsTo(User, {
  foreignKey: {
    name: "user_id",
  },
  as: "user",
});

Appointment.belongsTo(User, {
  foreignKey: {
    name: "collaborator_id",
  },
  as: "collaborator",
});

export default Appointment;
