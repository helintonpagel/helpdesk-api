import express from "express";
import { categoryRouter } from "./routes/categoryRouter.js";
import { technicianRouter } from "./routes/technicianRouter.js";
import { requesterRouter } from "./routes/requesterRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const app = express();

app.use(express.json());

app.use("/categorias", categoryRouter);
app.use("/tecnicos", technicianRouter);
app.use("/solicitantes", requesterRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint não encontrado" });
});

app.use(errorHandler);
