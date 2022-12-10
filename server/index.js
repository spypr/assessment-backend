const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, createUser } = require('./controller');
const { getFortune } = require('./controller');
app.get("/api/users",createUser);
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);


app.listen(4000, () => console.log("Server running on 4000"));


