const listaDeAmigos = [];

function limparCampo() {
    document.getElementById('amigo').value = '';
}


function addAmigos() {
    let amigos = document.getElementById('amigo').value;

    if (amigos == '') {
        alert('Por favor, Digite um nome valido!');
        return
    }
    if(verificaCaracteresEspeciais(amigos)) {
        alert("por favor digite um nome valido!")
        return
    } else {
        listaDeAmigos.push(amigos);
        let addAmigos = document.getElementById('listaAmigos');
        addAmigos.innerHTML = listaDeAmigos.map((amigo) => `<li>${amigo}</li>`).join('');
        limparCampo();
        estadoDoBotao()
    }
}

function sortearAmigos() {
    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia')
    } else if (listaDeAmigos.length != 3){
        alert('a lista deve conter mais um nome')
        return
    }
    let numeroAleatorio = Math.floor(Math.random() * listaDeAmigos.length)
    let amigoSorteado = listaDeAmigos[numeroAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é ${amigoSorteado}`;
}

const inputAmigo = document.getElementById('amigo');
const buttonAdd = document.querySelector('.button-add');

function estadoDoBotao() {

    if (inputAmigo.value.trim() !== "") {
        buttonAdd.classList.add('active');
    } else {
        buttonAdd.classList.remove('active');
    }
}

inputAmigo.addEventListener('input', estadoDoBotao);

function verificaCaracteresEspeciais(str){
    const regex = /[^a-zA-Z0-9 ]/;
    return regex.test(str)
}