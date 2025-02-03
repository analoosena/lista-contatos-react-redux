import InputMask from "react-input-mask";

import { BotaoCadastrar, ContainerContatoNv } from "../../styles";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { adicionarContato } from "../../redux/reducers/lista";

const NovoContatoNumber = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [tele, setTele] = useState("");
  const [oemail, setOEmail] = useState("");
  const [ogrupo, setOGrupo] = useState<
    "amigos" | "familia" | "trabalho" | "emergencia" | "favoritos"
  >("amigos");

  const dispatch = useDispatch();

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    const telSemString = tele.replace(/\D/g, "");
    const telefoneNumber = Number(telSemString);

    const contatoAdd = {
      nomeCompleto: `${nome} ${sobrenome}`.trim(),
      telefone: telefoneNumber,
      email: oemail,
      grupo: ogrupo as
        | "amigos"
        | "familia"
        | "trabalho"
        | "emergencia"
        | "favoritos",
      id: Math.random(), //Gera um id unico
    };
    dispatch(adicionarContato(contatoAdd));
    setNome("");
    setSobrenome("");
    setTele("");
    setOEmail("");
    setOGrupo("amigos");
    console.log(contatoAdd);
  };

  return (
    <>
      <ContainerContatoNv>
        <h1>Novo Contato</h1>
        <form onSubmit={cadastrarContato}>
          <div>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(ev) => setNome(ev.target.value)}
              required
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
              required
            ></InputMask>
            <input
              type="email"
              placeholder="E-mail"
              value={oemail}
              onChange={(ev) => setOEmail(ev.target.value)}
            />
            <div>
              <label htmlFor="grupo">Grupo:</label>
              <select
                value={ogrupo}
                id="grupo"
                onChange={(ev) =>
                  setOGrupo(
                    ev.target.value as
                      | "amigos"
                      | "familia"
                      | "trabalho"
                      | "emergencia"
                      | "favoritos"
                  )
                }
                required
              >
                <option value="amigos">Amigos</option>
                <option value="familia">Família</option>
                <option value="trabalho">Trabalho</option>
                <option value="emergencia">Emergência</option>
                <option value="favoritos">Favoritos</option>
              </select>
            </div>
          </div>

          <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
        </form>
      </ContainerContatoNv>
    </>
  );
};
export default NovoContatoNumber;
