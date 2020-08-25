export const SET_SHOW_LOADING = "SET_SHOW_LOADING";
export const SET_PAGE_TRANSITION_STATE = "SET_PAGE_TRANSITION_STATE";
export const SET_TRANSITION_META_DATA = "SET_TRANSITION_META_DATA";
export const SET_TIMEOUT_CALLBACK = "SET_TIMEOUT_CALLBACK";
export const START_DELAY_ENTER_TIMER = "START_DELAY_ENTER_TIMER";
export const CLEAR_DELAY_ENTER_TIMER = "CLEAR_DELAY_ENTER_TIMER";
export const SET_ON_CHILD_LOADED_META_DATA = "SET_ON_CHILD_LOADED_META_DATA";
export const SET_INITIAL_STATE = "SET_INITIAL_STATE";

export type pageTransitionStatusTypes =
  | "init"
  | "enter"
  | "entering"
  | "entered"
  | "exit"
  | "exiting"
  | "exited";
export type pageTransitionActionsTypes =
  | setShowLoadingAction
  | setPageTransitionStateAction
  | setTransitionMetaDataAction
  | setTimeoutCallbackAction
  | startDelayEnterTimerAction
  | clearDelayEnterTimerAction
  | setOnChildLoadedMetaDataAction
  | setInitialStateAction;

type setShowLoadingAction = {
  type: typeof SET_SHOW_LOADING;
  showLoading: boolean;
};
type setPageTransitionStateAction = {
  type: typeof SET_PAGE_TRANSITION_STATE;
  pageTransitionStatus: pageTransitionStatusTypes;
  showLoading?: boolean;
  renderedChildren?: React.ReactNode;
};
type setTransitionMetaDataAction = {
  type: typeof SET_TRANSITION_META_DATA;
  children: React.ReactNode;
};
type setTimeoutCallbackAction = {
  type: typeof SET_TIMEOUT_CALLBACK;
  delayEnterTimeoutCallback: () => NodeJS.Timeout;
};
type startDelayEnterTimerAction = {
  type: typeof START_DELAY_ENTER_TIMER;
};
type clearDelayEnterTimerAction = {
  type: typeof CLEAR_DELAY_ENTER_TIMER;
};
type setOnChildLoadedMetaDataAction = {
  type: typeof SET_ON_CHILD_LOADED_META_DATA;
};
type setInitialStateAction = {
  type: typeof SET_INITIAL_STATE;
  skipInitialTransition: boolean;
  children: React.ReactNode;
};

export function setShowLoading(showLoading: boolean): setShowLoadingAction {
  return {
    type: SET_SHOW_LOADING,
    showLoading: showLoading,
  };
}

export function setPageTransitionStatus(
  pageTransitionStatus: pageTransitionStatusTypes
): setPageTransitionStateAction {
  return {
    type: SET_PAGE_TRANSITION_STATE,
    pageTransitionStatus: pageTransitionStatus,
  };
}

export function setTransitionMetaData(
  children: React.ReactNode
): setTransitionMetaDataAction {
  return {
    type: SET_TRANSITION_META_DATA,
    children: children,
  };
}

export function setTimeoutCallback(
  delayEnterTimeoutCallback: () => NodeJS.Timeout
): setTimeoutCallbackAction {
  return {
    type: SET_TIMEOUT_CALLBACK,
    delayEnterTimeoutCallback: delayEnterTimeoutCallback,
  };
}

export function startDelayEnterTimer(): startDelayEnterTimerAction {
  return {
    type: START_DELAY_ENTER_TIMER,
  };
}

export function clearDelayEnterTimer(): clearDelayEnterTimerAction {
  return {
    type: CLEAR_DELAY_ENTER_TIMER,
  };
}

export function setOnChildLoadedMetaData(): setOnChildLoadedMetaDataAction {
  return {
    type: SET_ON_CHILD_LOADED_META_DATA,
  };
}

export function setInitialState(
  skipInitialTransition: boolean,
  children: React.ReactNode
): setInitialStateAction {
  return {
    type: SET_INITIAL_STATE,
    skipInitialTransition: skipInitialTransition,
    children: children,
  };
}
