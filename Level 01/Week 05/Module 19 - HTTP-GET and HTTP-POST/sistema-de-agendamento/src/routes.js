import { Router } from "express";

import mongoose from "./config/dbconfig/mongodb"; // Start MongoDB connection

import multer from "multer";
import multerConfig from "./config/multer";

import authMiddleware from "./app/middlewares/auth";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import CollaboratorController from "./app/controllers/CollaboratorController";
import AppointmentController from "./app/controllers/AppointmentController";
import FileController from "./app/controllers/FileController";
import scheduleController from "./app/controllers/scheduleController";
import NotificationController from "./app/controllers/NotificationController";

const routes = new Router();
const upload = multer(multerConfig);

routes.get("/users", UserController.index); //! (to be removed)

// Register a user
routes.post("/users", UserController.store);

// Login (Authentication)
routes.post("/login", SessionController.store);

// ROTAS AUTENTICADAS ABAIXO
routes.use(authMiddleware); // Invocar um middleware pelo 'routes.use()' faz com que todas as rotas seguintes a esta instrução utilizem este middleware.

// User update & File upload (user photo)
routes.put("/users", UserController.update);
routes.post("/files", upload.single("file"), FileController.store);

// Find all collaborators & List collaborator's appointments
routes.get("/collaborators", CollaboratorController.index);
routes.get("/schedules", scheduleController.index);

// Create appointment &  List appointments
routes.post("/appointments", AppointmentController.store);
routes.get("/appointments", AppointmentController.index);

// List notifications
routes.get("/notifications", NotificationController.index);
routes.put("/notifications/:id", NotificationController.update);

export default routes;
