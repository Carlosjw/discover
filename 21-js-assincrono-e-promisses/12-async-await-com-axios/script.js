import axios from 'axios'

async function fetchRepos(){
    const user = await axios.get('https://api.github.com/users/Carlosjw')
    const repos = await axios.get(response.data.repos_url);
    console.log(repos);

}

fetchRepos()

