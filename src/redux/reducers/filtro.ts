import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltroState = {
  termoBusca?: string;
  nomeGrupo:
    | "amigos"
    | "familia"
    | "trabalho"
    | "emergencia"
    | "favoritos"
    | "todos";
};

const initialState: FiltroState = {
  termoBusca: "",
  nomeGrupo: "todos",
};
const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    aplicarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.nomeGrupo = action.payload.nomeGrupo;
      state.termoBusca = action.payload.termoBusca
    },
  },
});
export const { aplicarFiltro } = filtroSlice.actions;
export default filtroSlice.reducer;
