import { Routes as WrapperRoute, Route, BrowserRouter } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoute>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </WrapperRoute>
    </BrowserRouter>
  );
}
