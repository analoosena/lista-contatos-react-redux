import { IconType } from "react-icons";
import { useDispatch, useSelector } from "react-redux";

import { ContainerFiltroCard } from "./styles";
import { IconAvatar } from "../../styles";
import { aplicarFiltro } from "../../redux/reducers/filtro";
import { RootReducer } from "../../redux/store";

type Props = {
  icon: IconType;
  titulo: string;
  grupo:
    | "amigos"
    | "familia"
    | "trabalho"
    | "emergencia"
    | "favoritos"
    | "todos";
};

const FiltroCard = ({ icon: Icon, titulo, grupo }: Props) => {
  const filtroEscolhido = useSelector(
    (state: RootReducer) => state.filtro.nomeGrupo
  );
  const { lista } = useSelector((state: RootReducer) => state);

  const dispatch = useDispatch();

  const filtrarGrupo = () => {
    dispatch(aplicarFiltro({ nomeGrupo: grupo }));
  };
  const contarPessoas = () => {
    if (grupo === "todos") {
      return lista.contatos.length;
    } else {
      return lista.contatos.filter((item) => item.grupo == grupo).length;
    }
  };

  const verfificaEstaAtivo = filtroEscolhido === grupo;
  const contador = contarPessoas();
  return (
    <ContainerFiltroCard onClick={filtrarGrupo} ativo={verfificaEstaAtivo}>
      <IconAvatar ativo={verfificaEstaAtivo}>
        <Icon />
      </IconAvatar>
      <p>{titulo}</p>
      <p>{contador}</p>
    </ContainerFiltroCard>
  );
};
export default FiltroCard;
