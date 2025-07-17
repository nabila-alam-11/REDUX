import { createStore } from "redux";

const initialState = { income: 0, expense: 0 };
const finaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        income: state.income + action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expense: state.expense + action.payload,
      };
    default:
      return state;
  }
};

export default createStore(finaceReducer);
