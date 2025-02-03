import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { GrEmergency } from "react-icons/gr";
import { TbSos } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import FiltroCard from "../../components/FiltroCard";
import { Botao, ContainerBarra, Filtros } from "./styles";

const BarraLateral = () => {
  
  return (
    <ContainerBarra>
      <img src="src\assets\Connect.png" alt="Logo Connect hub" />
      <Botao>Novo Contato</Botao>
      <Filtros>
        <FiltroCard icon={GiThreeFriends} titulo="Amigos" grupo="amigos" />
        <FiltroCard icon={MdOutlineWork} titulo="Trabalho" grupo="trabalho" />
        <FiltroCard icon={PiHouseBold} titulo="Família" grupo="familia" />
        <FiltroCard icon={TbSos} titulo="Emergência" grupo="emergencia" />
        <FiltroCard icon={FaStar} titulo="Favoritos" grupo="favoritos" />
        <FiltroCard icon={GrEmergency} titulo="Todos" grupo="todos" />
      </Filtros>
    </ContainerBarra>
  );
};

export default BarraLateral;
