function receiveData(data){
   data()
}


function anyData(receivedData){
    console.log(`Hoje é ${receivedData}`);
}

let currentData = '2022-07-26'
anyData(currentData)



receiveData(() => {
    console.log('Isso é uma callback function')
})

