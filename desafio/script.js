const image = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4')
];

const charName = [
    document.getElementById('name1'),
    document.getElementById('name2'),
    document.getElementById('name3'),
    document.getElementById('name4')
];

const alive = [
    document.getElementById('alive1'),
    document.getElementById('alive2'),
    document.getElementById('alive3'),
    document.getElementById('alive4')
];

let bg = document.getElementById('bg');
const numeroMaximoDePersonagens = 671;
let vivos = 0, mortos = 0, carregamento = 0;
let status = ["","","",""] ;
let proporcaoMorto = 4;
let proporcaoVivo = 4;


iniciarPagina = () => {
    for(i in charName){
        getCharacter(i)
    }
    theyAlives(status);
}

generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter = (i) => {
    id = generateRandomNumber();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
    }
    }).then((response) => response.json()).then((data) => {
    image[i].src = data.image;
    image[i].alt = data.name;
    charName[i].innerHTML = data.name;
    charName[i] = textAnimated(charName[i])
    alive[i].innerHTML = data.status;
    status[i] = data.status;
    alive[i] = textAnimated(alive[i])
    })
}

textAnimated = (text) => {
    const texttoArray = text.innerHTML.split('');
    text.innerHTML = '';
    texttoArray.forEach((letra, i) => {
        setTimeout(() => text.innerHTML += letra, 200 * i)
    });
}

theyAlives = (dado) => {
    setTimeout(() => {
        for(i in status){
            if(dado[i] == "Dead") {mortos++}
            else {vivos++}
            console.log(vivos+" "+mortos);
        }
        porporcaoBg();
    }, 3000)

}

porporcaoBg = () => {
    proporcaoVivo = vivos / proporcaoVivo * 100;
    proporcaoMorto = (mortos / proporcaoMorto * 100);
    bg.style.backgroundImage = "linear-gradient(to right, #87ceeb "+proporcaoVivo+"%, #b31b21 "+proporcaoMorto+"%)";
    console.log(bg.style.backgroundImage)
    console.log(proporcaoMorto)
}

window.onload = iniciarPagina();