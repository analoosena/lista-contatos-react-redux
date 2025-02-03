import NovoContatoNumber from "../../containers/AbaNvContato";
import BarraLateral from "../../containers/BarraLateral";

const Cadastro = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <NovoContatoNumber />;
    </>
  );
};
export default Cadastro;
