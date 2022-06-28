interface TaskItemProps {
  title: string;
  done?: boolean;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <li className={`task-item ${props.done ? "done" : ""}`}>
      <span>X</span>
      <p>{props.title}</p>
      <span>Done</span>
    </li>
  );
}
