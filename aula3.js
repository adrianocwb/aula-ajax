//js

function grande()

{

	var input = document.getElementById("texto");
	var resultado = document.getElementById("resultado");

	var texto = input.value;

	resultado.innerHTML = texto.toUpperCase();
}


function cidade()

{

	var cidade = document.getElementById("cidade");
	var resultado = document.getElementById("lista");

	var novo = '<li>'+ cidade.value +'</li>';

	console.log(cidade,lista);

	lista.innerHTML = lista.innerHTML + novo;

}