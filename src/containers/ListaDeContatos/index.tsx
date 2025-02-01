import Contato from "../../components/Contato";
import Filtro from "../../components/FiltroButton";
import { ListaContainer } from "../../styles";


const ListaDeContatos = () => {
  return (
    <ListaContainer>
      <Filtro />
      <Contato />
      <Contato />
    </ListaContainer>
  );
};
export default ListaDeContatos;
