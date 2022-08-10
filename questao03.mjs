const maior = () => {
    const valor1 = document.getElementById('val1').value;
    const valor2 = document.getElementById('val2').value;
    const valor3 = document.getElementById('val3').value;
    let resultado = valor1;
    if (resultado < valor2){
        resultado = valor2;
    };

    if (resultado < valor3){
        resultado = valor3;
    };

    document.getElementById('output').innerHTML =`O maior valor é ${resultado}`;
}