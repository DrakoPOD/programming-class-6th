# Variables

Una variable es un espacio en la memoria para almacenar datos durante la ejecución de un programa. Se le asigna un nombre simbólico a dicho espacio. Visto de otra forma, una variable es como una caja para guardar cosas.

```js
var miVariable;
```

Las variables pueden cambiar su valor durante el transcurso del programa, pero se borran al finalizar la ejecución del programa. Aunque también existen las variables constantes cuyo valor nunca cambia durante la ejecución, pero aun así se pierden al finalizar.

```js
var miVariable = 6;

miVariable = 0;
```

En este ejemplo hemos asignado el valor de `6` a la variable, luego le hemos cambiado a un 0. Sin embargo, durante la ejecución de un programa, no podemos ver las variables sin un **depurador (debugger)**, para poder ver su valor haremos uso del método `console.log` que nos muestra información por la consola.

```js{5}
var miVariable = 6;
var Numero = 5;

console.log(miVariable);    // 6
console.log(numero);        // undefined
```

El último nos dió indefinido ¿Por qué? si le habías asignado un valor, pues eso es porque declaramos `Numero`, y llamamos con `numero`, la `N` la pusimos mayúscula cuando declaramos la variable y luego la llamamos con una minúscula, eso es porque JavaScript (y muchos otros lenguajes) es sensible a mayúsculas y minúsculas.

## Tipos de datos

Las variables pueden ser de varios tipos, dependiendo del tipo de información que almacenen, a estos datos se les denomina **tipos primitivos**, son los tipos de datos fundamentales de cada lenguaje y que nos permite construir tipos de datos más complejos:

- **Número (`number`):** como su nombre indica, almacena números, ejemplos `9`, `0.43`, `1`. En javascript las variables numéricas pueden ser enteras o de punto flotante (decimales), no hace distinción.
  - En algunos lenguajes, las variables numéricas pueden solamente aceptar caracteres enteros (`int`), por ejemplo `1`, `34`, `543`, se debe usar otro tipo de variable si se quiere usar números con punto flotante, por ejemplo `0.2`, `1.43`.
- **Texto (`string`):** almacena cadenas de caracteres. En muchos lenguajes se suelen expresar con comillas dobles `""`, en javascript también es válido usar comillas simples `''`. `'Hola Mundo'`, `"Pedro"`, `"124"`.
  - En programación se hace una diferencia con `string` y `char`, ya que algunos lenguajes tienen el tipo de datos `char`, en el cual solo almacenan un carácter, `'a'`, `'1'`, `'e'`.
- **Lógico (`Boolean`):** esta variable solo puede almacenar el tipo lógico, es decir, `1` o `0`. Otra forma de expresar es como `true` y `false`.
- **Nulo (`null`):** representa la ausencia intencional de cualquier valor de objeto.
- **Indefinido (`undefined`):** si no se le asigna un valor a una variable al ser creada, tendrá el valor `undefined`.

JavaScript dispone de otro tipo de dato, es un typo de dato mucho más complejo, puede estar compuesto por datos primitivos y hasta funciones, son los **objetos**.

- **Objeto (`object`):** es un typo de dato que almacena otros datos de la forma de `clave : valor` (`key : value`), se desglosará más adelante este tipo de datos.

```js
var miObjeto = {
    name: "Pedro",
    edad: 20,
    admitido: true
}
```

- **Arreglo (`Array`):** los arreglos en JavaScript también son objetos, pero no son objetos en otros lenguajes, dado que estos almacenan los datos en forma de lista, donde cada uno de ellos posee una posición numérica en la lista, se hablará más adelante de este tipo de datos.

```js
var miArreglo = [1,2,4,10,5]
```

Para poder visualizar el tipo de dato de una variable usamos el operador `typeof` que nos devuelve el tipo de dato. Debemos usar el `console.log` para ver los valores, pero no los ahorraremos para un ejemplo más limpio.

```js
typeof 5            // number
typeof 1.5          // number
typeof "hey"        // string
typeof "342"        // string
typeof true         // boolean
typeof undefined    // undefined

typeof {}           // object
typeof []           // object
typeof null         // object por cuestiones de legado
```

