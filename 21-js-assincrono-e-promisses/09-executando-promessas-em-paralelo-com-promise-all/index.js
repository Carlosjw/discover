import axios from "axios";

Promise.all([ // criando um array de promises
  axios.get("https://api.github.com/users/Carlosjw"),
  axios.get("https://api.github.com/users/Carlosjw/repos")
])
  .then((responses) => {
    console.log(responses[0].data.login); // exibe o login do GitHub
    console.log(responses[1].data.length); // exibe a quantidade de repositórios do GitHub
  })
  .catch((err) => console.log(err.message)); // exibe uma mensagem de erro no Console caso haja alguma falha em uma das tentativas de conexão a API
