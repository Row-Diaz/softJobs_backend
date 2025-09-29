const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Token inválido:", err); // <-- Aquí ves el error si el token falla
      return res.status(403).json({ message: "Token inválido" });
    }
    console.log("Token válido, payload:", user); // <-- Aquí ves el payload si el token es válido
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };