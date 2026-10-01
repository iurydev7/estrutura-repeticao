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

function mediaAritmetica() {
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let quantidade = 0;
    let valor = 10;

    while (valor >= -7) {
        console.log("valor: " + valor);
        soma += valor;
        console.log("soma: " + soma);
        quantidade++

        console.log(quantidade)

        if (valor > 0) {
            positivos++
        } else if (valor < 0) {
            negativos++
        }
        valor -= 1;
    }
    console.log(`
        Acumulado: ${soma}
        Média: ${(soma / quantidade).toFixed(2)}
        Percentual Positivo: ${(positivos * 100 / quantidade).toFixed(2)}
        Percentual Negativo: ${(negativos * 100 / quantidade).toFixed(2)}
        `)
}

function quantidadeNosIntervalos(){

}

function algoritmoEstruturado(){
    let valores = {
        primeiro: 3,
        segundo: 8,
        terceiro: 11,
        quarto: 12,
        encerramento: 0
    }

    let par = 0;
    let impar = 0;
    let somaGeral = 0;
    let somaPares = 0;
    let quantidade = 0;

    for(chave in valores){
        let valor = valores[chave];

        if(valor === 0){
            break;
        }

        quantidade ++
        somaGeral += valor;

        if( valor % 2 === 0 ){
            par++
            somaPares += valor;
        } else {
            impar++
        }

    }
    let mediaPares = somaPares / par;
    let mediaGeral = somaGeral / quantidade;
    console.log(`
        Quantidade de pares: ${par}
        Quantidade de impares: ${impar}
        Média de pares: ${mediaPares}
        Média geral: ${mediaGeral}
        
        `)
}