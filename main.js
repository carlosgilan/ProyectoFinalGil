fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    }

    // There was an error
    return Promise.reject(response);
  })
  .then(function (data) {
    for (item in data) {
      if (
        data[item].casa.nombre === "Dolar Oficial" ||
        data[item].casa.nombre === "Dolar Blue"
      ) {
        let div = document.createElement("div");
        div.innerHTML = `<h2>${data[item].casa.nombre} compra a: ${data[item].casa.compra}</h2>`;
        document.body.append(div);
      }
      document.getElementById("dolarloading").style.display = "none";
    }
    console.log(data);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

//Sistema de simulador de creditos. Segunda Pre Entrega

let montoDelCredito; //variable que guarda el monto del prestamo que ingresa el usuario.

let numeroDeCuotas; //Variable que guarda el numero de cuotas del prestamo.

let montoTotalDelCredito; //Se guarda el monto que termina pagando el usuario por el prestamo.

let montoTotalDeCuotas; //Se guarda el monto total de cada cuota.s

let opcion; //Realiza la bandera al While para salir del simulador.

let continuar; //Sirve como bandera para continuar en un segmento del programa.

let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
  usuario = usuarioStorage;
  alert(`Bienvenid@ nuevamete: ${usuario}`);
} else {
  usuario = prompt("Ingrese su usuario");
  alert(`Bienvenid@ por primera vez: ${usuario}`);
  sessionStorage.setItem("usuario", usuario);
}

class Menu {
  constructor(opcion1, opcion2, opcion3, opcion4) {
    this.opcion1 = opcion1;
    this.opcion2 = opcion2;
    this.opcion3 = opcion3;
    this.opcion4 = opcion4;
  }
}

const inicio = new Menu("1", "2", "3", "4");

opcion = document.getElementById("opcion");

document.getElementById("calc-prestamo").addEventListener("click", () => {
  const containerRes = document.getElementById("resultado-prestamo");
  let div = document.createElement("div");
  div.innerHTML = `<h3>Calculando prestamo...</h3>`;
  containerRes.append(div);

  montoDelCredito = document.getElementById("monto-prestamo");
  numeroDeCuotas = document.getElementById("cuotas-prestamo");
  containerRes.innerHTML = "";
  if (numeroDeCuotas.value === "6") {
    montoTotalDelCredito =
      montoDelCredito.value * 0.3 + parseFloat(montoDelCredito.value);
    let div = document.createElement("div");
    div.innerHTML = `<h3>El monto total a pagar de su credito es: ${montoTotalDelCredito}</h3>`;
    containerRes.append(div);
  } else if (numeroDeCuotas.value === "12") {
    montoTotalDelCredito =
      montoDelCredito.value * 0.4 + parseFloat(montoDelCredito.value);
    let div = document.createElement("div");
    div.innerHTML = `<h3>El monto total a pagar de su credito es: ${montoTotalDelCredito}</h3>`;
    containerRes.append(div);
  } else if (numeroDeCuotas.value === "18") {
    montoTotalDelCredito =
      montoDelCredito.value * 0.5 + parseFloat(montoDelCredito.value);
    let div = document.createElement("div");
    div.innerHTML = `<h3>El monto total a pagar de su credito es: ${montoTotalDelCredito}</h3>`;
    containerRes.append(div);
  } else if (numeroDeCuotas.value === "60") {
    montoTotalDelCredito =
      montoDelCredito.value * 0.7 + parseFloat(montoDelCredito.value);
    let div = document.createElement("div");
    div.innerHTML = `<h3>El monto total a pagar de su credito es: ${montoTotalDelCredito}</h3>`;
    containerRes.append(div);
  }
});

document.getElementById("calc-automotor").addEventListener("click", () => {
  const containerRes = document.getElementById("resultado-automotor");
  let div = document.createElement("div");
  div.innerHTML = "<h3>Calculando credito automotriz...</h3>";
  containerRes.append(div);
  montoDelCredito = document.getElementById("monto-automotor");
  numeroDeCuotas = document.getElementById("cuotas-automotor");
  containerRes.innerHTML = "";

  if (numeroDeCuotas.value === "6") {
    montoTotalDelCredito =
      montoDelCredito.value * 0.2 + parseInt(montoDelCredito.value);
    montoTotalDeCuotas = montoTotalDelCredito / parseInt(numeroDeCuotas.value);
    const prestamosAuto = [];
    prestamosAuto.push(
      new PrestamoAuto(numeroDeCuotas, montoTotalDelCredito, montoTotalDeCuotas)
    );
    for (item of prestamosAuto) {
      item.numeroDeCuotas.value;
      item.montoTotalDelCredito;
      item.montoTotalDeCuotas;
    }
    let div = document.createElement("div");
    div.innerHTML = `
        <h3>El prestamo otorgado tiene una taza del 20%</h3>
        <h3>El numero de cuotas es: ${item.numeroDeCuotas}</h3>
        <h3>El monto total es: ${item.montoTotalDelCredito}</h3>
        <h3>El monto total de la cuota es: ${item.montoTotalDeCuotas}</h3>
        `;
    containerRes.append(div);
  } else if (numeroDeCuotas.value === "12") {
    montoTotalDelCredito =
      montoDelCredito.value * 0.4 + parseFloat(montoDelCredito.value);
    montoTotalDeCuotas = montoTotalDelCredito / parseInt(numeroDeCuotas.value);
    const prestamosAuto = [];
    prestamosAuto.push(
      new PrestamoAuto(numeroDeCuotas, montoTotalDelCredito, montoTotalDeCuotas)
    );
    for (item of prestamosAuto) {
      item.numeroDeCuotas.value;
      item.montoTotalDelCredito;
      item.montoTotalDeCuotas;
    }
    let div = document.createElement("div");
    div.innerHTML = `
        <h3>El prestamo otorgado tiene una taza del 40%</h3>
        <h3>El numero de cuotas es: ${item.numeroDeCuotas}</h3>
        <h3>El monto total es: ${item.montoTotalDelCredito}</h3>
        <h3>El monto total de la cuota es: ${item.montoTotalDeCuotas}</h3>
        `;
    containerRes.append(div);
  }
});
document.getElementById("busca-seguro").addEventListener("click", () => {
  const containerRes = document.getElementById("resultado-seguro");
  let div1 = document.createElement("div");
  div1.innerHTML = `<h3>Buscando Seguro...</h3>`;
  containerRes.append(div1);

  let buscadorDeSeguros = document.getElementById("input-seguro");
  containerRes.innerHTML = "";

  const seguros = [
    { nombre: "seguro de vida" },
    { nombre: "seguro de hogar" },
    { nombre: "seguro para autos" },
  ];
  localStorage.setItem("seguros", JSON.stringify(seguros));
  let seg = localStorage.getItem("seguros");
  console.log(JSON.parse(seg));

  const seguro = seguros.find(
    (item) => item.nombre === buscadorDeSeguros.value
  );
  if (seguro) {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>Seguro encontrado: ${seguro.nombre}</h3>
    `;
    containerRes.append(div);
  } else {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>Seguro no encontrado</h3>
    `;
    containerRes.append(div);
  }

  let div = document.createElement("div");
  div.innerHTML = `
    <h3>"Por ser el un cliente fiel te tenemos una sorpresa...un seguro sera escogido al azar para vos...</h3>
    `;
  containerRes.append(div);
  const seguros2 = ["Seguro de vida", "Seguro de hogar", "Seguro para autos"];
  const seguroAleatorio = () => {
    let index = Math.floor(Math.random() * seguros2.length);
    return seguros2[index];
  };
  let div2 = document.createElement("div");
  div.innerHTML = `
        <h3> Te ganaste el siguiente seguro por 1 año totalmente gratis: ${seguroAleatorio()}</h3>`;
  containerRes.append(div2);
});

class PrestamoAuto {
  constructor(numeroDeCuotas, montoTotalDelCredito, montoTotalDeCuotas) {
    this.numeroDeCuotas = numeroDeCuotas.value;
    this.montoTotalDelCredito = montoTotalDelCredito;
    this.montoTotalDeCuotas = montoTotalDeCuotas;
  }
}

botonOpciones.addEventListener("click", () => {
  if (opcion.value === "5") {
    let div = document.createElement("div");
    div.innerHTML = "<h3>Hasta la proxima, feliz dia...</h3>";
    document.body.append(div);
  }
});

const nuevosProductos = [
  { id: 1, nombre: "Seguro de vida", descripcion: "Personas" },
  { id: 2, nombre: "Seguro para autos", descripcion: "Autos" },
  { id: 3, nombre: "Seguro contra incendios", descripcion: "Incendios" },
  { id: 4, nombre: "Seguro de hogar", descripcion: "Hogar" },
];

localStorage.setItem("NuevosProductos", JSON.stringify(nuevosProductos));
let productos = localStorage.getItem("NuevosProductos");

console.log(JSON.parse(productos));

nuevosProductos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <h2>Id: ${item.id}</h2>
  <p>Nombre: ${item.nombre}</p>
  <b>Descripcion: ${item.descripcion}</b>
  `;
  document.body.append(div);
});
