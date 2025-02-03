import { configureStore } from "@reduxjs/toolkit";
import listaReducer from "./reducers/lista";
import filtroReducer from '../redux/reducers/filtro'

export const store = configureStore({
  reducer: {
    lista: listaReducer,
    filtro: filtroReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
