# Plantillas literales

Las plantillas literales o plantillas de cadenas, son `strings` que permiten el uso de expresiones incrustadas.

Sintaxis

```js
`Cadena de caracteres`

`Una cadena multilinea,
Aquí la segunda linea`

`Texto de la cadena ${expresión} continúa la cadena`

etiqueta`Texto de la cadena ${expresión} continúa la cadena`
```

Las plantillas literales se delimitan por las comillas invertidas o tildes invertidas ```` `` ````, en ves de las comillas simples o dobles. Las plantillas literales pueden contener marcadores, que se representar por el signo de dólar y envueltos en llaves `${expresión}`. Las expresiones dentro del marcador son enviados como argumentos a una función.

Para poner un ejemplo, en una cadena con comillas simples/dobles tendríamos que hacer lo siguiente.

```js
var a = 6;
var b = 5;

console.log("El resultado de los días es: " + (a + b ) + "días.");
```

Tendríamos que concatenar cadenas, pero con las plantillas literales podemos hacer lo siguiente.

```js
var a = 6;
var b = 5;

console.log(`El resultado de los días es: ${a + b} días.`);
```