import { app } from "./src/app.js";

const PORT = Number(process.env.PORT) || 3000;

try {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
} catch (error) {
  console.error("Erro ao iniciar o servidor:", error);
  process.exit(1);
}
