import InputMask from "react-input-mask";

import { BotaoCadastrar, ContainerContatoNv } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { adicionarContato } from "../../redux/reducers/lista";

const NovoContatoNumber = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [tele, setTele] = useState("");
  const [oemail, setOEmail] = useState("");
  const [ogrupo, setOGrupo] = useState("amigos");

  const dispatch = useDispatch();

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    const contatoAdd = {
      nomeCompleto: `${nome}${sobrenome}`.trim(),
      telefone: tele,
      email: oemail,
      grupo: ogrupo,
      id: Math.random(), //Gera um id unico
    };
    dispatch(adicionarContato(contatoAdd));
    setNome("");
    setSobrenome("");
    setTele("");
    setOEmail("");
    setOGrupo("amigos");
  };

  return (
    <>
      <ContainerContatoNv>
        <h1>Novo Contato</h1>
        <form onSubmit={cadastrarContato}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(ev) => setSobrenome(ev.target.value)}
          />
          <InputMask
            mask="(99)99999-9999"
            placeholder="Telefone"
            value={tele}
            onChange={(ev) => setTele(ev.target.value)}
          ></InputMask>
          <input
            type="email"
            placeholder="E-mail"
            value={oemail}
            onChange={(ev) => setOEmail(ev.target.value)}
          />
          <div>
            <label htmlFor="">Grupo:</label>
            <select value={ogrupo} id="grupo">
              <option value="amigos">Amigos</option>
              <option value="familia">Família</option>
              <option value="trabalho">Trabalho</option>
              <option value="emergencia">Emergência</option>
              <option value="favoritos">Favoritos</option>
            </select>
          </div>
        </form>
        <BotaoCadastrar>Cadastrar</BotaoCadastrar>
      </ContainerContatoNv>
    </>
  );
};
export default NovoContatoNumber;
