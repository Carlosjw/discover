// inserir código no Console do Chrome

fetch('https://api.github.com/users/Carlosjw').then(response => {
    response.json().then(data => console.log(data))
});