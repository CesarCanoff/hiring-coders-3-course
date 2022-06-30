import { useState, useEffect } from "react";
import TaskContainer from "./components/TaskContainer";
import TaskItem from "./components/TaskItem";
import Button from './components/Button'

interface Task {
  title: string;
  done?: boolean;
}

function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  function addTask(event: React.FormEvent) {
    event.preventDefault();
    setTask([
      ...task,
      {
        title: taskTitle,
        done: false,
      },
    ]);
    setTaskTitle("");
  }

  function completeTask(position: number) {
    const newList = [...task];
    newList[position].done = true;
    setTask(newList);
  }

  useEffect(() => {}, [task]);

  return (
    <main className="container">
      <h1 className="m-5">To Do App</h1>
      <form id="new-task" onSubmit={addTask}>
        <input
          type="text"
          onChange={(event) => setTaskTitle(event.target.value)}
          value={taskTitle}
        />
        <Button text="Add" color="success" />
      </form>
      <TaskContainer>
        {task.map((task: Task, index: number) => {
          return (
            <TaskItem
              title={task.title}
              done={task.done}
              complete={() => completeTask(index)}
            />
          );
        })}
      </TaskContainer>
    </main>
  );
}

export default App;
