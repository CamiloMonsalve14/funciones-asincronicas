¿Qué sucedio al usar async y await?

Al utilizar async y await, hemos logrado que nuestro programa espere a que se resuelvan las Promesas antes de continuar con la ejecución. Esto significa que las operaciones que normalmente serían asíncronas, como la creación, eliminación y completación de tareas, ahora se realizan de manera secuencial y se espera a que se completen antes de continuar con las siguientes instrucciones.

¿Qué sucedio al usar el método then()?

Cuando utilizamos el método then() para gestionar Promesas, estamos definiendo funciones que se ejecutarán una vez que la Promesa se resuelva o sea rechazada. En lugar de esperar de manera sincrónica como lo hace async y await, el método then() permite encadenar acciones a realizar cuando la Promesa se resuelve o rechaza. Esto es útil cuando se desea un mayor control sobre la ejecución de tareas asincrónicas


¿Qué diferencias encontraste entre async, await y el método then()?

Las principales diferencias entre async, await, y el método then() son las siguientes:

async/await:

Proporciona una forma más sencilla y legible de gestionar Promesas.
Permite que el código se ejecute de manera secuencial, esperando a que se resuelvan las Promesas antes de continuar.
Facilita la escritura de código más limpio y estructurado.
then():

Permite un mayor control sobre la gestión de Promesas al encadenar funciones que se ejecutarán cuando la Promesa se resuelva o sea rechazada.
Puede llevar a un código más anidado y complejo debido a la necesidad de definir múltiples funciones then() en caso de encadenamiento.