import {
  Animal,
  Leon,
  Lobo,
  Oso,
  Serpiente,
  Aguila,
} from "../modulos/animales.js";

let getAnimales = (async () => {
  try {
    let respuesta = await fetch("/animales.json");
    let { animales } = await respuesta.json();
    //console.log(animales);

    return animales;
  } catch (error) {
    console.log(error);
  }
})();

//let tabla = document.getElementById("animales");
let boton = document.getElementById("btnRegistrar");
let modal = document.getElementById("exampleModal");
let modalBody = modal.querySelector(".modal-body");

animal.addEventListener("change", async () => {
  let animalEl = animal.value;
  //console.log(animalElegido);
  let animales = await getAnimales;
  //console.log(animales);
  let resultado = animales.find((a) => a.name == animalEl);
  //console.log(resultado);

  document.getElementById(
    "preview"
  ).style.backgroundImage = `url('assets/imgs/${resultado.imagen}')`;
  //console.log(preview);
  document.getElementById("player").src = `assets/sounds/${resultado.sonido}`;
  //console.log(player);
});

let infoCard = async () => {
  let nombre = document.getElementById("animal").value;
  let edad = document.getElementById("edad").value;
  let comentarios = document.getElementById("comentarios").value;
  let sonido = document.getElementById("player");
  let img = document.getElementById("preview");

  if (Animal == "Leon") {
    let newLeon = new Animal(nombre, edad, img, comentarios, sonido);
  } else if (Animal == "Lobo") {
    let newLobo = new Animal(nombre, edad, img, comentarios, sonido);
  } else if (Animal == "Oso") {
    let newOso = new Animal(nombre, edad, img, comentarios, sonido);
  } else if (Animal == "Serpiente") {
    let newSerpiente = new Animal(nombre, edad, img, comentarios, sonido);
  } else {
    let Aguila = new Animal(nombre, edad, img, comentarios, sonido);
  }
  let animalElegido = new Animal(nombre, edad, img, comentarios, sonido);
  //console.log(animalElegido);

  // let div = document.createElement("div");
  let animales = await getAnimales;

  let resultado = animales.find((a) => a.name == nombre);

  modalBody.innerHTML = `
        <div class="card container text-center col col-sm bg-secondary text-dark">
        <div class="card-header bg-dark text-light">
        <h2>${animalElegido.nombre}</h2></div>
        <div class="card-body">
          <img src="assets/imgs/${resultado.imagen}" class="my-4 container">
          <h6 class="text-light">Edad: ${animalElegido.edad}</h3>
          <p class="card-text text-light">
            "${animalElegido.comentarios}"
          </p>
      </div>`;
  //console.log(resultado)
  //console.log(div);
  //modal.appendChild(div);
  $(modal).modal("show");
};

let agregarCard = async () => {
  let agregar = document.getElementById("Animales");
  let div = document.createElement("div");
  let animalEl = animal.value;
  let animales = await getAnimales;

  let resultado = animales.find((a) => a.name == animalEl);

  div.innerHTML = `<div class="text-center col col-sm bg-secondary m-3 p-2">
         <img src="assets/imgs/${resultado.imagen}" width="150px" class="m-2">
       <div class="body-secondary" src="assets/sounds/${resultado.sonido}" type="audio/mpeg">
       <img src="./assets/imgs/audio.svg" id="sonido" alt="audio img" width="25px"/>
     </div> </div>`;

  agregar.appendChild(div);

  div.addEventListener("click", (e) => {
    infoCard();
  });

  console.log(div);
};

boton.addEventListener("click", (e) => {
  e.preventDefault(), agregarCard();
});
