# Condicionales

Los valores de tipo booleano, aunque solamente puedan contener `1`/`true` y `0`/`false`, tienen la mayor cantidad de usos en la programación que puedas pensar. Se pueden realizar operaciones lógicas con ellos, como vimos en las [compuertas lógicas](/intro/06-logicGates) y hacer uso de las condicionales.

Las condicionales, como indica su nombre, es una condición que determinan si un fragmento de código se ejecuta o no. El nombre de esta sentencia es `if`, que en español significa "si" de condición.

```js
if (condición) {
    // Si 'condición' es verdadera, ejecutar esta sección de código
}
```

Las condicionales solo aceptan aceptan valores booleanos o que puedan dar un valor booleano.

```js
if (true) {
    console.log("¡Hey! la condición es verdadera");  // Se ejecuta la condición
}

if (false){
    // Esta parte del código NUNCA se ejecutará
    console.log("¡Hey! la condición es falsa");
}
```

## Operaciones lógicas

Las operaciones lógicas son comparaciones de valores, estas comparaciones siempre retornaran un valor booleano.

<div class="table-div">
<table>
<thead>
<th class="t-02-1-col">Operador</th>
<th class="t-02-2-col">Nombre</th>
<th class="t-02-3-col">Significado</th>
<th class="t-02-4-col">Ejemplo</th>
</thead>
<tbody>
<tr>
<td>

<div style="display: flex; justify-content: center;">

`==`

</div>

</td>
<td>

Igual

</td>
<td>

Devuelve `true` si ambos valors son iguales

</td>
<td>

Sea `a=true` y `b=true`

```js
a == b  // true
```

</td>
</tr>
<tr>
<td>

<div style="display: flex; justify-content: center;">

`>`

</div>

</td>
<td>

Mayor que

</td>
<td>

Devuelve `true` si el valor de la izquierda es mayor que el de la derecha

</td>
<td>

Sea `a = 5` y `b = 6`

```js
a > b  // false
```

</td>
</tr>

<tr>
<td>

<div style="display: flex; justify-content: center;">

`<`

</div>

</td>
<td>

Menor que

</td>
<td>

Devuelve `true` si el valor de la izquierda es menor que el de la derecha

</td>
<td>

Sea `a = 5` y `b = 6`

```js
a < b  // true
```

</td>
</tr>
<tr>
<td>

<div style="display: flex; justify-content: center;">

`>=`

</div>

</td>
<td>

Mayor igual que

</td>
<td>

Devuelve `true` si el valor de la izquierda es mayor o igual que el de la derecha

</td>
<td>

Sea `a = 5` y `b = 5`

```js
a >= b  // true
```

</td>
</tr>
<tr>
<td>

<div style="display: flex; justify-content: center;">

`<=`

</div>

</td>
<td>

Menor igual que

</td>
<td>

Devuelve `true` si el valor de la izquierda es menor o igual que el de la derecha

</td>
<td>

Sea `a = 6` y `b = 5`

```js
a <= b  // false
```

</td>
</tr>
<tr>
<td>

<div style="display: flex; justify-content: center;">

`!=`

</div>

</td>
<td>

Diferente de

</td>
<td>

Devuelve `true` si los valores son diferentes

</td>
<td>

Sea `a = 2` y `b = 5`

```js
a != b  // true
```

</td>
</tr>
<tr>
<td>

<div style="display: flex; justify-content: center;">

`===`

</div>

</td>
<td>

Idéntico

Igualdad estricta

</td>
<td>

Devuelve `true` si ambos valores son iguales tanto en valor como en el tipo de dato.

</td>
<td>

Sea `a = 1` y `b = true`

```js
// Igualdad 
a == b   // true

// Igualdad estricta
a === b  // false
```

</td>
</tr>
<tr>
<td>

<div style="display: flex; justify-content: center;">

`!==`

</div>

</td>
<td>

Valor diferente o tipo diferente

</td>
<td>

Devuelve `true` si ambos valores son distintos o si también son distintos en el tipo de dato.

