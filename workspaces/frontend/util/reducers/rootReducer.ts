import {
  hamburgerStateType,
  initialState as hamburgerInitialState,
  reducer as hamburgerReducer,
} from "util/reducers/hamburgerReducer";
import {
  pageTransitionStateType,
  initialState as pageTransitionInitialState,
  reducer as pageTransitionReducer,
} from "util/reducers/pageTransitionReducer";
import { hamburgerActionTypes } from "util/actions/hamburgerActions";
import { pageTransitionActionsTypes } from "util/actions/pageTransitionActions";

// The union of all state and action types respectively
type stateType = {
  hamburger: hamburgerStateType;
  pageTransition: pageTransitionStateType;
};
export type actionTypes = hamburgerActionTypes | pageTransitionActionsTypes;

// Maps the reducers to their corresponding keys in the state
type ReducerMapType<S> = {
  [k in keyof S]: React.Reducer<S[k], actionTypes>;
};
const reducerMap: ReducerMapType<stateType> = {
  hamburger: hamburgerReducer,
  pageTransition: pageTransitionReducer,
};

const pickAndApplyReducer = <S extends stateType, K extends keyof S>(
  state: S,
  mutableState: S,
  reducerMap: ReducerMapType<S>,
  action: actionTypes,
  key: K
) => {
  mutableState[key] = reducerMap[key](state[key], action);
};

// Combines the individual reducers into a single reducer function. This function takes
// the provided action and runs it against each sub-reducer
const combineReducers = (reducers: ReducerMapType<stateType>) => (
  state: stateType,
  action: actionTypes
) => {
  const newState = { ...state };

  for (let key in reducers) {
    pickAndApplyReducer(
      state,
      newState,
      reducers,
      action,
      key as keyof stateType
    );
  }
  return newState;
};

export const rootReducer: React.Reducer<
  stateType,
  actionTypes
> = combineReducers(reducerMap);
export const rootInitialState: stateType = {
  hamburger: hamburgerInitialState,
  pageTransition: pageTransitionInitialState,
};
