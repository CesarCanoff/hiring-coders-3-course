import "./styles.css";
import LinkHeader from "../LinkHeader";

function Header() {
  return (
    <header>
      <p>Din Din</p>
      <nav>
        <ul>
          <li>
            <LinkHeader title="Contato" path="/contato" />
          </li>
          <li>
            <LinkHeader title="Crie sua conta" path="/sign-in" />
          </li>
          <li>
            <LinkHeader title="Blog" path="/blog" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
