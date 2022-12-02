const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/users`

const createUser = body => axios.post(baseURL, body).then(usersCallback).catch(errCallback)
const deleteName = id => axios.delete(`${baseURL}/${id}`).then(userCallback).catch(errCallback)
const updateUser = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(usersCallback).catch(errCallback)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let age = document.querySelector('#age')

    let bodyObj = {
        name: name.value,
        age: age.value, 
    }

    createUser(bodyObj)

    name.value = ''
    age.value = ''
};




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)