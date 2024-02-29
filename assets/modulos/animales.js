class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }
  get nombre() {
    return this._nombre;
  }
  get edad() {
    return this._edad;
  }
  get img() {
    return this._img;
  }
  get comentarios() {
    return this._comentarios;
  }
  set comentarios(comentarios) {
    this._comentarios = comentarios;
  }
  get sonido() {
    return this._sonido;
  }
}

let audio = document.getElementById("player");
class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  rugir() {
    audio.setAttribute("src", `./assets/sounds/${this._sonido}`);
    audio.onplay()
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  aullar() {
    audio.setAttribute("src", `./assets/sounds/${this._sonido}`);
    audio.onplay();
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  griñir() {
    audio.setAttribute("src", `./assets/sounds/${this._sonido}`);
    audio.onplay();
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  sisear() {
    audio.setAttribute("src", `./assets/sounds/${this._sonido}`);
    audio.onplay();
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  chillar() {
    audio.setAttribute("src", `./assets/sounds/${this._sonido}`);
    audio.onplay();
  }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
