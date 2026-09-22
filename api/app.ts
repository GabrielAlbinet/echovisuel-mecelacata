import Express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import artistRouter from "./src/routes/artist.router.ts";
import venueRouter from "./src/routes/venue.router.ts";
import ticketRouter from "./src/routes/ticket.router.ts";

const express = Express;
const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});

app.use(express.json());
app.use(limiter);
app.use(cors({
  origin: "http://localhost:4200",
}));
app.use("/api", artistRouter);
app.use("/api", venueRouter);
app.use("/api", ticketRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});