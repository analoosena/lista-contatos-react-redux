import { useDispatch } from "react-redux";

import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { GrEmergency } from "react-icons/gr";
import { TbSos } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";

import NovoContato from "../../models/NovoContato";
import { editarContato, removerContato } from "../../redux/reducers/lista";

import { BotaoAcao, Botoes } from "./styles";
import { useState } from "react";
import { ContainerContato, IconAvatarYellow } from "../../styles";

type Props = NovoContato;

const Contato = ({ nomeCompleto, telefone, email, grupo, id }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false);
  const [nomeEditado, setNomeEditado] = useState(nomeCompleto);
  const [telefoneEditado, setTelefoneEditado] = useState(telefone);
  const [emailEditado, setEmailEditado] = useState(email);
  const [grupoEditado, setGrupoEditado] = useState(grupo);

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

  const salvaEdicao = () => {
    dispatch(
      editarContato({
        id,
        nomeCompleto: nomeEditado,
        telefone: telefoneEditado,
        email: emailEditado,
        grupo: grupoEditado,
      })
    );
    setEstaEditando(false);
  };

  const cancelaEdicao = () => {
    setNomeEditado(nomeCompleto);
    setTelefoneEditado(telefone);
    setEmailEditado(email);
    setGrupoEditado(grupo);
    setEstaEditando(false);
  };

  function removeC() {
    dispatch(removerContato(id));
    console.log(`item que esta sendo clicado ${id}`);
  }
  return (
    <ContainerContato>
      {estaEditando ? (
        <>
          <div>
            <IconAvatarYellow>{mudaIcon(grupoEditado)}</IconAvatarYellow>
          </div>
          <select
            value={grupoEditado}
            onChange={(e) =>
              setGrupoEditado(
                e.target.value as
                  | "amigos"
                  | "familia"
                  | "trabalho"
                  | "emergencia"
                  | "favoritos"
              )
            } //converte o valor para os declarados
          >
            <option value="amigos">Amigos</option>
            <option value="familia">Família</option>
            <option value="trabalho">Trabalho</option>
            <option value="emergencia">Emergência</option>
            <option value="favoritos">Favoritos</option>
          </select>
          <input
            type="text"
            value={nomeEditado}
            onChange={(e) => setNomeEditado(e.target.value)}
          />
          <input
            type="number"
            value={telefoneEditado ?? ""}
            onChange={(e) => setTelefoneEditado(e.target.valueAsNumber || 0)} //já retorna um número em vez de uma string, e 0 ao inves de null
          />
          <input
            type="text"
            value={emailEditado}
            onChange={(e) => setEmailEditado(e.target.value)}
          />
        </>
      ) : (
        <>
          <div>
            <IconAvatarYellow>{mudaIcon(grupo)}</IconAvatarYellow>
          </div>
          <h5>{nomeCompleto}</h5>
          <p>{telefone}</p>
          <p>{email}</p>
        </>
      )}
      <Botoes>
        {estaEditando ? (
          <>
            <BotaoAcao onClick={salvaEdicao}>
              <MdDownloadDone />
            </BotaoAcao>
            <BotaoAcao onClick={cancelaEdicao}>
              <RiCloseCircleLine />
            </BotaoAcao>
          </>
        ) : (
          <>
            <BotaoAcao onClick={() => setEstaEditando(true)}>
              <FaRegEdit />
            </BotaoAcao>
            <BotaoAcao onClick={removeC}>
              <RiDeleteBin5Line />
            </BotaoAcao>
          </>
        )}
      </Botoes>
    </ContainerContato>
  );
};

export default Contato;
