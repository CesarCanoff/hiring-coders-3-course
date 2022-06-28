import Header from "../../components/Header";
import Box from "../../components/Box";
import "../../styles/global.css";

function Home() {
  const sendEmail = () => {
    alert('E-mail enviado!');
  }

  return (
    <div className="Home">
      <Header />
      <main>
        <button onClick={sendEmail}>Teste</button>
        <Box background="dark">
          <h2>AAAAAS</h2>
        </Box>
      </main>
    </div>
  );
}

export default Home;
