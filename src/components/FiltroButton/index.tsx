import { useDispatch } from "react-redux";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { Button, Container, Input } from "./style";
import { aplicarFiltro } from "../../redux/reducers/filtro";

const Filtro = () => {
  const [textoBusca, setTextoBusca] = useState("");

  const dispatch = useDispatch();
  const pesquisarTermo = () => {
    dispatch(aplicarFiltro({ termoBusca: textoBusca, nomeGrupo: "todos" }));
    setTextoBusca("");
  };

  return (
    <>
      <Container>
        <p>Filtrar:</p>
        <Input
          type="text"
          placeholder="Pesquisar por:"
          value={textoBusca}
          onChange={(e) => setTextoBusca(e.target.value)}
        />
        <Button onClick={pesquisarTermo}>
          <CiSearch />
        </Button>
      </Container>
    </>
  );
};
export default Filtro;
