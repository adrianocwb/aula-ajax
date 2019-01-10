
function somar ()
{
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");

    var visor = document.getElementById("visor");

    console.log(n1,n2,visor);

    var resultado = parseInt (n1.value) + parseInt (n2.value);

    visor.innerHTML = resultado;
}