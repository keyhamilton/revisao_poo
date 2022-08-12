let semAcento = () => {
    frase = document.getElementById('frase').value;
    frase = frase.replace(/[áàã]/gi, 'a');
    frase = frase.replace(/[é]/gi, 'e');
    frase = frase.replace(/[í]/gi, 'i');
    frase = frase.replace(/[óõ]/gi, 'o');
    frase = frase.replace(/[ú]/gi, 'u');
    document.getElementById('output').innerHTML = frase;
}