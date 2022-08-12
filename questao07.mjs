let valores = [];
let num = 0;

let getNumbers = () => {

    for( let i = 0; i < 5; i++){
        num = parseInt(prompt(`Elemento ${i+1}`));
        valores.push(num);
    }

    console.log(`Crescente: ${orderAsc(valores)}`);
    console.log(`Decrescente: ${orderDesc(valores)}`);

}

let orderAsc = (list) => {
    let sequence = '';
    let orderedList;
    orderedList = list.sort((a,b)=>{return a-b});
    for (const numero of orderedList) {
        sequence += numero + ' ';
    }
    return sequence;
}

let orderDesc = (list) => {
    let sequence = '';
    let orderedList;
    orderedList = list.sort((a,b)=>{return b-a});
    for (const numero of orderedList) {
        sequence += numero + ' ';
    }
    return sequence;
}