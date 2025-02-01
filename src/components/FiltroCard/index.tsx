import { ContainerFiltroCard } from "./styles";
import { IconType } from "react-icons"

type Props = {
  icon: IconType;
  titulo: string;
  contador: number;
};

const FiltroCard = ({ icon: Icon, titulo, contador }: Props) => {
  return (
    <ContainerFiltroCard>
      <Icon size={30} />
      <p>{titulo}</p>
      <p>{contador}</p>
    </ContainerFiltroCard>
  );
};
export default FiltroCard;
