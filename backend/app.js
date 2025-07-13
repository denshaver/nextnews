import express from "express";
import sqlite from "better-sqlite3";
import cors from "cors";

const db = sqlite("data.db");

const app = express();

app.use(cors());

app.get("/news", (req, res) => {
  const news = db.prepare("SELECT * FROM news").all();
  res.json(news);
});

// initDb();

app.listen(8080);
