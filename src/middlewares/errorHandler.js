export function errorHandler(err, req, res, next) {
  if (err.isOperational) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "JSON inválido no corpo da requisição." });
  }

  console.error(`[Error 500]:`, err);
  return res.status(500).json({ error: "Erro interno no servidor. Tente novamente mais tarde." });
}
