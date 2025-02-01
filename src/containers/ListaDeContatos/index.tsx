import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";

import Contato from "../../components/Contato";
import Filtro from "../../components/FiltroButton";
import { ListaContainer } from "../../styles";

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.lista);
  return (
    <ListaContainer>
      <Filtro />
      <ul>
        {contatos.map((item) => (
          <li key={item.id}>
            <Contato
              nomeCompleto={item.nomeCompleto}
              telefone={item.telefone}
              email={item.email}
              id={item.id}
              grupo={item.grupo}
            />
          </li>
        ))}
      </ul>
    </ListaContainer>
  );
};
export default ListaDeContatos;
