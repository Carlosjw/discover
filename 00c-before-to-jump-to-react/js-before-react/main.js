// importando uma por uma
/* import { sum, subtrair } from './lib/math'

document.body.innerText = sum(1, 2);
document.body.innerText = subtrair(7, 2); */

// importando tudo
/* import * as math from './lib/math'

console.log(math)
document.body.innerText = math.sum(3, 6);
document.body.innerText = math.sub(3, 6); */

// importando e renomeando
import { sum as soma } from './lib/math'

document.body.innerText = soma(5, 9)

