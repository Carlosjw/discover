// Passo 1: Modelando
class Stack {
    constructor(){
        this.data = []
        this.top = -1
    }

    push(value){
        this.top++
        this.data[this.top] = value
        return this.data
    }
}
// Passo 2: Utilizando