const form = document.getElementById ('form-sorteio');

form.addEventListener('submit', function (e) {
    let formEValido = true ;
    e.preventDefault(); 


    formEValido = campoPreenchido()
    if (formEValido) {
        alert ("Parabéns você foi o vencedor!");
    } else {
        alert ("Por favor insira os números corretamente.");
    }
})
function campoPreenchido(){
    const campoA = document.getElementById('campo-a').value;
    const campoB = document.getElementById('campo-b').value;

    return parseFloat(campoB) > parseFloat(campoA)
}