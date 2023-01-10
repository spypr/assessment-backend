const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getFortune,
  getCompliment,
  showAllCompliments,
  addCompliment,
  updateCompliment,
  deleteCompliment,
} = require("./controller");

app.get("/api/showAll", showAllCompliments);
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/compliment", addCompliment);
app.put("/api/compliment", updateCompliment);
app.delete("/api/compliment/:index", deleteCompliment);

app.listen(4000, () => console.log("Server running on 4000"));
