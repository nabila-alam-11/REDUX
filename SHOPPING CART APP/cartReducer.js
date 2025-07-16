import { ADD_TO_CART, CALCULATE_TOTAL, REMOVE_FROM_CART } from "./actions";

const initialState = { cartItems: [], total: 0 };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item, index) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }
    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== id),
      };
    }
    case CALCULATE_TOTAL: {
      const total = state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);

      return {
        ...state,
        total,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
