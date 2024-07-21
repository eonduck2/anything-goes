import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/data", (req: Request, res: Response) => {
  const { name, age, city } = req.body;
  res.json({
    message: "Data received",
    data: {
      name,
      age,
      city,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
