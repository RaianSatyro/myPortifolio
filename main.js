const button = document.getElementById('buttonSeeMore');
const projetos = document.getElementById('Projetos');
const verMais = 'seeMore'
const esconder = 'hidden';
const textButton = 'textButton'
const divPrjetos = document.getElementById('Projetos');


function changeClass(){
    projetos.classList.toggle(esconder);
    projetos.classList.toggle(verMais);
    projetos.classList.toggle(textButton);

}

function changeText(){
    const seeAllText = "Veja Todos";
    const seeLessText = "Veja Menos";

    if(divPrjetos.classList.contains(textButton)){
        button.value = seeLessText;
        return;
    }else{
        button.value = seeAllText;
        return;
    }

}


function callFunctions(){
    changeClass();
    changeText();
}

button.addEventListener('click', callFunctions);