// Array de objetos con la galería de imágenes
const obras = [
    { nombre: "1984x1984, Shadow Box 10", año: 2015, imagen: "img/galeria1.jpg" },
    { nombre: "33 Questions per Minute, Relational Architecture 5", año: 2021, imagen: "img/galeria2.jpg" },
    { nombre: "Babbage Nanopamphlets", año: 2015, imagen: "img/galeria3.jpg" },
    { nombre: "Bifurcation", año: 2019, imagen: "img/galeria4.jpg" },
    { nombre: "Blue Sun", año: 2018, imagen: "img/galeria5.jpg" }
];

// Se capturan los elementos de la galería y el botón
const contenedorGaleria = document.querySelector('#galeria');
const btnDiseño = document.querySelector('#btn-diseño');

// Se genera la galería interactiva y se inyecta el HTML generado
function generarGaleria() {
    let contenido = "";
    for (let i = 0; i < obras.length; i++) {
        contenido += `
            <article class="tarjeta-obra">
                <img src="${obras[i].imagen}" alt="${obras[i].nombre}">
                <h4>${obras[i].nombre}</h4>
                <p>Año: ${obras[i].año}</p>
            </article>
        `;
    }
    contenedorGaleria.innerHTML = contenido;
}

btnDiseño.addEventListener('click', function() {
    // Se capturan todos los elementos generados
    let tarjetas = document.querySelectorAll('.tarjeta-obra');

    for (let i = 0; i < tarjetas.length; i++) {
        if (tarjetas[i].style.backgroundColor === "rgb(51, 51, 51)") {
            tarjetas[i].style.backgroundColor = "#eee";
            tarjetas[i].style.color = "black";
        } else {
            tarjetas[i].style.backgroundColor = "#333";
            tarjetas[i].style.color = "white";
        }
    }
});

// Ejecución inicial para que la galería aparezca al cargar la página
generarGaleria();