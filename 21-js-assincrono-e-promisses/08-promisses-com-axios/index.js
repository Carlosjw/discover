import axios from 'axios';

axios
    .get('https://api.github.com/users/Carlosjw')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))

/* 
    .get => espera um argumento em string
*/