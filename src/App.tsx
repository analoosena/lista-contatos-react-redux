import BarraLateral from "./containers/BarraLateral";
import ListaDeContatos from "./containers/ListaDeContatos";
import { Container, EstiloGlobal } from "./styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </>
  );
}

export default App;
