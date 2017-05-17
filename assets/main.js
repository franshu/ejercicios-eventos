	function paginaReady(){// muestra un alert indicando pagina cargada
		alert("Página cargada");
	}

	function mouseOut() {
    document.getElementById("input-onmouseout").style.color = "black";// muestra alert cuando el mouse se encuentre sobre el elemento
    alert("Estás sobre mí");
    console.log("Estás sobre mí");
}

function mouseOver() {
    document.getElementById("input-onmouseover").style.color = "red";// muestra alert cuando el mouse NO se encuentre sobre el elemento
    alert("No estás sobre mí");
    console.log("No estás sobre mí");
}

function pinchar(){
	var boton = document.getElementById("demo");// muestra un alert al momento del click
	alert("HOLA MUNDO!");
}


