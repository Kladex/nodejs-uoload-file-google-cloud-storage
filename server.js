import cors from "cors";
import express from "express";

import uploadRoutes from "./src/routes/upload.route.js";

const app = express();
const port = 8080;

let corsOptions = {
  origin: `http://localhost:${port}`,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
uploadRoutes(app);

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
