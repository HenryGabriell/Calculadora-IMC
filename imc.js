
const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso =  document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Se o a const for Diferente de Vazio 
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorIMC < 18.5){
            classificacao= "abaixo do peso !";
        } else if (valorIMC < 24.9){
            classificacao= "com o peso ideal, Parabéns !!";
        } else if(valorIMC < 29.9){
            classificacao= "levemente acima do peso !";
        } else if(valorIMC < 34.9){
            classificacao= "com obesidade grau 1 !";
        } else if(valorIMC < 39.9){
            classificacao= "com obesidade grau 2 (severa)!";
        } else if(valorIMC > 40){
            classificacao= "com obesidade grau 3 (CUIDADO)!";
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;
    } else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);