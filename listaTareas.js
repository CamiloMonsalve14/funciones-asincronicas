// Lista de tareas (simulación de una base de datos)
const tasks = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Limpiar la casa', completed: true },
    { id: 3, description: 'Estudiar JavaScript', completed: false },
  ];
  
  // Función para crear una tarea (retorna una Promesa)
  function createTask(description) {
    return new Promise((resolve, reject) => {
      const newTask = { id: tasks.length + 1, description, completed: false };
      tasks.push(newTask);
      resolve(newTask);
    });
  }
  
  // Función para eliminar una tarea por su ID (retorna una Promesa)
  function deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      const index = tasks.findIndex(task => task.id === taskId);
      if (index !== -1) {
        const deletedTask = tasks.splice(index, 1)[0];
        resolve(deletedTask);
      } else {
        reject('Tarea no encontrada');
      }
    });
  }
  
  // Función para marcar una tarea como completada por su ID (retorna una Promesa)
  function completeTask(taskId) {
    return new Promise((resolve, reject) => {
      const task = tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = true;
        resolve(task);
      } else {
        reject('Tarea no encontrada');
      }
    });
  }
  
  // Uso de async/await
  async function runAsync() {
    try {
      const newTask = await createTask('Pasear al perro');
      console.log('Tarea creada:', newTask);
  
      const completedTask = await completeTask(3);
      console.log('Tarea completada:', completedTask);
  
      const deletedTask = await deleteTask(2);
      console.log('Tarea eliminada:', deletedTask);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  runAsync();
  
  // Uso del método then()
  createTask('Lavar el coche')
    .then(newTask => {
      console.log('Tarea creada:', newTask);
      return completeTask(newTask.id);
    })
    .then(completedTask => {
      console.log('Tarea completada:', completedTask);
      return deleteTask(completedTask.id);
    })
    .then(deletedTask => {
      console.log('Tarea eliminada:', deletedTask);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  