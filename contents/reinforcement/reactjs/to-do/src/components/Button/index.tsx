import { DefaultButton } from './styles';

interface ButtonProps {
  text: string;
  color: string;
  action?: () => void;
  
}

export default function Button(props: ButtonProps) {
  return <DefaultButton color={props.color} onClick={props.action}>{props.text}</DefaultButton>;
}
