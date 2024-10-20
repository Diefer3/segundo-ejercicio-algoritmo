//pedir notas de los tres periodos"
let nota1 = prompt("ingrese nota del primer periodo");
let nota2 = prompt("ingresar nota del segundo periodo");
let nota3 = prompt("ingresar nota del tercer periodo");

//convertir las notas ingresadas en numeros (ya que prompt devuelve texto)
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

//calcular promedio//
let promedio = (nota1+nota2+nota3)/3;

// mostrar el resultado en la consola//
console.log("el promedio de las tres notas es:"+ promedio.toFixed(2));
