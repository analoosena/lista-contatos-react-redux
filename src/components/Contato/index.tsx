import { BotaoAcao, Botoes, ContainerContato, IconAvatar } from "./styles";
import { GiThreeFriends } from "react-icons/gi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const Contato = () => {
  return (
    <ContainerContato>
      <div>
        <IconAvatar>
          <GiThreeFriends />
        </IconAvatar>
      </div>
      <h5>Nome do Contato</h5>
      <p>Telefone</p>
      <p>email</p>
      <Botoes>
        <BotaoAcao>
          <FaRegEdit />
        </BotaoAcao>
        <BotaoAcao>
          <RiDeleteBin5Line />
        </BotaoAcao>
      </Botoes>
    </ContainerContato>
  );
};

export default Contato;
