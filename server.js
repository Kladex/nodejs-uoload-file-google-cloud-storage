import cors from "cors";
import express from "express";

import uploadRoutes from "./src/routes/upload.route.js";

function init() {
  const app = express();
  const PORT = 8080;

  let corsOptions = {
    origin: `http://localhost:${PORT}`,
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  uploadRoutes(app);

  app.listen(PORT, () => {
    console.log(`Running at localhost:${PORT}`);
  });
}

init();
