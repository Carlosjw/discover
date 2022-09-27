const url = "https://api.github.com/users/Carlosjw"

function getUSer(){
    fetch(url)
    .then(response => JSON.stringify(response))
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.error(error))
}

getUSer()