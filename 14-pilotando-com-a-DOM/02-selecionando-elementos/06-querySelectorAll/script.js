// querySelectorAll()

const elements = document.querySelectorAll('.one');
// Salva uma coleção de nós (nodeList) trazendo todos os que ele achar. Isso torna possível fazer um forEach
 
elements.forEach(el => console.log(el));