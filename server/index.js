const express = require("express");
const cors = require("cors");
const {createUser, updateUser, deleteUser} = require('./controller')

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');
const { getFortune } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.post('/api/user',createUser)
app.put('/api/user/:id', updateUser)
app.delete('/api/user/:id', deleteUser)

app.listen(4000, () => console.log("Server running on 4000"));


