import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/users.json");

// lire le fichier JSON
let users = JSON.parse(await fs.readFile(dataPath, "utf-8"));

//add
async function postUser(req, res) {
  try {
    const { username, firstname, role, password, telephone, email, age } =
      req.body;
    const user = {
      id: users.length + 1,
      username: username,
      firstname: firstname,
      role: role,
      password: password,
      telephone: telephone,
      email: email,
      age: age,
    };

    users.push(user);

    await fs.writeFile(dataPath, JSON.stringify(users, null, 2));

    console.log(`✅L'utilisateur ${user} est bien ajouté.`);

    res.status(201).json({ user: users });
  } catch (err) {
    console.error("Erreur :", err.message);

    res.status(500).json({ error: err.message });
  }
}

//affichage users

function getUser(req, res) {
  res.json({ message: "users route fonctionne" });
}

export const usersController = {
  postUser,
  getUser
};
