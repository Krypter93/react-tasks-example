import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //Esta función retorna un objeto. Este es el que almacena los datos, el nombre del contexto


export function TaskContextProvider(props) {
  //Este es el componente que engloba al resto de componentes

  const [tasks, setTasks] = useState([]);


  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

// {props.children} {/*Esto es como decirle; aquí van a ir más componentes. Cuando lo renderices en otro archivo jsx, te permite poner otros componentes dentro de este, como sus hijos(ver ejemplo en TaskCard.jsx)} */}
