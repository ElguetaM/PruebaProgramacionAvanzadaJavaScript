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
    let animals = await respuesta.json();
    //console.log(animals);

    return animals;
  } catch (error) {
    console.log(error);
  }
})();

//let tabla = document.getElementById("animales");
let boton = document.getElementById("btnRegistrar");



animal.addEventListener("change", async () => {
  let animalEl = animal.value;
  //console.log(animalElegido);
  let animals = (await getAnimales).animales;
  //console.log(animals);
  let resultado = animals.find((a) => a.name == animalEl);
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
    let Leon = new Animal(nombre, edad, img, comentarios, sonido);
  } else if (Animal == "Lobo") {
    let Lobo = new Animal(nombre, edad, img, comentarios, sonido);
  } else if (Animal == "Oso") {
    let Oso = new Animal(nombre, edad, img, comentarios, sonido);
  } else if (Animal == "Serpiente") {
    let Serpiente = new Animal(nombre, edad, img, comentarios, sonido);
  } else {
    let Aguila = new Animal(nombre, edad, img, comentarios, sonido);
  }
  let animalElegido = new Animal(nombre, edad, img, comentarios, sonido);
  //console.log(animalElegido);

  let div = document.createElement("div");
  let animalEl = animal.value;
  let animals = (await getAnimales).animales;
  //console.log(animals);
  let resultado = animals.find((a) => a.name == animalEl);

  div.innerHTML = `<div class="card container text-center col col-sm bg-secondary text-dark">
      <div class="card-header bg-dark text-light">
      <h2>${animalElegido.nombre}</h2></div>
      <div class="card-body">
        <img src="assets/imgs/${resultado.imagen}" width="300px" class="my-4">
        <h6 class="text-light">Edad: ${animalElegido.edad}</h3>
        <p class="card-text text-light">
          "${animalElegido.comentarios}"
        </p>
      </div>
      <div class="card-footer text-body-secondary bg-dark" src="assets/sounds/${resultado.sonido}">
        <img src="./assets/imgs/audio.svg" alt="audio img" width="40px" />
      </div>
    </div>`;
  document.appendChild(div);

  //console.log(div);
};

let agregarCard = async () => {
  let agregar = document.getElementById("Animales");
  let div = document.createElement("div");
  let animalEl = animal.value;
  let animals = (await getAnimales).animales;

  let resultado = animals.find((a) => a.name == animalEl);

  div.innerHTML = `<div class="text-center col col-sm bg-secondary m-3 p-2">
         <img src="assets/imgs/${resultado.imagen}" width="150px" class="cardMini my-1">
       <div class="body-secondary" src="assets/sounds/${resultado.sonido}" type="audio/mpeg">
       <img src="./assets/imgs/audio.svg" alt="audio img" width="25px"/>
     </div>`;

  agregar.appendChild(div);

  console.log(div);
};

boton.addEventListener("click", (e) => {
  e.preventDefault(),
  agregarCard(); 
});