## Operaciones con variables y tipos datos

### Operaciones numéricas

Las operaciones con números son muy parecidas a las matemáticas normales, he aquí un ejemplo con las operaciones más básicas de matemáticas.

```js
var numA = 5;
var numB = 4;

// Suma
console.log( numA + numB );   // 9

// Resta
console.log( numA - numB );   // 1

// Multiplicación
console.log( numA * numB );   // 20

// Exponente
console.log( numA ** numB );  // 625

// División
console.log( numA / numB );   // 1.25

// Modulo, residuo de una división
console.log( numA % numB );   // 1

// Incremento, incrementa en uno
console.log( numA++ );        // 6

// Decremento, reduce en uno
console.log( numB-- );        // 3
```

#### Expresiones matemáticas

Si queremos hacer la siguiente operación: `sumar 100 + 50 y luego multiplicarlo por 2, después sumar 50 más`. El resultado de eso sería 350.

```js
var resultado = 100 + 50 * 2 + 50

console.log(resultado)      // 250
```

El resultado no es el esperado, no se tomaron en cuenta el orden de las operaciones, las computadoras también siguen dicho orden. Entonces deberíamos corregir la ecuación haciendo uso de paréntesis.

```js
var resultado = (100 + 50) * 2 + 50

console.log(resultado);     // 350
```

#### El valor `NaN`

`NaN` significa **Not-A-Number** (No es un número) este valor se utiliza cuando se intentó realizar una operación numérica, pero el resultado no es un número, por ejemplo cuando convertimos de texto a número.

```js
var num = Number("abc");

console.log(num);   // NaN
```

### Operaciones con texto

Las variables de tipo `string` son inmutables en JavaScript, esto quiere decir que no se puede modificar una vez creada, cuando modificamos una variable tipo `string` debemos reasignar su valor a una nueva variable o reutilizar la misma.

```js
var text1 = "Hola";
var text2 = "Mundo";

var text3 = text1 + text2;

console.log(text3);         // HolaMundo
```

El nombre qu recibe estas operaciones en programación es **concatenación**
Podemos usar cadenas directamente sin la necesidad de una variable, vamos a añadir un espacio a la cadena de texto anterior.

```js
var text3 = text1 + " " + text2;

console.log(text3);         // Hola Mundo
```

## Reutilización de variables

No es necesario crear una variable cada vez que vayamos a realizar una operación, esto podría aumentar el consumo de memoria de nuestra aplicación/programa y volverlo más lento. Tomemos el siguiente ejemplo.

> Tomar un número, sumarle 4, multiplicarlo por 3, restarle 2, sumarle 5, multiplicarlo 2, dividirlo entre 3.

```js
var num1 = 4;
var num2 = num1 + 4;
var num3 = num2 * 3;
var num4 = num3 - 2;
var num5 = num4 + 5;
var num6 = num5 * 2;
var num7 = num6 / 3;

console.log(num7);      // 18
```

Son 7 variables en total, y muchas de ellas no se van a volver a utilizar, pero todo esto se puede hace con una sola variable.

```js
var num = 4;
num = num + 4;
num = num * 3;
num = num - 2;
num = num + 5;
num = num * 2;
num = num / 3;

console.log(num);      // 18

// Aunque podría simplificarse aún más
num = 4;
num = ((num + 4) * 3 - 2 + 5) * 2 / 3;
console.log(num)
```

Es posible asignar una variable a ella misma, internamente el programa copia la variable en una nueva ubicación para realizar la operación, cuando finaliza la operación guarda el resultado de dicha operación en la variable que se eligió, en este caso, ella misma.

## Diferencia entre `null` y `undefined`

Hay que tener cuidado al realizar comparaciones entre `null` o `undefined`. Aunque `null` es un dato primitivo, internamente es considerado como `object` por el interprete de JavaScript, esto es por motivos de compatibilidad, dado que cuando se creo era un objeto, pero luego se consideró como un dato primitivo.

