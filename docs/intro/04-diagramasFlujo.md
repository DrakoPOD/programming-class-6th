# Diagramas de flujo

Los diagramas de flujo son una manera gráfica de representar una secuencia de procedimientos, algoritmos o pasos.

<p  style="text-align:center">
    <img src="./images/04-flowChart.png"
        alt="FlowChar"
        style="background-color: white; height: 50%;width:50%">
</p>

Esto es un ejemplo para revisar si una lámpara está funcionando, pero quizás no se entienda que hace cada uno de esos bloques, así que vamos a explicarlos.

|Símbolo|Nombre|Descripción|
|:------:|:--------:|--------|
|<img src="./images/04-FlowChart_Terminal.svg"        alt="FlowChar start/terminal symbol"        style="background-color: ; height: 100%;width:100%">|Inicio <br> Fin|Indica cuando un programa inicia o termina.|
|<img src="./images/04-Flowchart_Condition.svg"        alt="FlowChar condition symbol"        style="background-color: ; height: 100%;width:100%">|Condición|Se utiliza para indicar cuando debe tomarse y se bifurca el programa, es decir, que toma un camino u otro|
|<img src="./images/04-FlowChart_Process.svg"        alt="FlowChar process symbol"        style="background-color: ; height: 100%;width:100%">|Proceso|Se utiliza para indicar que se debe realizar alguna acción|
|<img src="./images/04-FlowChart_Document.svg"        alt="FlowChar document symbol"        style="background-color: ; height: 100%;width:100%">|Salid o escritura de información|Un nodo que se utiliza cuando el proceso debe guardar la información o mostrar algún dato (aunque el bloque de process bien podría usarse para estos casos)|
|<img src="./images/04-FlowChart_Predefined_process.svg"        alt="FlowChar predefined process symbol"        style="background-color: ; height: 100%;width:100%">|Sub proceso|Se utiliza para ejecutar un proceso que no forma parte del diagrama principal.|
|<img src="./images/04-FlowChart_Connector.svg"        alt="FlowChar connector symbol"        style="background-color: ; height: 60%;width:60%">|Conector|Se utiliza para conectar el flujo de un programa a otras partes de flujo, por ejemplo, si no queda más espacio para mostrar en la hoja en vez de trazar una linea de nuevo inicio de la hoja, se coloca un conector que significa un salto|