import axios from "axios";

axios.get('https://api.github.com/users/Carlosjw')
    .then(res => {
        console.log(res.data)
})

// executar no CodeSandBox após instalar a dependência Axios nele