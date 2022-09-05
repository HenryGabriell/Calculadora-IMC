
const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso =  document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Se o a const for Diferente de Vazio 
    if(nome !== '' && altura !== '' && peso !== ''){
        alert ('valor preenchido')
    } else{
        alert('Preencha os Campos')
    }
}

calcular.addEventListener('click', imc); 