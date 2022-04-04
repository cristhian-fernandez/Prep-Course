// PRACTICANDO LOS TEMAS DE LA CLASE

console.log('Hola mundo');
function sumar(a , b){
    return a + b;
}

console.log(sumar(5,9));


function saludar(nombre) {
    console.log('Hola mundo, '+nombre);
}

saludar('Mario Castañeda');

function ispar(num) {
    return (num%2==0?true:false);
}

console.log(ispar(8));

function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    let conversion = 1.20 * euro;
    return '$ ' + conversion + 'dólares.';  
}

console.log(deEuroAdolar(8));



function esVocal(letra){
    let caracter = letra.toLowerCase();
    if (caracter.length > 1) {
      console.log("Dato Incorrecto");
    } else if (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 'u') {
      console.log("Es Vocal");
    } else {
      console.log("Dato Incorrecto");
    }
  }
  
  esVocal('U');

  const nuevaMultiplicacion = 10 * 5 === 40 ;

  console.log(nuevaMultiplicacion);