const jwt = require('jsonwebtoken');
const { errorServer } = require('./errorServer');

const validateToken = async (tokenLocal, res) => {
  try {
    const payload = jwt.verify(tokenLocal, process.env.JWT_SECRET);
    return payload;
  } catch (e) {
    return errorServer(res, e);
  }
};

module.exports = { validateToken };