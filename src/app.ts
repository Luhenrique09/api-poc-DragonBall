import express from "express";
import { create, findAll, findById, update, remove } from "./controllers/dragonball.controllers.js";

const app = express();
app.use(express.json());

app.post('/characters', create)
app.get('/characters', findAll)
app.get('/characters/:id', findById)
app.patch('/characters/:id', update)
app.delete('/characters/:id', remove)

app.listen(4000, () => {
    console.log("Server running in port: 4000")
});