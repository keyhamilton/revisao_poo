const converte = () => {
    const real = document.getElementById('real').value;
    console.log(real);
    const bitCoin = 0.0000084;
    let resultado = real * bitCoin;
    let valorFormatado = resultado.toFixed(8);
    document.getElementById('output').innerHTML =`${real}R$ equivale a ${valorFormatado} bitcoins`;
    
}
