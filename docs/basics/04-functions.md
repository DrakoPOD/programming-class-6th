# Funciones

Las funciones son secciones de código que pueden ser llamadas desde otra parte del código, generalmente estás toman alguna entrada y devuelven una salida, que puede estar relacionada o no con el valor introducido, pero que generalmente lo está.

Una función primero tiene que ser declarada antes de poder llamarse.

```js
//declaración de la función
function nombre_De_La_Función(/*Parámetros*/) {
    // Bloque de código
}
```

Los parámetros son los valores que traspasamos a la función, se pueden tener varios parámetros separados por coma. Un ejemplo, una función que sume dos valores y lo imprima por consola.

```js
function suma(a,b){
    console.log("suma: " a + b);
}
```

## Sentencia `return`

La sentencia `return` interrumpe la ejecución de la función para finalizarla y devolver algún valor. Las funciones pueden devolver algún resultado de lo que estuviesen procesando. Tomemos el ejemplo anterior.

```js
function suma(a,b){
    return a + b

    // Nunca se ejecuta las líneas después del return
    console.log("suma: " a + b);
}
```

`return` también puede ser utilizado para terminar el proceso de una función, se puede dejar vacío el return, esto es útil cuando consideramos que el código de la función no debería de continuar. Por ejemplo una función que realice alguna operación matemática, pero el dato introducido no es un número.

```js
function operation(num) {
    if (isNaN(num)){ // Verificamos si no es un número
        return
    }
    // Código de la operación
}
```

## Llamar a una función

Las funciones se llaman usando el nombre con el que fueron declaradas con paréntesis, se le pueden pasar los argumentos que necesite de acuerdo a sus [parámetros](#parametros) dentro de los paréntesis.

```js
function suma(a,b){
    return a + b
}

// Llamando a la función 'suma'
suma(4,5)
```

Como la función `suma` tiene dos parámetros, durante su llamada se le pasan dos argumentos igual, si la función no tuviese parámetros los paréntesis se dejan vacíos `suma()`.

Si llamásemos a una función sin paréntesis no la estaría llamando sino a su dirección.

```js
var resultado = suma;

console.log(resultado);     // Saldrá como [function]

// Es decir que resultado también sería la función suma
console.log(resultado(4,5)) // 9
```

## Valor retornado

Como ya mencionamos en la [sentencia `return`](#sentencia-return), esta puede devolver un valor. Este valor lo podemos guardar en una variable o pasarlo a otra función.

```js
function suma(a,b){
    return a + b
}

// Guardar el valor retornado de la función
var resultado = suma(4,6);

// También podemos usarlo directamente en otra función.
console.log("El resultado de la suma es: " + suma(4,6));
```

## Parámetros

Hemos hablado mucho de parámetros hasta este punto, mejor explicar lo que son. Los parámetros son valores que se les deben pasar a una función, esto parámetros se definen durante la declaración de la función. Una función puede tener tantos parámetros como quieras, hasta puede no tener ninguno, estos están separados por una coma.

```js
function main(param1, param2, param3, /* Tantos como quieras */) {
    // Código
}
```

Cuando la función es llamada deben pasarse los parámetros correspondientes, algunos interpretes de javascript pueden dar error en la ejecución si no se asignan los parámetros correspondientes.

```js
// Llamando la función
suma(param1, param2, param3, /*Tantos como tenga*/);
```

Si se dejase vacío, pude no dar el resultado deseado.

```js
function suma(a, b){
    return a + b
}
console.log(suma(2));    // resultado NaN
```

### Parámetros por defecto

Es posible asignar valores por defecto a los parámetros de las funciones, en caso de que el usuario no les asigne uno durante su llamado.

```js
function suma(a=1, b=2){
    return a + b
}
console.log(suma());    // resultado 3
```

Generalmente, los parámetros por defecto solo se colocan al final, y en ocasiones dentro de un `objeto`, para garantizar una mejor compresión y uso de la función.

```js
function suma(a, b=2){
    return a + b
}
console.log(suma(3));    // resultado 5
```

Si el parámetro por defecto fuese el segundo, se tendría que usar el valor `undefined` para evitar dar ese valor, `null` remplazaría el por defecto

```js
function suma(a=5, b){
    return a + b
}
console.log(suma(undefined, 5));    // resultado 10

console.log(suma(null, 5));         // resultado 5
```

### Diferencia entre argumento y parámetro

Los parámetros son parte de la declaración de la función, son los valores que va a solicitar cuando se la llame, los valores que les pasamos se les llama argumentos. Los parámetros tienen nombres dados al momento de su declaración.

Por ejemplo, en la función suma son `a` y `b`, sin embargo, cuando llamamos a la función `suma`, simplemente pasamos los valores `suma(4,5)` sin siquiera tomar en cuenta el nombre de los parámetros. El `4` y el `5` decimos que son sus argumentos.

Los nombres de los parámetros solo son válidos dentro de la función.

En la práctica no se suelen diferenciar los parámetros de los argumentos de manera tan estricta, así que es posible toparse con personas que usen los términos de manera indistinta.

## Funciones como argumento de otras funciones

Es posible pasar una función a otra función dentro de sus parámetros, esto resultaba muy útil debido a la naturaleza asíncrona de javaScript, permitía que una función se ejecutase justo al final de otra. Esta debe ser pasada sin paréntesis para que se transfiera la referencia a la función

```js
function suma(a,b) {
    console.log(a + b);
}

function func(callback) {
    callback(3,4);      // ejecutará a suma: 7
}

func(suma);
```

## Recursion

Una función es capaz de llamarse a ella misma, esto se define como función recursiva.

```js
// Factorial de un número 5! = 5 x 4 x 3 x 2 x 1
function factorial(num){
    if num == 1 return 1;

    return num * factorial(num-1);
}


factorial(5);      // 120
```

## Función flecha

Una expresión de función flecha es una alternativa compacta a una **expresión de función tradicional**, pero es limitada y no se puede utilizar en todas las situaciones.

```js
(params) => /*Cuerpo u valor a retornar*/;
```

Si no se pone con llaves, no puede ser multi-línea y retornará el mismo valor que resulte de esa sola línea.

```js
var num = [1,2,3,4,5]

console.log(num.reduce(t, x => x + t))
```

### Diferencias y limitaciones respecto a la función tradicional

- No tiene sus propios enlaces a `this` o `super` y no se debe usar como métodos.
- No tiene argumentos o palabras clave `new.target`.
- No apta para los métodos `call`, `apply` y `bind`, que generalmente se basan en establecer un ámbito o alcance
- No se puede utilizar como constructor.
- No se puede utilizar `yield` dentro de su cuerpo.

## Funciones predefinidas

Próximamente