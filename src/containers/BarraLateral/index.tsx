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
      <img src="src\assets\Connect.png" alt="" />
      <Botao>Novo Contato</Botao>
      <Filtros>
        <FiltroCard icon={GiThreeFriends} titulo="Amigos" contador={5} />
        <FiltroCard icon={MdOutlineWork} titulo="Trabalho" contador={2} />
        <FiltroCard icon={PiHouseBold} titulo="Família" contador={8} />
        <FiltroCard icon={TbSos} titulo="Emergência" contador={1} />
        <FiltroCard icon={FaStar} titulo="Favoritos" contador={8} />
        <FiltroCard icon={GrEmergency} titulo="Todos" contador={20} />
      </Filtros>
    </ContainerBarra>
  );
};

export default BarraLateral;
