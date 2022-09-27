const url = "https://swapi.dev/api/"

/* function getUSer(){
    axios.get(url)
    .then(response => {

        console.log(response.data)
        const data = response.data;

        userCompany.textContent = data.company;
        messageUser.textContent = data.bio;
        userAvatar.src = data.avatar_url;
    })    
    .catch(error => console.error(error))
}

getUSer() */

function siteInfor(){
    axios.get(url)
    .then(response => console.log(response))
    .then(data => {
        userInfor.textContent = data;
    })
    .catch(error => console.error(error))
}

siteInfor()
