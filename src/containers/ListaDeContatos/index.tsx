import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";

import Contato from "../../components/Contato";
import Filtro from "../../components/FiltroButton";
import { ListaContainer } from "../../styles";

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.lista);
  const { termoBusca, nomeGrupo } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const renderizaAsFiltradas = () => {
    let listafiltrada = contatos;
    if (termoBusca !== undefined) {
      listafiltrada = listafiltrada.filter(
        (item) => item.nomeCompleto.toLocaleLowerCase().search(termoBusca.toLocaleLowerCase()) >= 0
      );
    }
    switch (nomeGrupo) {
      case "amigos": {
        return listafiltrada.filter((item) => item.grupo === "amigos");
      }
      case "emergencia": {
        return listafiltrada.filter((item) => item.grupo === "emergencia");
      }
      case "familia": {
        return listafiltrada.filter((item) => item.grupo === "familia");
      }
      case "trabalho": {
        return listafiltrada.filter((item) => item.grupo === "trabalho");
      }
      case "favoritos": {
        return listafiltrada.filter((item) => item.grupo === "favoritos");
      }
      default: {
        return listafiltrada;
      }
    }
  };

  const contatosFiltrados = renderizaAsFiltradas();

  const contadorDeFiltradas = contatosFiltrados.length;

  return (
    <ListaContainer>
      <Filtro />
      {contadorDeFiltradas === 1 ||0 ? (
        <p>{contadorDeFiltradas} contato encontrado</p>
      ) : (
        <p>{contadorDeFiltradas} contatos encontrados</p>
      )}

      <ul>
        {contatosFiltrados.map((item) => (
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
