// fucntion hoisting

// ocorre o hoisting
sayMyName();

function sayMyName(){
    console.log('Meu nome é Carlos.')
}

// não ocorre o hoisting: há a elevação do sayYourName, mas vai apenas como variável e não como função
sayYourName()

const sayYourName = function(){
    console.log('Your name is Solange.')
}