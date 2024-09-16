let parrafo = document.getElementById(miparrafo);
console.log(parrafo.textContent)

let boton = document.getElementById("mi boton");
boton.addEventListener("click", function(){
    parrafo.textContent = "texto acrualizado";
    console.log(parrafo.textContent);
} )