const jwt = require("jsonwebtoken");
const config = require("config");
const secrectKey = config.get("jwtPrivateKey");

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, secrectKey);
      req.userId = user.id;
    } else {
      res.status(401).send("Unauthorized User");
    }
    next();
  } catch (error) {
    console.log("Auth Error", error);
    res.status(401).send(error);
  }
};
module.exports = auth