import "./styles.css";
import { Link } from 'react-router-dom';

interface LinkProps {
  title: string;
  path: string;
}

export default function LinkHeader(props: LinkProps) {
  return <Link className="link" to={props.path}>{props.title}</Link>;
}
