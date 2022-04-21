'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1]; // el array lo inicializamos con 1
  let i = 2;
  // la prueba con 180
  while (num > 1) { // Mientras que el num sea > 1 haga lo siguiente:
    if(num % i === 0) { // si 180 % 2 = 0 que es verdadero en este caso 90*2  = 180 resto es 0
      array.push(i) // Agregamos el 2 al array  [1,2]
      num/= i; // Dividimos 180 / i que es 180 / 2 = 90. y ya la proxima vuelta sera con 90.
    }
    else{
      i++ // si no se cumple la condicion anterio le sumano 1 a i, es decir i = 3 y segumos el proceso.
    };
  }
  return array; // retornamos el array resultante.
}
  



function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let estado = true;
  while(estado) { // mientras el estado sea verdadero, haga lo siguiente:
      estado = false; // dentro del while lo inicializamos falso para que no vayamos a tener problemas y senos vuelva un loop infinity
      for(let i = 0; i < array.length-1; i++) { //recorremos el array, solo llegamos hasta el penultimo elemento
        if(array[i] > array[i+1]) { // procedemos a la condicion, Si array en posición 0 que es 50 
          //es mayor a array en posicion 1 que es 45, esta afirmacion es verdader entonces.  hagamos el cambio
          let auxiliar = array[i] // creamos una variable auxiliar y le almacenamos el valor de i, 
          //de esta manera evitamos perder ese valor
          array[i] = array[i+1]; // array [0] = array[1] osea el array va asi [45,45,7,45,6,9] 
          array[i+1] = auxiliar; // Y ahora el 45 va ser igual valor de i que habiamos pisado, 
          //queda asi [45,50,7,45,6,9] y asi sucesivamente vamos comprando hasta recorrer todo el array.
          estado = true; //  ponemos el estado en true para que vuelva a entrar.
      }
    }
  }
  return array;
  // function compare(a, b) {return a-b}
  // array = array.sort(compare);
  // return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var len = array.length;

	for(var i=1; i<len; i++) {
		var j = i;
		
		while(j>0 && array[j-1] > array[j]) {
			var temp = array[j-1];
			array[j-1] = array[j];
			array[j] = temp;
			j--;
		}
	}
	return array;	
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length-1; i++) {
    let menor = i;
    for (let j = i+1; j < array.length; j++) {
      if(array[menor] > array[j]){
        menor = j;
      }
    }
    if(i!== menor) {
      let auxiliar = array[i];
      array[i] = array[menor];
      array[menor] = auxiliar;
    }
  }
return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
