const estatistica = () => {
    let soma = 0;
    let media;
    let num = 0;
    while(num != -1){
        num = parseInt(prompt('Digite um número inteiro\nDigite -1 para encerrar'));
        soma += num;
    }
    media = soma/5;
    console.log(`Soma = ${soma}\nMédia = ${media}`);
}
