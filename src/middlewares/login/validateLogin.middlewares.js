function validateLogin(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password || password.length < 5) {
    return res.status(400).json({ message: "Champs manquants" });
  }
  next();
}
export default validateLogin
