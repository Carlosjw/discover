let btOne = document.getElementById('one');

btOne.addEventListener('click', function(){
    document.getElementById('num01').innerHTML = btOne.value;
});

let btTwo = document.getElementById('two');

btTwo.addEventListener('click', function(){
    document.getElementById('num02').innerHTML = btTwo.value;
});