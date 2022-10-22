// var grupoTarjetas1 = ["🦄", "🐝", "🍄","🇪🇸","😁","🤡","👾","💩"];
// var grupoTarjetas2 = ["👩🏻‍🎤", "🧞", "🧟‍♂️","🙇🏽‍♀️","🙎🏼‍♀️","🌝","☃️","🍪"];
// var grupoTarjetas3 = ["🍥", "🍻", "🥊","📷","💾","🎥","📺","🛠"];

// var totalTarjetas = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);
// var arrayAnindado = 
// [ ["🦄", "🐝", "🍄","🇪🇸","😁","🤡","👾","💩"],
//   ["👩🏻‍🎤", "🧞", "🧟‍♂️","🙇🏽‍♀️","🙎🏼‍♀️","🌝","☃️","🍪"],
//   ["🍥", "🍻", "🥊","📷","💾","🎥","📺","🛠"]
// ];
// si quiero acceder al emoticono del disquette seria:
 
// console.log(arrayAnindado[2] [4])

// acuerdate que siempre se cuenta desde 0,1,2,3,4 etc... por lo que el tercer grupo de array es el [2]

var grupoTarjetas = ["🦄", "🐝", "🍄","😁","🤡","👾","💩","🎱"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
    var resultado;
    // resultado = Math.floor(Math.random() * 100 ) + 1 ;
    resultado = totalTarjetas.sort(function() {
           return 0.5 - Math.random();
        });

  return resultado;
}

function reparteTarjetas() {

    var mesa = document.querySelector("#mesa")
    var tarjetasBarajadas = barajaTarjetas();

    mesa.innerHTML = ""

   

    tarjetasBarajadas.forEach(function (e) {

        var tarjeta = document.createElement("div");

        tarjeta.innerHTML = 
        "<div class ='tarjeta'>" +
        "<div class ='tarjeta__contenido'>"+
        e + "</div>" + "</div>"
    
        mesa.appendChild(tarjeta);
            
    });
};

function descubrir() {
    this.classList.add("descubierta")

}
 
reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) 
{ elemento.addEventListener("click", descubrir);
});

// bonus 

function repartir () {
    reparteTarjetas();
  
      document.querySelectorAll(".tarjeta").forEach(function(elemento) {
      elemento.addEventListener("click", descubrir);
    });
  
  }
  
  var boton = document.querySelector("#button");
  boton.addEventListener("click", repartir);
