const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];
const fortunes = [
  "The greatest risk is not taking one.",
  "Land is always on the mind of a flying bird.",
  "You are very talented in many ways.",
];

module.exports = {
  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
  },

  getCompliment: (req, res) => {
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
  },

  showAllCompliments: (req, res) => {
    res.status(200).send(compliments);
  },

  addCompliment: (req, res) => {
    console.log("addcompliment in controller");
    let { newCompliment } = req.body;
    compliments.push(newCompliment);
    res.status(200).send(compliments);
  },

  updateCompliment: (req, res) => {
    let { index, newCompliment } = req.body;
    compliments.splice(index, 1, newCompliment);
    res.status(200).send(compliments);
  },

  deleteCompliment: (req, res) => {
    let { index } = req.params;
    compliments.splice(index, 1);
    res.status(200).send(compliments);
  },
};
