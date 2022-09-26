
const url = 'http://localhost:5500/api';

function getUsers(){
    fetch(url)
    // se tudo der certo
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    // se der errado
    .catch(error => console.error(error));
}

// pegando um único usuário
function getUser(){
    fetch(`${url}/1`) // acessando usuário pelo ID
    .then(response => response.json())
    .then(data => {
        // chamando DOM direto
        userName.textContent = data.name;
        userCity.textContent = data.userCity;
        // renderizando imagem
        userAvatar.src = data.avatar;

    })
    .catch(error => console.error(error));
}

// POST
function addUser(newUser){
    fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))

}

// PUT
function updateUser(updatedUser){
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

const newUser = {
    name: 'Carlos Lima',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio do Sul'
}

// PUT
const updatedUser = {
    name: "Solange Lima",
    avatar: "images/solange.jpg",
    city: 'Marabá'
}

// addUser(newUser)

getUsers()
getUser()
