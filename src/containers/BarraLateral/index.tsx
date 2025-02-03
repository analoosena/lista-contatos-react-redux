import { useNavigate } from "react-router-dom";

import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { GrEmergency } from "react-icons/gr";
import { TbSos } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { IoReturnDownBackSharp } from "react-icons/io5";
import FiltroCard from "../../components/FiltroCard";
import { Botao, BotaoVoltar, ContainerBarra, Filtros } from "./styles";

type Props = {
  mostrarFiltros: boolean;
};

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate();

  return (
    <ContainerBarra>
      <img src="src\assets\Connect.png" alt="Logo Connect hub" />
      <div>
        {mostrarFiltros ? (
          <>
            <Botao onClick={() => navigate("/cadastro")}>Novo Contato</Botao>
            <Filtros>
              <FiltroCard
                icon={GiThreeFriends}
                titulo="Amigos"
                grupo="amigos"
              />
              <FiltroCard
                icon={MdOutlineWork}
                titulo="Trabalho"
                grupo="trabalho"
              />
              <FiltroCard icon={PiHouseBold} titulo="Família" grupo="familia" />
              <FiltroCard icon={TbSos} titulo="Emergência" grupo="emergencia" />
              <FiltroCard icon={FaStar} titulo="Favoritos" grupo="favoritos" />
              <FiltroCard icon={GrEmergency} titulo="Todos" grupo="todos" />
            </Filtros>
          </>
        ) : (
          <BotaoVoltar onClick={() => navigate("/")}>
            <IoReturnDownBackSharp />
          </BotaoVoltar>
        )}
      </div>
    </ContainerBarra>
  );
};

export default BarraLateral;
