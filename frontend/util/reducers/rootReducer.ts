import {
  initialState as hamburgerInitialState,
  reducer as hamburgerReducer,
} from "util/reducers/hamburgerReducer";
import { hamburgerActionTypes } from "util/actions/hamburgerActions";

// The union of all state and action types respectively
type stateTypes = typeof hamburgerInitialState;
export type actionTypes = hamburgerActionTypes;

// Our final state object has keys mapping to each reducers substate
type stateType = {
  [key: string]: stateTypes;
};
// Maps the reducers to their corresponding keys in the state
type ReducerMapType = {
  [k in keyof stateType]: (
    state: stateType[k],
    action: actionTypes
  ) => stateType[k];
};

// Combines the individual reducers into a single reducer function. This function takes
// the provided action and runs it against each sub-reducer
const combineReducers = (reducers: ReducerMapType) => (
  state: stateType,
  action: actionTypes
) => {
  const newState: stateType = {};
  for (let key in state) {
    newState[key] = reducers[key](state[key], action);
  }
  return newState;
};

const reducerMap: ReducerMapType = {
  hamburger: hamburgerReducer,
};

export const rootReducer: React.Reducer<
  stateType,
  actionTypes
> = combineReducers(reducerMap);
export const rootInitialState: stateType = {
  hamburger: hamburgerInitialState,
};
