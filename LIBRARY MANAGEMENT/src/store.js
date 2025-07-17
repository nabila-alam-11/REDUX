import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "./loggerMiddleware";

const initialState = { books: [] };
const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK": {
      const book = action.payload;
      console.log(book);
      return {
        ...state,
        books: [...state.books, { ...book }],
      };
    }
    case "REMOVE_BOOK": {
      const { isbn } = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.isbn !== isbn),
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(libraryReducer, applyMiddleware(loggerMiddleware));
export default store;