Como sabrán javascript se usa en **TODOS** los navegadores del mundo, estos se actualizan todo el tiempo para incorporar las nuevas funciones de JavaScript. Pero algunas personas no lo actualizan ya sea porque no saben como hacerlo, o porque su dispositivo no soporta las nuevas versiones. Así que para mantener una consistencia en toda la web, lo mantienen como `object`.

```js
typeof null          // "object" (no "null" por razones de compatibilidad)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null  == null        // true
!null                // true

// isNaN verifica si el resultado de la operación es NaN
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```

## Operaciones matemáticas entre tipos `string` y `number`

Miremos el siguiente ejemplo entre una suma de `5` y `"5"`, se espera que la respuesta sea `10`.

```js
var numA = 5;
var numB = "5";

console.log(numA + numB);   // 55
```

¿Que ha sucedido? ¿No debería ser `10`? ¿Acaso esto demuestra la superioridad de los humanos sobre las computadoras? No hay que irse tan lejos, vamos a hacer un `typeof` de las variables.

```js
var numA = 5;
var numB = "5";

console.log(typeof numA);   // number
console.log(typeof numB);   // string
```

Como vemos, estamos intentamos sumar un dato de tipo `number` con uno de tipo `string`, y JavaScript lo interpreta como una concatenación, una suma se caracteres, así que convierte al número `5` en un `string`. Pero que sucede si usamos una resta ahora.

```js
var numA = 5;
var numB = "5";

console.log(numA - numB);   // 0
```

Ahora javascript lo interpreta como una resta convierte el `"5"` en un número, es porque no existe tal cosa como la "resta" de caracteres, existe la eliminación, la extracción o el remplazo de caracteres, pero eso es para otra ocasión. Esto que sucedió con la resta también sucede con la multiplicación, división y módulo.

Miremos lo que sucede si restamos una letra.

```js
var numA = 5;
var numB = "a";

console.log(numA - numB);   // NaN
```

No se puede restar plátano con manzana, y por eso da resultado `NaN`.

## Verificación de tipos

Vimos que JavaScript no le importa si sumamos una letra y un número, o si queremos sumar pero en vez de eso concatena los valores, eso es porque JavaScript es un lenguaje de **tipado débil**, vamos a explicar esto.

Un lenguaje de **tipado fuerte** no permite violaciones en los tipos de datos, es decir que una variable que fue creada con un tipo en concreto, no puede ser usada para otros tipos de datos ni efectuar operaciones que no tengan relación con su tipo, para poder hacer esto sería necesario realizar una conversión de los datos. Si se intentase hacer una violación de datos estos darías error durante el proceso de compilación, ni siquiera se podría ejecutar.

Un lenguaje de **tipado débil** como JavaScript, permite esta clase de violaciones, dando resultado a muchos problemas si no se tiene cuidado con los tipos antes de realizar alguna operación. JavaScript no verifica los datos antes de efectuar una operación, al ser un lenguaje interpretado tampoco hace una compilación, por lo que tampoco avisa cuando terminamos nuestro código.

```js
// Verificar la entrada de un dato.
var num = getNumber();

if (isNaN(num)){    // isNaN es un método que recibe un valor y devuelve verdadero si no es un número
  console.log("El valor introducido no es un número")
}else{
  console.log(num + 20);
}
```

Aquí hacemos uso de una condicional ver el siguiente tema, [condicionales](./02-conditional.md).

Dato todos estos problemas de tipado y estructuras de datos hacía de JavaScript un lenguaje propenso a errores durante la ejecución de código en fase de producción, entonces Microsoft decidió crear **TypeScript** como una manera de solventar todas las carencias de JavaScript.

## TypeScript

TypeScript es un superconjunto de JavaScript, eso quiere decir que el código creado con JavaScript es compatible con TypeScript. Lo que hace en esencia es añadir tipos de datos a las variables y a los objetos. A diferencia de JavaScript, TypeScript necesita compilarse, o mejor dicho, transcribirse, dado que añade tipos que los interpretes de los navegadores no pueden entender.

```ts
var numA: number = 6;
var numB: string = "5";

numA + numB;      // Dará error cuando se transcriba/compile al combinar datos distintos

numA = "1";       // Dará error al asignar un string a una variable declarada como number
```