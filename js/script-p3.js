// Se declaran las variables listaObras y totalObrasCargar
let listaObras = [];
let totalObrasCargar = 0;

// Se capturan los elementos id del formulario
const inputTotal = document.querySelector('#cant-obras'); 
const formulario = document.querySelector('#form-luces');
const btnCargar = document.querySelector('#btn-agregar');
const btnCalcular = document.querySelector('#btn-calcular');
const btnReiniciar = document.querySelector('#btn-reiniciar');
const areaResultados = document.querySelector('#area-resultados');

// Se carga el evento
btnCargar.addEventListener('click', function() {
    if (listaObras.length === 0) {
        totalObrasCargar = Number(inputTotal.value);
        if (isNaN(totalObrasCargar) || totalObrasCargar <= 0) {
            alert("Ingrese una cantidad válida.");
            return;
        }
        inputTotal.disabled = true;
    }
    console.log("Se ha cargado una obra");

    const nombre = document.querySelector('#nombre').value;
    const luces = Number(document.querySelector('#luces').value);
    const tiempo = Number(document.querySelector('#tiempo').value);
    const consumo = Number(document.querySelector('#consumo').value);
    const costo = Number(document.querySelector('#costo').value);

    if (nombre === "" || isNaN(luces) || isNaN(tiempo) || isNaN(consumo) || isNaN(costo)) {
        alert("Complete todos los campos correctamente.");
        return;
    }

    listaObras.push({ nombre, luces, tiempo, consumo, costo });
    alert("Obra cargada. Quedan: " + (totalObrasCargar - listaObras.length));
    formulario.reset();

    if (listaObras.length === totalObrasCargar) {
        btnCargar.disabled = true;
        btnCalcular.disabled = false;
    }
});

// Se escucha el evento "calcular"
btnCalcular.addEventListener('click', function() {
    let acumuladorConsumo = 0;
    let contadorMas20 = 0;
    
    // Se analiza el objeto
    let obraMax = listaObras[0];

    for (let i = 0; i < listaObras.length; i++) {
        let obraActual = listaObras[i];
        
        // Se acumula el consumo
        let consumoObra = obraActual.luces * obraActual.tiempo * obraActual.consumo;
        acumuladorConsumo += consumoObra;

        // Se busca el máximo de tiempo
        if (obraActual.tiempo > obraMax.tiempo) {
            obraMax = obraActual; 
        }

        // Se cuentan las obra que tengan más de 20 luces
        if (obraActual.luces > 20) {
            contadorMas20++;
        }
    }

    let promedio = acumuladorConsumo / listaObras.length;
    let porcentaje = (contadorMas20 / listaObras.length) * 100;
    
    // Se calcula el costo usando el objeto enbcontrado como máximo
    let costoMax = (obraMax.luces * obraMax.tiempo * obraMax.consumo) * obraMax.costo;

    areaResultados.innerHTML = `
        <div class="resultados">
            <p>1. Consumo Total: ${acumuladorConsumo.toFixed(2)} kWh/día (Promedio: ${promedio.toFixed(2)} kWh).</p>
            <p>2. Mayor uso: ${obraMax.nombre} (${obraMax.tiempo} hs). Costo: $${costoMax.toFixed(2)}.</p>
            <p>3. Obras con > 20 luces: ${porcentaje.toFixed(2)}%.</p>
        </div>
    `;

    btnCalcular.disabled = true;
    btnReiniciar.disabled = false;
    console.log("Se han calculado las obras");
});

btnReiniciar.addEventListener('click', function() {
    // Se resetean las variables globales de control 
    listaObras = []; 
    totalObrasCargar = 0;

    // Se limpia el área de resultados
    areaResultados.innerHTML = ""; 

    inputTotal.value = ""; 
    inputTotal.disabled = false;

    // Se limpian los campos del formulario
    formulario.reset(); 

    // Se restablece el estado de los botones
    btnCargar.disabled = false;
    btnCalcular.disabled = true;
    btnReiniciar.disabled = true;

    console.log("Sistema reiniciado correctamente");
});

// Se declara la variable datosCuriosos y los distintos datos aleatorios
const datosCuriosos = [
        "Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos.",
        "Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real.",
        "En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet.",
        "Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz.",
        "Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia.",
        "Ha expuesto sus obras en más de 70 países alrededor del mundo.",
        "Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico.",
        "Sus instalaciones suelen involucrar la participación activa del público para activar la obra.",
        "Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte.",
        "Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia.",
];

const btnAzar = document.querySelector('#btn-curiosidad');
const textoCurioso = document.querySelector('#texto-curioso');

btnAzar.addEventListener('click', function() {
    const indice = Math.floor(Math.random() * datosCuriosos.length);
    textoCurioso.innerText = datosCuriosos[indice];
    
    console.log("Se ha lanzado un dato al azar");
});