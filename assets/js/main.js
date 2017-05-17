	function paginaCargada(){// esta funcion mostrara una alerta indicando que la pagina esta cargada
		alert("La pagina esta cargada");
	}

	function mouseOut() {
    document.getElementById("mi-input").style.color = "black";// esta funcion muestra una alerta al cuano el mouse se encuentre sobre el elemento
    alert("Estas sobre mi");
    console.log("Estas sobre mi");
}

function mouseOver() {
    document.getElementById("segundoInput").style.color = "red";// esta funcion muestra una alerta cuando el mouse no este sobre el elemento
    alert("No estas sobre mi");
    console.log("No estas sobre mi");
}

function apretar(){
	var boton = document.getElementById("demo");// esta funcion mostrara una alerta Hola Mundo al momento de hacer click al boton apretar
	alert("HOLA MUNDO!");
}


