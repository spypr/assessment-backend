const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, createUser, updateUser, deleteUser } = require('./controller')

app.get("/api/users",createUser)
app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.post("/api/users", updateUser)
app.delete("/api/users/:id", deleteUser)

app.listen(4000, () => console.log("Server running on 4000"));


