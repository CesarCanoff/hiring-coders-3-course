import "./styles.css";

interface LinkProps {
  title: string;
  path: string;
}

export default function LinkHeader(props: LinkProps) {
  return <a className="link" href={props.path}>{props.title}</a>;
}
