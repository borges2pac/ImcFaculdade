
function calculo() {            
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);            
            
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('insira dados válidos.');
        return;
    }            
            
    const imc = peso / (altura * altura);            
            
    let retorno;
    if (imc.toFixed(2) < 18.5) {
        retorno = 'Magreza';
    } else if (imc.toFixed(2) < 24.9) {
        retorno = 'Peso normal';
    } else if (imc.toFixed(2) < 30) {
        retorno = 'Sobrepeso.';
    } else {
        retorno = 'Obesidade';
    }          
            
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} kg/m2 (${retorno})`;
}
