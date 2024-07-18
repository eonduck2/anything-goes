// DB/server.ts

import express, { Request, Response } from "express";
import { db } from "./firebase-config";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express and Firebase!");
});

app.get("/data", async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("your-collection").get();
    const data = snapshot.docs.map((doc) => doc.data());
    res.json(data);
  } catch (error) {
    res.status(500).send("Error retrieving data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
