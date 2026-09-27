export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Erro interno no servidor";

  console.error(`${message}:`, err);
  return res.status(statusCode).json({ error: message });
}
