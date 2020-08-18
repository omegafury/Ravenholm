import {
  hamburgerActionTypes,
  TOGGLE_HAMBURGER,
} from "util/actions/hamburgerActions";

export const initialState = {
  isOpen: false,
};

export const reducer: React.Reducer<
  typeof initialState,
  hamburgerActionTypes
> = (state: typeof initialState, action: hamburgerActionTypes) => {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      state.isOpen = action.isOpen ? action.isOpen : !state.isOpen;
      return state;
    default:
      return state;
  }
};
