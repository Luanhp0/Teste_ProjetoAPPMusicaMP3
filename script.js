



let musicas = [
    {titulo:'Guitar', artista:'Dek', src:'musicas/God Rest Ye Merry Gentlmen - DJ Williams.mp3', img:'imagens/rock.jpg'},
    {titulo:'open', artista:'Deres', src:'musicas/Ice & Fire - King Canyon.mp3', img:'imagens/samba.jpg'},
    {titulo:'ROck', artista:'john cress', src:'musicas/Emotional Mess - Amy Lynn & the Honey Men.mp3', img:'imagens/piano.jpg'}
];

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);



document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//eventos
musica.addEventListener('timeupdate', atualizarBarra);




//funcoes

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = SegundosParaMinutos(Math.floor(musica.duration));
    });
}


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
        document.querySelector('.botao-pause').style.display = 'none';
        document.querySelector('.botao-play').style.display = 'block';
    
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = SegundosParaMinutos (Math.floor(musica.currentTime));
}

function SegundosParaMinutos(segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }

    return campoMinuto + ':' + campoSegundos;
}


