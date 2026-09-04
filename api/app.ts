import Express from "express";
import rateLimit from "express-rate-limit";
import artistRouter from "./src/routes/artist.router.ts";

const express = Express;
const app = express();
const port = 3000;

const limiter = rateLimit ({windowMs: 15 * 60 * 1000, limit: 5}); //5 reequêtes max par 15 mins

app.use(express.json());
app.use(limiter);
app.use("/api", artistRouter); // connection de l'API au projet

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});