import FiltroCard from "../../components/FiltroCard"
import { Botao, ContainerBarra, Filtros } from "./styles";

const BarraLateral = () => {
  return(
    <ContainerBarra>
      <img src="src\assets\Connect.png" alt="" />
      <Botao>Novo Contato</Botao>
      <Filtros>
        <FiltroCard/>
        <FiltroCard/>
        <FiltroCard/>
        <FiltroCard/>
      </Filtros>
    </ContainerBarra>
  )
}

export default BarraLateral;