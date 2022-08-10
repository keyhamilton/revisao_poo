const meses = [
    {janeiro: 31},
    {fevereiro: 28},
    {março: 31},
    {abril: 30},
    {maio: 31},
    {junho: 30},
    {julho: 31},
    {agosto: 31},
    {setembro: 30},
    {outubro: 31},
    {novembro: 30},
    {dezembro: 31}
];
const mesPorExtenso = () => {
    const mes = document.getElementById('mes').value;
    if(mes > 0 && mes <=12){
        const resposta = `${Object.keys(meses[mes-1])[0]} ${meses[mes-1][Object.keys(meses[mes-1])[0]]} dias`;
        //console.log(resposta)
        document.getElementById('output').innerHTML = resposta;
        return;

    }
    document.getElementById('output').innerHTML = 'Digite novamente';
}