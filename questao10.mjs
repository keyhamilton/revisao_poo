const tempo = () => {
    const miliseg = parseInt(document.getElementById('miliseg').value) / 1000;
    let dia = Math.trunc(miliseg/86400);
    let resto = miliseg % 86400;
    let hora = Math.trunc(resto/3600);
    resto = resto % 3600; 
    let minutos = Math.trunc(resto/60);
    let segundos = resto % 60;

    let resultado = `${dia} dias ${hora}h:${minutos}m:${segundos}s`;
    console.log(resultado);
}