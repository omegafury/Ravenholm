import {
  hamburgerActionTypes,
  TOGGLE_HAMBURGER,
} from "util/actions/hamburgerActions";
import { actionTypes } from "./rootReducer";

export type hamburgerStateType = {
  isOpen: boolean;
};
export const initialState: hamburgerStateType = {
  isOpen: false,
};

export const reducer: React.Reducer<hamburgerStateType, actionTypes> = (
  state: typeof initialState,
  action: actionTypes
) => {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      state.isOpen = action.isOpen ? action.isOpen : !state.isOpen;
      return state;
    default:
      return state;
  }
};
