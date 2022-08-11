const proximo = () => {

    // declaração de variáveis
    let num = Number(prompt('Digite um número com casa decimal -> '));
    let intNum = parseInt(num);
    let anterior = intNum;
    let sucessor = intNum + 1;
    
    // resultado
    
    console.log(`O anterior de ${num} é ${anterior}, e o sucessor é ${sucessor}`);
}
