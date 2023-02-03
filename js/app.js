//ventana Modal del portafolio
const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal');
const parrafoModal= document.getElementById('parrafo-modal');

imagenes.forEach((imagen)=> {
	imagen.addEventListener('click', () =>{
		const ruta=imagen.querySelector('img').src;
		imagenModal.src=ruta;
		const ruta1=imagen.querySelector('figcaption').textContent;
		parrafoModal.textContent=ruta1;
	});
});


//Scroll up
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

	var currentScroll = document.documentElement.scrollTop;

	if(currentScroll > 0){
		
		window.scrollTo (0, currentScroll-(currentScroll/0));
	}
}


window.onscroll = function(){

	var scroll = document.documentElement.scrollTop;
	
	if (scroll > 150) {
		document.getElementById("button-up").style.transform = "scale(1)";
	} else{
		if(scroll<150){
			document.getElementById("button-up").style.transform = "scale(0)";
		}
	}
}