# Entendiendo la lógica de la programación

Un programa sigue instrucciones de una tarea en un orden lógico, las computadoras ejecuta una tarea a la vez, pero lo hacen tan rápido que a nuestros ojos parecieran que lo hacen al mismo tiempo.

> :information_source: Claro que las computadoras actuales vienen con más de dos núcleos de procesador, lo que les permite ejecutar una tarea distinta en cada uno de sus núcleos.

Ahora miremos el siguiente código:
```python
# Python

numero = 6
numero = numero * 2
numero = numero - 2
numero = numero / 2
```

Primero vemos que se guarda un número, luego dicho número es multiplicado por 2, para luego se le reste 2 y para finalizar es dividido entre 2. Mejor lo expresamos de una manera más fácil.

$$
\begin{align}
6 & \tag{1}\\
6 && * 2 &=& 12 \tag{2}\\
12 && - 2 &=& 10 \tag{3}\\
10 && / 2 &=& 5 \tag{4}\\
\end{align}
$$

Esta es la secuencia que seguirá el programa, no se se saltará pasos, siguiendo los pasos el resultado final será 5. Si el resultado es otro, es que el programa ha sido modificado.

## Unas matemáticas sin números

La programación son como las matemáticas, solo que sin muchos números, de hecho, una computadora no entiende nuestro lenguaje, solo entiende números `1` y `0`.

> Un procesador, ya sea de nuestras computadoras o nuestros celulares, lo que hace es realizar operaciones matemáticas, la música, videos, interfaces gráficas, videojuegos, no son más que números para nuestra computadora.

Cuando programamos lo hacemos con palabras, no números. Por ejemplo, `print()` en python, que es español es imprimir, es una función nos permite mostrar mensajes por la terminal/consola, `while` ("mientras" en español) es una función que permite repetir una sección de código, `append()` ("añadir" en español) un método que nos permite añadir más elemento a una lista (es decir, `arreglos` o `array`).

> :memo: **Nota:**
> 
> La mayoría de de los lenguajes de programación están en inglés, por lo que saber inglés facilita mucho el aprendizaje de estos.

Las computadoras no entienden nuestro lenguajes, así que se requiere de compilarse, es decir, convertir las palabras a números que las computadoras puedan entender, algunos lenguajes no requieren de compilación dado que estos ejecutan el código directamente, a estos lenguajes se les denomina `lenguaje interpretado`, ejemplos de estos son `python` y `javascript`.

### Saber matemáticas hace todo más fácil

Si tomamos por ejemplo una función en matemáticas:

$$
f(x) = x * 2
$$

Es una función que tiene como entrada a $x$ y la multiplica por dos, escrito en código sería algo como lo siguiente:


```javascript
// JavaScript

function f(x) {
    return x * 2
}
```

Una función que toma como parámetro un número y lo devuelve multiplica por dos, no es para nada distinto si a la ecuación de arriba si se mira bien. (`function` es "función" en español y `return` es "devolver/retornar")

> Siempre digo, si sabes matemáticas, ya sabes programar.

# Ejercicios

Puedes iniciar a practicar escribiendo los pasos de alguna actividad cotidiana, por ejemplo, comprar pan:

1. Buscar el dinero
2. Salir de casa
3. Ir a la panadería
4. Escoger el pan
5. Pagar al panadero
6. Regresar a casa

Aquí tienes una lista de cosas como ejemplo

- Hacer la tarea
- Limpiar la habitación
- Prepararse para ir al colegio
- Limpiar un plato
- Cepillarse los dientes