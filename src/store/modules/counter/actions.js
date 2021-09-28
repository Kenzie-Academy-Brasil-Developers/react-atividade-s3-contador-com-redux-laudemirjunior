import { Soma, Diminuicao } from "./actionTypes";

export const addNumber = (payload) => ({ type: Soma, payload: payload });

export const subNumber = (payload) => ({ type: Diminuicao, payload: payload });
