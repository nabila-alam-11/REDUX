import {
  ADD_TASK,
  CALCULATE_TOTAL_TASKS,
  REMOVE_TASK,
  TOGGLE_TASK,
} from "./actions";

const initialState = { tasks: [], totalTasks: 0 };

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const task = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, { ...task }],
      };
    }
    case REMOVE_TASK: {
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
      };
    }
    case CALCULATE_TOTAL_TASKS: {
      return {
        ...state,
        totalTasks: state.tasks.length,
      };
    }
    case TOGGLE_TASK: {
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
