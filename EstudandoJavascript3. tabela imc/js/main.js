//capturar evento de submit do formulario.
const form = document.querySelector('#formulario')
//cont var = pega  o    item         pelo id ou class

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputpeso = e.target.querySelector('#peso');
    const inputaltura = e.target.querySelector('#altura');

    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);

    if (!peso) {
        setresultado('peso invalido', false);
        return;
    } 
    if (!altura) {
        setresultado('altura invalida', false);
        return;}

        const imc = getimc(peso, altura);
        const nivelimc = getnivelimc(imc)
        
        const msg= `seu imc é ${imc} (${nivelimc}).`;
        setresultado(msg, true)
    });
function getnivelimc(imc){
    const nivel = ['abaixo do peso', 'peso normal','sobrepeso'
,'obesidade grau1','obseidade grau2','obesidade grau 3'];
 if(imc >= 39.9){
return nivel[5];
 }
 if (imc >= 34.9){
return nivel[4];
 }
 if(imc >= 29.9){
return nivel[3];
 }
 if (imc >= 24.9){
return nivel[2];
 }
 if(imc >= 18.9){
return nivel[1];
 }
 if(imc < 18.9){
return nivel[0];
}
}

function getimc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criap() {
    const p = document.createElement('p');
    return p;
}

function setresultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criap();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}