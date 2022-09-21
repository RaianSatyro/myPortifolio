const button = document.getElementById('buttonVerMais');
const projetos = document.getElementById('Projetos');
const verMais = 'vejaMais'
const esconder = 'hidden';

function mudaclass(){
    projetos.classList.toggle(esconder);
    projetos.classList.toggle(verMais);

}

button.addEventListener('click', mudaclass);