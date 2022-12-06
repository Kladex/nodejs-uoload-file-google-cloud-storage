import { Router } from "express";

import {
  upload,
  getListFiles,
  download,
} from "../controllers/file.controller.js";

const uploadRouter = Router();

let uploadRoutes = (app) => {
  uploadRouter.post("/upload", upload);
  uploadRouter.get("/files", getListFiles);
  uploadRouter.get("/files/:name", download);

  app.use(uploadRouter);
};

export default uploadRoutes;
