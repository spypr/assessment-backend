const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/users`

const createUser = body => axios.post(baseURL, body).then(usersCallback).catch(errCallback)
const deleteUser = id => axios.delete(`${baseURL}/${id}`).then(usersCallback).catch(errCallback)
const updateUser = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(usersCallback).catch(errCallback)

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

form.addEventListener('submit', submitHandler)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)