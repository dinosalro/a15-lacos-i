let conta = 0;
let coxinha = prompt("Você quer coxinha?").toUpperCase();
let w = 0;

while (coxinha === "S") {
    coxinha = prompt("Você quer coxinha?").toUpperCase()
    conta += 2.50
    w++
}

console.log(`A conta ficou: ${conta} R$, você comeu ${w} coxinha(s)!`)