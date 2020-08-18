import { useReducer, useContext, createContext } from "react";
import {
  rootReducer,
  actionTypes,
  rootInitialState,
} from "util/reducers/rootReducer";

const StateContext = createContext(rootInitialState);
const DispatchContext = createContext((action: actionTypes) => {});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

// State is an object, so creating a copy of it here before we return it with
// useState ensurese that actual state is immutable. The returned state is
// not immutable, but at least the true state is immpossible to atler without
// dispatching an action.
export const useState = () => Object.assign(useContext(StateContext), {});
export const useDispatch = () => useContext(DispatchContext);
