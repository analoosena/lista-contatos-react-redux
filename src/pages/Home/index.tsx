import BarraLateral from "../../containers/BarraLateral";
import ListaDeContatos from "../../containers/ListaDeContatos";

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={true} />
      <ListaDeContatos />
    </>
  );
};
export default Home;
