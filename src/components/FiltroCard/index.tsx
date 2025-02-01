import { GiThreeFriends } from "react-icons/gi";
import { ContainerFiltroCard } from "./styles";

const FiltroCard = () => {
  return (
    <ContainerFiltroCard>
      <GiThreeFriends size={30} />
      <p>Amigos</p>
      <p>5</p>
    </ContainerFiltroCard>
  );
};
export default FiltroCard;
