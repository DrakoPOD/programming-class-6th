# Arreglos

Los arreglos (array en inglés) son matrices que almacenan una lista ordenadas de datos (tanto primitivos u objetos dependiendo del lenguaje). Se emplean para almacenar multiples datos en una sola variable.

Cada elemento está asociado a un índice numérico, que permite acceder a dicho elemento. En casi todos los lenguajes el índice empieza desde la posición.

```js
var myArray = [1,2,3,4,5];

var animals = ['perro', 'gato', 'caballo'];

var datos = [1, 'texto', true, null, [], {}]
```

En JavaScript, al ser un lenguaje de tipado débil puede almacenar varios tipos de datos en un arreglo. Otros lenguajes, como C++ solo permiten un solo tipo de dato.

Para acceder a un dato se tiene que poner su indice dentro de corchetes.

```js
var nombres = ['Marcos', 'Pedro', 'Ana', 'Luna'];

console.log(nombres[2])  // Ana
console.log(nombres[0])  // Primer elemento Marcos
console.log(nombres[nombres.length - 1])    // último elemento Luna
```

Los arreglos en JavaScript también son objetos por lo que dispone de propiedades y métodos. `.length` es una propiedad que devuelve el largo del arreglo.

## Recorrer un array

Recorrer un array, también se le dice iterar arreglos, es acceder a cada elemento siguiendo una secuencia numérica, JavaScript dispone de varias maneras de iterar arreglos de acuerdo a lo que necesitemos. Ahora veremos `forEach`, que es español sería 'para cada', es un método de los arreglo que va desde el índice 0 hasta el último, recibe como argumento una función que se llamará cada vez que se itere un elemento, a dicha función se le pasarán otros argumentos de acuerdo al valor que se esté iterando en ese momento.

```js
var frutas = ['manzana', 'pera', 'naranja', 'fresa', 'mora', 'limón'].

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice)
});
// manzana 0
// pera 1
// ...
```

Otra forma de recorrer un arreglo es mediante un bucle `for`

```js
var frutas = ['manzana', 'pera', 'naranja', 'fresa', 'mora', 'limón'].

for (let indice = 0; indice < frutas.length; indice++) {
    const elemento = frutas[indice];
    console.log(elemento, indice)
}
// manzana 0
// pera 1
// ...
```

## Añadir y eliminar elementos a un arreglo

Mediante el método `push` de los arreglos, podemos añadir nuevos elementos al final de un arreglo.

```js
var frutas = ['manzana', 'pera'];

frutas.push('naranja');

frutas      // ['manzana', 'pera', 'naranja']
```

El método `pop` elimina el último elemento

```js
var frutas = ['manzana', 'pera'];

frutas.push();

frutas      // ['manzana']
```

### Añadir un elemento al principio de un arreglo con el método `unshift`

```js
var frutas = ['manzana', 'pera'];

frutas.unshift('naranja');

frutas      // ['naranja', 'manzana', 'pera']
```

### Eliminar el primer elemento con el método `shift`

```js
var frutas = ['manzana', 'pera'];

frutas.shift();

frutas      // ['pera']
```

### Encontrar el índice de un elemento con `indexOf`

`indexOf` retorna la primera coincidencia, por lo que si hay varios elementos con la misma coincidencia, retornará el primero del arreglo.

```js
var frutas = ['manzana', 'pera', 'naranja']

frutas.indexOf('pera');     // 1
```

### Eliminación de elementos con `splice`

`splice` es un método que permite eliminar elementos en una posición elegida, acepta varios parámetros, el primero de ellos es la posición elegida, el segundo es la cantidad de elementos a eliminar. Este método retorna los elementos eliminados.

```js
var frutas = ['manzana', 'pera', 'naranja']

var eliminado = frutas.splice(1,1)  // ['manzana', 'naranja']

eliminado       // 'pera'
```

En el segundo parámetro tenemos 1, por lo que solamente borrará un elemento. si pusiésemos 2, entonces eliminaría dos elementos y así.

```js
var frutas = ['manzana', 'pera', 'naranja']

var eliminado = frutas.splice(1,2)  // ['manzana']

eliminado       // ['pera', 'naranja']
```

## Copiar un arreglo

Hay que tener cuidado al copiar un arreglo, si intentamos igualar de una variable a otra no sería el resultado deseado, dado que se estaría copiando su referencia, Cualquier cambio qu hagamos a este "nuevo" array s verá reflejado en el original.

```js
var frutas = ['manzana', 'pera', 'naranja']

var copiaFrutas = frutas

copiaFrutas.push('perro')

frutas          // ['manzana', 'pera', 'naranja', 'perro']
copiaFrutas     // ['manzana', 'pera', 'naranja', 'perro']
```

Para copiar un arreglo se pude hacer uso del método `slice`, si se dejan vacíos sus argumentos entonces devolverá una copia del array.

```js
var frutas = ['manzana', 'pera', 'naranja']

var copiaFrutas = frutas.slice()

copiaFrutas.push('perro')

frutas          // ['manzana', 'pera', 'naranja']
copiaFrutas     // ['manzana', 'pera', 'naranja', 'perro']
```

## Otros métodos esenciales de los arreglos

Aquí hay algunos métodos útiles para los arreglos

### `map`

Itera el arreglo y aplica una función a cada elemento, permitiendo modificarlos y retorna un nuevo arreglo. Usaremos una función flecha para más comodidad.

```js
var array = [1,2,3,4,5]

var newArray = array.map(x => x + 2) // [3,4,5,6,7]
```

### `filter`

Este es un método que filtra arreglos, todos los elementos que cumplan con la condición formarán parte del nuevo arreglo. acepta una función como parámetro pero esta debe retornar un valor booleano.

```js
var num = [1,2,3,4,5,6,7,8,9,10]

var pares = num filter(x => x % 2 == 0) // números pares [2,4,6,8,10] 
```

### `sort`

Sort ordena un arreglo, recibe una función como parámetro, estaba debe devolver un valor mayor o menor que `0`, si no se le pasa una función esta ordenará los valores en base a la posición [Unicode](https://unicode-table.com/en/).

La función acepta dos valores `a` y `b` que corresponden al elemento actual y al siguiente respectivamente.

- Si el valor que retorna es menor que `0` entonces significa que `a` se posiciona primero que `b`.
- Si el valor que retorna es mayor que `0` entonces significa que `b` se posiciona primero que `a`.
- Si el valor que retorna es igual a `0` entonces dejará los elementos sin cambios.

```js
var num = [4, 2, 5, 1, 3];
num.sort(function(a, b) {
  return a - b;
});
console.log(num); // [1, 2, 3, 4, 5]
```

## Arreglos multidimensionales

Un arreglo es una matriz y, al igual que ellas, puede tener varias dimensiones, es decir, un arreglo dentro de un arreglo. Para acceder a ellos pues es de la misma manera que un arreglo normal, solo que en este caso se añade otro par de corchetes para la segunda dimensión.

```js
// Matriz 3x3
var matriz = [  
    [0,0,0],
    [0,1,0],
    [0,0,0]
]

matriz[1][1]        // 1
```

### Iterar un arreglo multidimensional

```js
var matriz = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]

for (let fila = 0; fila < matriz.length; fila++){
    for (let col = 0; col < matriz[fila].length; col++){
        console.log(matriz[fila][col])
    }
}
```