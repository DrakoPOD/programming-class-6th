# Operaciones lógicas

Las compuertas lógicas son usadas en la electrónica digital, pero también tienen su equivalente en la programación, los **operadores lógicos**. Los operadores lógicos son similares a las **proposiciones en matemáticas**.

## Un pequeño repaso a las proposiciones

Si recordamos como son las proposiciones, es un argumento que puede ser verdadero o falso, pero nunca ambos a la vez. Ejemplo:

p: El cielo está despejado hoy.

La proposición puede ser tanto cierta como falsa, puede que esté nublado lo que la vuelve falsa, pero nunca podrá estar despejado y nublado al mismo tiempo, no tiene lógica ¿Verdad?.

Se puede expresar también con una **tabla de verdad**, donde se evalúan todas las posibilidades, donde **V** es verdadero y **F** es falso.

|   p   |
| :---: |
|  $V$  |
|  $F$  |

A las matemáticas no les importa realmente lo que dice enunciado, lo que realmente le importa es su **valor de verdad**, es decir, si la proposición es verdadera o falsa. Los argumentos no son más que interpretaciones subjetivas para las matemáticas, solo se usan para ayudar a entender mejor el tema.

## Conectores lógicos

En las proposiciones existen los conectores lógicos, que permiten conectar varias proposiciones y así evaluar el resultado de sus valores de verdad.

<div style="display: flex; justify-content: center;">

|        Conector        |                 palabra                  |      Símbolo      |
| :--------------------: | :--------------------------------------: | :---------------: |
|        Negación        |       no (y todas sus variaciones)       |      $\lnot$      |
|       Conjunción       |       y (y todas sus variaciones)        |     $\wedge$      |
| Disyunción (Inclusiva) |       o (y todas sus variaciones)        |      $\lor$       |
| Disyunción (exclusiva) |   o... o... (y todas sus variaciones)    |     $\veebar$     |
|      Condicional       |  Si….entonces (y todas sus variaciones)  |   $\rightarrow$   |
|     Bicondicional      | ….si y solo si (y todas sus variaciones) | $\leftrightarrow$ |

</div>

Para estas explicaciones descartaremos las últimas 2, aunque en el tema de las condicionales se verá la **la condicional.**

Tomemos la conjunción y hagamos su $x$ tabla de verdad. La conjunción establece que el resultado solo es verdadero si ambos son verdaderos. 

<div style="display: flex; justify-content: center;">

|  $p$  |  $q$  | $p \wedge q$ |
| :---: | :---: | :----------: |
|  $V$  |  $V$  |     $V$      |
|  $V$  |  $F$  |     $F$      |
|  $F$  |  $V$  |     $F$      |
|  $F$  |  $F$  |     $F$      |

</div>

Esta tabla lo que hace es evaluar todas las posibles combinaciones de $p$ y $q$, vemos que en la última columna solo es verdadero cuando $p$ $q$ son verdaderos, cumpliendo así la condición de la conjunción.

Si evaluamos ahora la disyunción inclusiva, donde solo basta con uno para que sea verdadero:

<div style="display: flex; justify-content: center;">

|  $p$  |  $q$  | $p \lor q$ |
| :---: | :---: | :--------: |
|  $V$  |  $V$  |    $V$     |
|  $V$  |  $F$  |    $V$     |
|  $F$  |  $V$  |    $V$     |
|  $F$  |  $F$  |    $F$     |

</div>

La negación es justo lo que dice su nombre, invierte el valor de una proposición, es decir, si es falso pasa a ser verdadero, si es verdadero para a ser falso.

<div style="display: flex; justify-content: center;">

|  $p$  | $\lnot p$ |
| :---: | :-------: |
|  $V$  |    $F$    |
|  $F$  |    $V$    |

</div>

La disyunción solo es verdadera cuando ambos valores son distintos, no pueden verdaderos al mismo tiempo, tampoco falsos.

<div style="display: flex; justify-content: center;">

|  $p$  |  $q$  | $p \veebar q$ |
| :---: | :---: | :-----------: |
|  $V$  |  $V$  |      $F$      |
|  $V$  |  $F$  |      $V$      |
|  $F$  |  $V$  |      $V$      |
|  $F$  |  $F$  |      $F$      |

</div>

## Ejemplo

Hagamos el siguiente ejemplo, hacer la tabla de verdad de la siguiente proposición. Vamos a descartar los argumentos de `p` y `q` dado que no son necesarios para este ejemplo.

$$ (p \wedge q) \lor \lnot p $$