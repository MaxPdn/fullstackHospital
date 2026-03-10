import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/users.json");

// lire le fichier JSON
let users = JSON.parse(await fs.readFile(dataPath, "utf-8"));
// console.log(users);

function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    const currentUser = users.find(
      (u) =>
        u.username.toLowerCase() == username.toLowerCase() &&
        u.password == password,
    );
    console.log(currentUser);

    if (currentUser) {
      let user = {
        id: currentUser.id,
        role: currentUser.role,
        username: currentUser.username,
      };
      res.status(200).json(user);
      return user;
    } else {
      res.status(404).json("Utilisateur non trouvé.");
    }
  } catch (err) {
    console.error("Erreur :", err.message);
    res.status(500).json({ error: err.message });
  }
}

export const loginController = {
  loginUser,
};
