// Passo 1: Modelando
class Queue{
    constructor(){
        this.data = []
    };

    enqueue(item){
        this.data.push(item);
        console.log(`${item} chegou na fila!`);
    }

    dequeue(){
        const item = this.data.shift(); // removendo o primeiro da fila
        console.log(`${item} saiu da fila!`);
    }
}

// Passo 2: Utilizando
const fila = new Queue();

fila.enqueue('Mariana');
fila.enqueue('João');
fila.enqueue('Ariel');

// removendo elementos da fila
fila.dequeue()
fila.dequeue()
fila.dequeue()