import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";

import { Container, EstiloGlobal } from "./styles";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

function App() {
  const rotas = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cadastro",
      element: <Cadastro />,
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  );
}

export default App;
