function validateUser(req, res, next) {
  const { username, firstname, role, password, telephone, email, age } =
    req.body;

  if (
    !username ||
    !email ||
    !password ||
    !firstname ||
    !role ||
    !telephone ||
    !age
  ) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  next();
}
export default validateUser;
