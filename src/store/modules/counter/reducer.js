import { Soma, Diminuicao } from "./actionTypes";

const resultReducer = (state = 0, action) => {
  const { payload } = action;
  switch (action.type) {
    case Soma:
      return state + payload;

    case Diminuicao:
      return state - payload;

    default:
      return state;
  }
};

export default resultReducer;