</td>
<td>

Sea `a = 5` y `b = "5"`

```js
// Igualdad 
a != b   // false

// Igualdad estricta
a !== b  // true
```

</td>
</tr>

</tbody>
</table>
</div>

### Entendiendo un poco mejor los operadores

Hay que tener cuidado al colocar el signo de igualdad, si colocamos solo un signo de igual `a = b`, estaríamos haciendo una asignación y no una comparación, puede dar problemas al ejecutar el código.

El operador `==` de igualdad, solo compara valores, miremos el siguiente ejemplo

```js
5 == "5"    // true
```

A pesar de que uno es un texto y otro un número, JavaScript convierte el texto en número para crear una condición con valores iguales. Lo mismo sucede con los valores booleanos `true` es equivalente a `1`, así que son tratados como elementos iguales.

```js
1 == true   // true
```

Es posible también comparar string.

```js
"b" > "a"   // true
```

Esto da verdadero porque al hacer esta comparación JavaScript toma en cuenta el valor [ASCII](https://elcodigoascii.com.ar/) del carácter, como `'b' = 98` y `'a' = 97`, entonces `98 > 97`.

```js
"2" > "12"  // true
```

Esto da verdadero porque en la numeración ASCII el `2` es mayor que el `1`, JavaScript ordena los `string` de acuerdo a la numeración ASCII. Para obtener un resultado apropiado, asegúrese de convertir los valores o verificar sus tipos antes de operar.

#### Diferencia entre `==` y `===`

Como se dijo anterior mente, `==` solo compara valors, mientras que `===` compara también el tipo de dato. Si tomamos el ejemplo de `true` y `1`, y comparamos con `===`.

```js
true === 1      // false
```

Esto es porque `true` es un valor booleano, mientras que `1` es un valor numérico, aunque ambos puedan significar lo mismo a nivel de código pero los tipos de datos son distintos.

## Conectores lógicos

Estos conectores funcionan con valores lógicos, son los primeros tres que vimos en [compuertas lógicas](/intro/06-logicGates), la negación, la conjunción y la disyunción inclusiva.

#### `not` Negación

El conector `not` lo que hace es negar nuestro valor booleano. En JavaScript se escribe `!`.

```js
var a = 3;
var b = 5;
var c = a > b   // false

if(!c) {    // not false, es decir, verdadero 
    console.log("Es verdadera la condición")
}
```

#### `and` Conjunción

El conector `and` toma dos valores y devuelve verdadero si ambos son verdaderos. Tiene por símbolo a `&&`.

```js
var a = true;
var b = false;

if (a && b) {
    // Nunca se ejecuta, porque no es verdadera
}
```

#### `or` Disyunción inclusiva

El conector `or`, tiene por símbolo en JavaScript `||`, toma dos valores y devuelve verdadero si al menos uno es verdadero.

```js
var a = true;
var b = false;

if (a || b) {
    // Se ha ejecutado porque al menos uno es verdadero
}
```

## Combinaciones de operadores y conectores

Si se quiere hacer operaciones más complicadas se puede hacer uso de varios operadores y conectores. Los conectores nos sirven para comparar resultados de las operaciones.

```js
if ((4 < 5) && (true)){
    // Esto se ejecuta
}
```

Aunque los paréntesis no son necesarios en este ejemplo, puede ser expresado como `4 < 5 && true`, pero los paréntesis añaden claridad al código, haciendo que sea más legible.

Hay que tener cuidado con tener muchos conectores anidados, dado que el resultado de estas operaciones es un valor booleano, puede tener resultados no esperados, observemos este ejemplo.

```js
6 > 5 > 4 > 3       // false
```

A pesar de que en la lógica matemática esté bien planteado, para JavaScript no es así, el resultado falso porque JavaScript primero realiza la primera comparación `6 > 5` que es `true`, sin embargo, al efectuar la segunda no toma el `5`, sino el resultado de la primera `true > 4`, pero como son valores distintos JavaScript los trata de convertir y queda `1 > 4`, y esto devuelve `false`, y luego va con la última `0 > 3` e igual devuelve `false`.

Para poder realizar esto de manera correcta y como se esperaba, debemos hacerlo de la siguiente forma.

```js
(6 > 5) && (5 > 4) && (4 > 3)       // true
```

Se tiene que realizar cada comparación de manera separada y luego conectarlos usando `and`/`&&`, y como se ve los paréntesis dan más claridad a la operación.

## Sentencia `if ... else`

Si necesitamos hacer un programa que diga si un valor es mayor o igual que 5 o si es menor que 5 que lo diga por consola, podemos hacer lo siguiente.

```js
if (valor >= 5){
    console.log("Es mayor o igual que 5")
}
if (valor < 5){
    console.log("Es menor que 5")
}
```

Se ejecuta sin problemas, sin embargo, no es un código ineficiente, si decimos que `valor = 6`, la primera condición se cumple, sin embargo, dado que aun no termina la ejecución del programa, continuará ejecutando la siguiente condición, es necesario siempre hacer un buen uso de la memoria y evitar la ejecución innecesaria de código, en ese caso, podemos hacer uso de la sentencia `if ... else`, que en español sería, `si ... de otra forma`.

Lo que hace la sentencia es, si la condición es verdadera, ejecuta una sección de código, si es falsa ejecuta otra.

```js
if (condición) {
    // Me ejecuto solo cuando es verdadera
} else {
    // me ejecuto solo cuando es falso
}
```

Tomando el ejemplo del valor comparado con 5, tenemos:

```js
if (valor >= 5) {
    console.log("Es mayor o igual que 5")
} else {
    console.log("Es menor que 5")
}
```

## Sentencias `if` anidadas `if ... else if ... else`

Si tomamos el ejemplo anterior, pero en ves de "mayor o igual" ponemos "mayor" además ahora nos tiene que decir también si es solamente igual. Tendríamos que poner varios `if` como en el primer caso del ejemplo anterior, sin embargo, es muy ineficiente, así que haremos uso de la sentencia if anidada.

```js
if (condición1) {
    // Se ejecuta si condición1 es verdadera
} else if (condición2) {
    // Se ejecuta si condición2 es verdadera
} else if (condición3) {
    // Se ejecuta si condición3 es verdadera
} else {
    // se ejecuta si las condiciones anteriores no se cumplieron
}
```

Realizando en problema planteado arriba, tendríamos

```js
if (valor > 5) {
    console.log("Es mayor que 5")
} else if (valor == 5) {
    console.log("Es igual que 5")
} else {
    console.log("Es menor que 5")
}
```

Fíjese, como hemos solo puesto un `else` al final, eso es porque si no es mayor, ni igual, la única opción disponible es que sea menor.

## Otros operadores

### Operador condicional (Ternario)

Si queremos hacer una variable que se signe un valor condicional, por ejemplo, si la persona es mayor de 18 años puede votar en las elecciones.

```js
var vota;

if (edad > 18) {
    vota = "Puede votar"
} else {
    vota = "Menor de edad"
}
```

El código es correcto, pero nos ocupa muchas lineas de código, pero el existe las condiciones in-line (en línea), son valores condicionales, pueden ser de uno o del otro, a diferencia del `if`, donde el `else` es opcional, aquí es obligatorio, siempre deben devolver algún valor.

```js
variable = (condición) ? valorVerdadero : valorFalso;
```

Retomemos el ejemplo anterior

```js
var vota = (edad > 18) ? "Puede votar" : "menor de edad";
```

Lo que nos tomaba hasta 5 lineas, ahora solo nos toma una sola linea, las condicionales in-line son muy útiles para reducir espacio y hacer un código más legible.

### El operador coalescente nulo/`null`

El operador `??` lo que hace es verificar si el primer valor de dos valores es `null` o `undefine`, y en caso de que no lo sea, retorna el primero, caso contrario es el segundo.

```js
var num = null;
var texto = "Sin texto";

var resultado = num ?? texto;   // "Sin texto"
```