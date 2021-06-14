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
]


const numeroMaximoDePersonagens = 671;

function iniciarPagina(){
    for(i = 0; i < 4; i++){
        getCharacter(i)
    }
}

function generateRandomNumber(){
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

function getCharacter(i){
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
    })
}

window.onload = iniciarPagina();