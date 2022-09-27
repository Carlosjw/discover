const url = "http://localhost:5500/api";

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.error(error))
}

// CONSULTANDO UM USUÁRIO
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = `Nome: ${data.name}`;
        userCity.textContent = `Cidade: ${data.city}`;
        userId.textContent = `ID: ${data.id}`;
        userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error))
}

// INSERINDO DADOS: POST
function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response);        
    })
    .catch(error => console.error(error))
}

// ALTERANDO USUÁRIO: PUT
function updateUser(id, updatedUser){
    axios.put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

// DELETANDO DADOS
function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
        name: "Saymon Luiz",
        avatar: "https://picsum.photos/200/300",
        city: "Marabá"
    }

const updatedUser = {
    name: "Adriano de Carvalho",
    avatar: "https://picsum.photos/200/300",
    city: "Marabá"
}

getUsers()

getUser(2)

// addNewUser(newUser)
// updateUser(3, updatedUser)

deleteUser(13)