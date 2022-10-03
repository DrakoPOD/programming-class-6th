# Programación orientada a objetos

La Programación Orientada a Objetos (POO, o OOP por sus siglas en inglés) es un paradigma de programación el cual se basa en el uso de **clases** y **objetos**. Este tipo de programación se utiliza para la segmentación y reutilización de piezas d código.

## Que es una clase y objeto

El concepto de clase y objeto es algo que confunde a muchos programadores, no resulta fácil a primera instancia de entender para muchos. Siempre es mejor explicar este tema con un ejemplo.

Vamos a utilizar Minecraft, por ser un juego hecho en un lenguaje orientado a objetos Java (no confundir con JavaScript).

Minecraft es un juego que su mundo está hecho de bloques, cada bloque tiene el mismo tamaño y ocupa el mismo espacio, pero tiene colores, texturas y funciones distintas.

Nuestra clase en este caso sería `bloque`, este sería nuestro molde para crear otros bloques, supongamos que quiero crear un bloque de tierra, por tanto, llamo a la clase bloque y le pido un `bloque de tierra`, este bloque tendrá sus `propiedades` como la durabilidad o textura, y también tendrá sus `funciones` que interactúan con el jugador o sus funciones, por ejemplo la función de generar pasto cada cierto tiempo o los drops (recursos que deja al ser destruido o perder toda su durabilidad).

Fíjese como resalté ciertos términos, voy a explicar porque:

- `Bloque`: Bloque es la clase, el molde, que me genera otros bloques, se le pasa la información y te devuelve una `instancia` de bloque con sus respectivas propiedades y métodos.
- `Bloque de tierra`: La instancia de la clase o el `objeto` de la clase.
- `Propiedades`: Como indica, son las propiedades del objeto, campos que guardan valores.
- `Funciones`: son los métodos del objeto, estos realizan acciones cuando se les llaman.

```js
bloqueTierra = {
    tipo: "tierra",
    textura: "Tierra-Fértil",
    durabilidad: 10,
    fertilidad: 9,
    pasto: false,
    germinar: function () {
        if (this.fertilidad > 5){
            this.pasto = true
        }
    },
    drop: function () {
        return "tierra"
    }
}
```

Fíjese como las propiedades son datos primitivos, aunque también podrían contener otros objetos que serían objetos anidados. Y a las funciones se les llama **métodos**, que como pueden ver, son funciones.

Ahora veremos la clase bloque, el molde que crea los demás objetos. Esta posee un constructor, que es la que inicializa las propiedades y métodos pudiendo utilizar parámetros de entrada.

```js
class Bloque {
    constructor(tipo){
        this.tipo = tipo

        var propiedades = block(tipo)

        this.textura: propiedades.textura,
        this.durabilidad: propiedades.durabilidad,

        // Propiedades específicas de cada bloque
        propiedades.bloque.forEach( item => {
            this[item.name] = item.value
        });
    }
}
```

Y entonces para crear un nuevo bloque se llama a la palabra reservada `new` (nuevo en inglés) y pasando sus argumentos constructores, es decir, los que van a determinar como se hará el objeto.

```js
var miBloque = new Bloque("tierra");

// Object es uno de los objetos globales de JavaScript
// getPrototypeOf retorna el nombre de la clase con que fue creado el objeto 
console.log(Object.getPrototypeOf(miBloque));   // Retorna Bloque.prototype
```

Cada vez que haces `new Bloque()` creamos una instancia de la clase `Bloque`, es decir que creamos un nuevo objeto, dicho objecto tendrá su identificador único.

## Acceso a las propiedades y métodos

Para acceder a una propiedad o método de un objeto se usa un `.` y luego el nombre de dicha propiedad. En caso de que sea un método, recordemos que las funciones son llamadas con paréntesis al final.

```js
var bombilla = {
    lugar: "Cocina",
    estado: false,

    off: function () {
        this.estado = false
    },
    on: function () {
        this.estado = true
    }
}

// Acceder a una propiedad
console.log(bombilla.lugar, bombilla.estado)

// Acceder a un método
bombilla.on()
```

### Getter

`get` que significa obtener, es una propiedad de un objecto que está asociada a una función o método, pero que solamente retorna valores y no se le puede asignar valores nuevos, a pesar de que se considera como una propiedad y no un método.

```js
var cuadrado = {
    x: 12,
    y: 10,
    get area(){
        return this.x * this.y
    }
}

cuadrado.area      // 120
cuadrado.area = 1
cuadrado.area      // sigue siendo 120
```

Nótese que a pesar de que es una función, no se colocan paréntesis ya que se asume que es una propiedad.

## Campos estáticos de una clase

Los campos estáticos son propiedades o métodos que pueden ser llamadas sin crear una instancia, pero estás no pueden ser llamadas desde el objeto creado por la clase, dado a que son propiedades de la clase en sí.

```js
class Punto {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distancia(a,b){
        return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2)
    }

    static origen = 0
    static get soy(){
        return "Soy un punto"
    }
}

var punto1 = new Punto(7,6)
var punto2 = new Punto(3,3)

Punto.distancia(punto1, punto2)       // 5

punto1.origen   // undefined
punto1.soy      // undefined

Punto.origen    // 0
Punto.soy       // "Soy un punto"
```

## Campos privados de una clase

Cuando declaramos una clase todas sus propiedades y métodos son públicas por defecto, es decir, que el usuario puede acceder a todas ellas por ejemplo `obj.method()`, pero si queremos tener métodos privados, es decir, que solo sea posible acceder al objeto en cuestión, se tienen que declarar antes del constructor usando `#`.

```js
class miClase {
    #privado;

    constructor(){
        this.privado = 5;
        this.publico = 0;
    }

    getPrivado(){
        return this.privado
    }
}

var obj = new miClase();

obj.publico;        // 0
obj.privado;        // TypeError: Cannot read private member

obj.getPrivado();   // 5
```

## Polimorfismo

Próximamente

## Herencia

Próximamente