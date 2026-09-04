import Express from "express";
import artistRouter from "./src/routes/artist.router.ts";

const express = Express;
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", artistRouter); // connection de l'API au projet

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});