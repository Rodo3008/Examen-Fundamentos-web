const boton = document.getElementById('cursor');

boton.addEventListener('mouseover', function() {
  boton.innerText = "Envía Bouquets";
});

const botonDefinicion = document.getElementById('comprar');
botonDefinicion.addEventListener('click', function desaparecer () {
    botonDefinicion.remove();
})

document.getElementById("sesion").addEventListener("click",function(){
    alert("Bienvenido a la tienda de flores")
})