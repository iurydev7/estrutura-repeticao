function somaImpares() {
    let soma = 0;

    for (let n = 1; n <= 500; n++) {
        if (n % 2 !== 0 && n % 3 === 0) {
            soma += n;
            console.log("Acumulado soma:" + soma);
            console.log(n);
        }

    } 
    alert(`A soma de todos os números impares que tambem são múltiplos de 3 é: ${soma}`)
}

function menorEMaiorAltura() {
    let alturas = [1.35, 1.60, 1.90, 2.10, 1.98, 2, 1.90, 1.55, 1.20, 1.93, 1.78, 1.80, 1.83, 1.60, 1.33];
    let menor = alturas[0];
    let maior = alturas[0];

    for (altura of alturas) {
        if(altura > maior) {
            maior = altura;
        } 
        if(altura < menor) {
            menor = altura;
        }
    }
    alert(`A maior altura é: ${maior} metros e a menor altura é: ${menor} metros`)
}