import TaskContainer from "./components/TaskContainer";
import TaskItem from "./components/TaskItem";

function App() {
  return (
    <main className="container">
      <h1 className="m-5">To Do App</h1>
      <div id="new-task">
        <button id="btnAdd" className="btn btn-primary">
          Add
        </button>
      </div>
      <TaskContainer>
        <TaskItem title="Task 1" />
        <TaskItem title="Task 2" done={true} />
      </TaskContainer>
    </main>
  );
}

export default App;
