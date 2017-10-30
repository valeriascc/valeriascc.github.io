function linea() {
	document.getElementById('lineaContainer').style.display = "block";
	document.getElementById('slides').style.display = "none";
	document.getElementById('med-description').style.display = "none";
	document.getElementById('alta-description').style.display = "none";
	document.getElementById('slides2').style.display = "none";
	document.getElementById('metodo-imagen').style.display = "none";
	document.getElementById('metodo-descripcion').style.display = "none";
	document.getElementById('medida-container').style.display = "none";
	document.getElementById('casos-seccion').style.display = "none";
}

function medianaBtn() {
	document.getElementById('lineaContainer').style.display = "block";
	document.getElementById('slides').style.display = "block";
	document.getElementById('med-description').style.display = "block";
	document.getElementById('med-description-resp').style.display = "block";
	document.getElementById('alta-description').style.display = "none";
	document.getElementById('slides2').style.display = "none";
	document.getElementById('maxima-description').style.display = "none";
	document.getElementById('slides3').style.display = "none";
}

function altaBtn() {
	document.getElementById('alta-description').style.display = "block";
	document.getElementById('slides2').style.display = "block";
	document.getElementById('lineaContainer').style.display = "block";
	document.getElementById('med-description').style.display = "none";
	document.getElementById('slides').style.display = "none";
	document.getElementById('maxima-description').style.display = "none";
	document.getElementById('slides3').style.display = "none";
}

function metodoBtn() {
	document.getElementById('metodo-imagen').style.display = "block";
	document.getElementById('metodo-descripcion').style.display = "block";
	document.getElementById('casos-seccion').style.display = "none";
	document.getElementById('maxima-description').style.display = "none";
	document.getElementById('slides3').style.display = "none";
	document.getElementById('lineaContainer').style.display = "none";
	document.getElementById('slides').style.display = "none";
}

function medida() {
	document.getElementById('medida-container').style.display = "block";
	document.getElementById('lineaContainer').style.display = "none";
	document.getElementById('slides').style.display = "none";
	document.getElementById('metodo-imagen').style.display = "none";
	document.getElementById('metodo-descripcion').style.display = "none";
	document.getElementById('maxima-description').style.display = "none";
	document.getElementById('slides3').style.display = "none";
	document.getElementById('med-description').style.display = "none";
	document.getElementById('alta-description').style.display = "none";
	document.getElementById('slides2').style.display = "none";
}

function casosBtn() {
	document.getElementById('casos-seccion').style.display = "block";
	document.getElementById('medida-container').style.display = "block";
	document.getElementById('lineaContainer').style.display = "none";
	document.getElementById('slides').style.display = "none";
	document.getElementById('metodo-imagen').style.display = "none";
	document.getElementById('metodo-descripcion').style.display = "none";
	document.getElementById('maxima-description').style.display = "none";
	document.getElementById('slides3').style.display = "none";
}

function maximaBtn() {
	document.getElementById('maxima-description').style.display = "block";
	document.getElementById('slides3').style.display = "block";
	document.getElementById('alta-description').style.display = "none";
	document.getElementById('slides2').style.display = "none";
	document.getElementById('lineaContainer').style.display = "block";
	document.getElementById('med-description').style.display = "none";
	document.getElementById('slides').style.display = "none";
}