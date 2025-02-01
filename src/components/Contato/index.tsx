import { useDispatch } from "react-redux";

import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { GrEmergency } from "react-icons/gr";
import { TbSos } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import NovoContato from "../../models/NovoContato";
import { removerContato, editarContato } from "../../redux/reducers/lista";

import { BotaoAcao, Botoes, ContainerContato, IconAvatar } from "./styles";

type Props = NovoContato;

const Contato = ({ nomeCompleto, telefone, email, grupo, id }: Props) => {
  const mudaIcon = (grupo: string) => {
    switch (grupo) {
      case "amigos":
        return <GiThreeFriends />;
      case "familia":
        return <PiHouseBold />;
      case "trabalho":
        return <MdOutlineWork />;
      case "emergencia":
        return <TbSos />;
      case "favoritos":
        return <FaStar />;
      default:
        return <GrEmergency />;
    }
  };

  const dispatch = useDispatch();

  function removeC() {
    dispatch(removerContato(id));
    console.log(`item que esta sendo clicado ${id}`);
  }
  return (
    <ContainerContato>
      <div>
        <IconAvatar>{mudaIcon(grupo)}</IconAvatar>
      </div>
      <h5>{nomeCompleto}</h5>
      <p>{telefone}</p>
      <p>{email}</p>
      <Botoes>
        <BotaoAcao
          onClick={() =>
            dispatch(
              editarContato({ nomeCompleto, telefone, email, grupo, id })
            )
          }
        >
          <FaRegEdit />
        </BotaoAcao>
        <BotaoAcao onClick={removeC}>
          <RiDeleteBin5Line />
        </BotaoAcao>
      </Botoes>
    </ContainerContato>
  );
};

export default Contato;
