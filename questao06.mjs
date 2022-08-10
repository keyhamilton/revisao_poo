const estatistica = () => {
    let soma = 0;
    let media;
    let num = 0;
    let contador = 0;
    while(num != -1){
        num = parseInt(prompt('Digite um número inteiro\nDigite -1 para encerrar'));
        soma += num;
        contador += 1;
    }
    media = soma/contador;
    console.log(`Soma = ${soma}\nMédia = ${media}`);
}
