
const imprimeInteiros = () => {
    const valor1 = parseInt(document.getElementById('val1').value);
    const valor2 = parseInt(document.getElementById('val2').value);
    if(Math.abs(valor1-valor2) > 1){

        if(valor1 > valor2){
            for(let i = valor2+1; i < valor1; i++){
                console.log(i);
            }
            return;
        }
        
        if(valor2 > valor1){
            for(let j = valor1+1; j < valor2; j++){
                console.log(j);
            }
            return;
        }
    }

}
console.log('Não existem inteiros entre os valores lidos');
