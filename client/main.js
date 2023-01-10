const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const allBtn = document.getElementById("allComplimentsButton");
const compList = document.querySelector("#complimentsList");
const form = document.querySelector("form");
const complimentInput = document.querySelector("#complimentInput");
const updatedComplimentInput = document.querySelector(
  "#updatedComplimentInput"
);
const complimentID = document.querySelector("#complimentID");

const showList = (arr) => {
  compList.innerHTML = "All Compliments:";
  arr.forEach((element, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = element;
    compList.appendChild(listItem);

    let deleteButton = document.createElement("button");
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "delete";
    deleteButton.id = index;
    deleteButton.addEventListener("click", deleteCompliment);

    let updateButton = document.createElement("button");
    listItem.appendChild(updateButton);
    updateButton.textContent = "Update this compliment with written one";
    updateButton.id = index;
    updateButton.addEventListener("click", updateCompliment);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const showAllCompliments = () => {
  axios.get("http://localhost:4000/api/showAll").then((res) => {
    showList(res.data);
  });
};

const addCompliment = (evt) => {
  evt.preventDefault();

  console.log("addCompliment clicked");
  axios
    .post("http://localhost:4000/api/compliment/", {
      newCompliment: complimentInput.value,
    })
    .then((res) => {
      let { data } = res;
      showList(data);
    })
    .catch((err) => console.log(err));
};

const updateCompliment = (evt) => {
  evt.preventDefault();

  axios
    .put(`http://localhost:4000/api/compliment/`, {
      index: evt.target.id,
      newCompliment: complimentInput.value,
    })
    .then((res) => {
      // console.log('past here')
      let { data } = res;
      showList(data);
    });
};

const deleteCompliment = (evt) => {
  console.log("delete button clicked");
  console.log(evt.target.id);
  axios
    .delete(`http://localhost:4000/api/compliment/${evt.target.id}`)
    .then((response) => {
      let { data } = response;
      showList(data);
    });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
allBtn.addEventListener("click", showAllCompliments);
form.addEventListener("submit", addCompliment);
