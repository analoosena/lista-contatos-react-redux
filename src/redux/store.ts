import { configureStore } from "@reduxjs/toolkit";
import listaReducer from "./reducers/lista";

export const store = configureStore({
  reducer: {
    lista: listaReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
