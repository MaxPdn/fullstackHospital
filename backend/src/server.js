import app from "./app.js";
const port = 3000;
app.listen(port, () => {
  console.log(`L'application express a démarré sur le port ${port}`);
});