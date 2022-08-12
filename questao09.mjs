const juros = () => {
    let investimento = parseInt(document.getElementById('investimento').value);
    let taxa = parseInt(document.getElementById('taxa').value);
    const porcentagem = taxa/100;
    const c = investimento;
    let valores = [];
    let num = 0;
    for(let i = 1; i <= 12; i++){
        num = c * (1 + porcentagem) ** i;
        valores.push(num.toFixed(2));
    }
    for(let j = 0; j < valores.length; j++){
        console.log(`${j+1} mês -> ${valores[j]}`)
    }
}