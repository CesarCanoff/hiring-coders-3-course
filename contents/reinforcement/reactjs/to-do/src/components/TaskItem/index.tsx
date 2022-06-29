import './styles.css';

interface TaskItemProps {
  title: string;
  done?: boolean;
  complete: () => void;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <li className={`task-item ${props.done ? "done" : ""}`}>
      <span>X</span>
      <p>{props.title}</p>
      <span onClick={props.complete}>Done</span>
    </li>
  );
}
