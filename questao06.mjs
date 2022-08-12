const estatistica = () => {
    let soma = 0;
    let media;
    let num = 0;
    let contador = 0;
    let valores = [];
    let desvio_padrao = 0;
    while(num != -1){
        num = parseInt(prompt('Digite um número inteiro\nDigite -1 para encerrar'));
        if(num === -1){
            break;
        }
        soma += num;
        contador += 1;
        valores.push(num);
    }
    media = soma/contador;
    desvio_padrao = desvio(valores, media);
    console.log(`Soma = ${soma}\nMédia = ${media}\nDesvio padrão = ${desvio_padrao}`);
}

const desvio = (list, media) => {
    let diff = 0;
    for(let i = 0; i < list.length; i++){
        diff += (list[i] - media)**2;
    }
    return Math.sqrt(diff/list.length);
}