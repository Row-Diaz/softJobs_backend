const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const CsbInspector = require("csb-inspector");
CsbInspector();
const morganBody = require("morgan-body");
const jwt = require("jsonwebtoken");
const { postUsers, getAllUsers } = require("./src/controllers/usersController");
const loginRoutes = require("./src/routes/loginRoutes");
const { authenticateToken } = require("./src/middlewares/authMiddleware");
morganBody(app);
CsbInspector();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
const port = 3000;

app.use(loginRoutes);

app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled 🎈" });
});

app.get("/usuarios", authenticateToken, getAllUsers);

app.post("/usuarios", postUsers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
