import { Item } from './styles';

interface TaskItemProps {
  title: string;
  done?: boolean;
  complete: () => void;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <Item done={props.done}>
      <span>X</span>
      <p>{props.title}</p>
      <span onClick={props.complete}>Done</span>
    </Item>
  );
}
