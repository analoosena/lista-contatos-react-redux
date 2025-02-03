import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import NovoContato from "../../models/NovoContato";

type ListaState = {
  contatos: NovoContato[];
};
const initialState: ListaState = {
  contatos: [
    {
      nomeCompleto: "Dexter Morgan",
      telefone: 28975976,
      email: "dextermorgan@max.com",
      id: 1,
      grupo: "amigos",
    },
    {
      nomeCompleto: "Maria Laguerta",
      telefone: 80000549,
      email: "mlaguerta@max.com",
      id: 2,
      grupo: "trabalho",
    },
  ],
};

const listaSlice = createSlice({
  name: "lista",
  initialState,
  reducers: {
    removerContato: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (item) => item.id !== action.payload
      );
    },
    editarContato: (state, action: PayloadAction<NovoContato>) => {
      const indexDoContato = state.contatos.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexDoContato >= 0) {
        state.contatos[indexDoContato] = action.payload;
      }
    },
    adicionarContato: (state, action: PayloadAction<NovoContato>) => {
      state.contatos.push(action.payload);
    },
  },
});
export const { removerContato, editarContato, adicionarContato } = listaSlice.actions;
export default listaSlice.reducer;
