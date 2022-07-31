import axios from 'axios';

Promise.all([
    axios.get('https://api.github.com/users/Carlosjw'),
    axios.get('https://api.github.com/users/Carlosjw/repos')
])