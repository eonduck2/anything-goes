// src/index.ts
import express, { Request, Response } from "express";

const app = express();
const port = 5000;

// 미들웨어 설정
app.use(express.json());

// 기본 GET 엔드포인트
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// POST 엔드포인트
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

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
