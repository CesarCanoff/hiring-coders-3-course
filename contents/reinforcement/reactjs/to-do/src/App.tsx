import { useState } from "react";
import TaskContainer from "./components/TaskContainer";
import TaskItem from "./components/TaskItem";

interface Task {
  title: string;
  done?: boolean;
}

function App() {
  const [task, setTask] = useState<Task[]>([
    {
      title: "Task A",
      done: false,
    },
  ]);

  function addTask() {
    setTask([
      ...task,
      {
        title: "Task B",
        done: false,
      },
    ]);
  }

  function completeTask(position: number) {
    const newList = [...task];
    newList[position].done = true;
    setTask(newList);
  }

  return (
    <main className="container">
      <h1 className="m-5">To Do App</h1>
      <div id="new-task">
        <button id="btnAdd" className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>
      <TaskContainer>
        {task.map((task: Task, index: number) => {
          return <TaskItem title={task.title} done={task.done} complete={() => completeTask(index)} />;
        })}
      </TaskContainer>
    </main>
  );
}

export default App;
