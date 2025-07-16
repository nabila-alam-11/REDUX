import { ADD_PROFILE, CALCULATE_AVERAGE_AGE, REMOVE_PROFILE } from "./actions";

const initialState = { profiles: [], averageAge: 0 };

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE: {
      const profile = action.payload;
      return {
        ...state,
        profiles: [...state.profiles, { ...profile }],
      };
    }
    case REMOVE_PROFILE: {
      const { id } = action.payload;
      return {
        ...state,
        profiles: state.profiles.filter((profile) => profile.id !== id),
      };
    }
    case CALCULATE_AVERAGE_AGE: {
      const totalAge = state.profiles.reduce((sum, profile) => {
        sum += profile.age;
        return sum;
      }, 0);
      const averageAge =
        state.profiles.length > 0 ? totalAge / state.profiles.length : 0;
      return {
        ...state,
        averageAge,
      };
    }
    default:
      return state;
  }
};
export default profileReducer;
