import "dotenv/config";
import Express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import authRouter from "./src/routes/auth.router.ts";
import artistRouter from "./src/routes/artist.router.ts";
import venueRouter from "./src/routes/venue.router.ts";
import ticketRouter from "./src/routes/ticket.router.ts";
import eventRouter from "./src/routes/event.router.ts";
import participantRouter from "./src/routes/participant.router.ts";
import festivalRouter from "./src/routes/festival.router.ts";

const express = Express;
const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});

app.use(express.json());
app.use(limiter);
app.use(cors({
  origin: "http://localhost:4200",
}));
app.use("/api", authRouter);
app.use("/api", artistRouter);
app.use("/api", venueRouter);
app.use("/api", ticketRouter);
app.use("/api", eventRouter);
app.use("/api", participantRouter);
app.use("/api", festivalRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});