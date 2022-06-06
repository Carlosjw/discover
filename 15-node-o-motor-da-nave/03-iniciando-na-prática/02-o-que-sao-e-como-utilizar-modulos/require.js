/* 
    'require' é uma maneira de chamarmos módulos que já são nativos do NodeJs ou módulos que podemos criar ou instlar no Node.
*/

const path = require('path'); // 'path' é um módulo que já existe dentro do Node

// exibidindo o nome do arquivo raiz do código atual
console.log(path.basename(__filename));