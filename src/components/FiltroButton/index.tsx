import { CiSearch } from "react-icons/ci";
import { Button, Container, Input } from "./style";

const Filtro = () => {
  return (
    <>
    <Container>
      <p>Filtrar:</p>
      <Input type="text" placeholder="Pesquisar por:" />
      <Button><CiSearch /></Button>
    </Container>
    <p>8 encontrados</p>
    </>
  );
};
export default Filtro
