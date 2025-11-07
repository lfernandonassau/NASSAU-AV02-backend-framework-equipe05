import express from "express";

const app = express();
app.use(express.json());

app.listen(5555, () => console.log("Backend rodando na porta 5555"));
