import axios from "axios";

async function fetchRepos() {
  try {
    // pegando o usuário
    const user = await axios.get("htps://api.github.com/users/Carlosjw");
    // pegando os repositório  do 'user'
    const repos = await axios.get(user.data.repos_url);
    console.log(repos.data);
  } catch (e) {
    console.log(e.message);
  }
}

fetchRepos();
