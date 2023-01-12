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