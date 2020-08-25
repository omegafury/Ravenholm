import React from "react";
import {
  pageTransitionStatusTypes,
  SET_SHOW_LOADING,
  SET_PAGE_TRANSITION_STATE,
  SET_TRANSITION_META_DATA,
  SET_TIMEOUT_CALLBACK,
  SET_ON_CHILD_LOADED_META_DATA,
  START_DELAY_ENTER_TIMER,
  CLEAR_DELAY_ENTER_TIMER,
  SET_INITIAL_STATE,
} from "util/actions/pageTransitionActions";
import { actionTypes } from "./rootReducer";
import {
  areChildrenDifferent,
  differentChildrenNeedAnimation,
  shouldDelayEnter,
} from "util/pageTransitionUtils";

export type pageTransitionStateType = {
  pageTransitionStatus: pageTransitionStatusTypes;
  isIn: boolean;
  currentChildren: React.ReactNode;
  nextChildren: React.ReactNode;
  renderedChildren: React.ReactNode;
  prevShowLoading?: boolean;
  showLoading: boolean;
  delayEnterTimeoutCallback?: () => NodeJS.Timeout;
  timeoutId?: NodeJS.Timeout;
};
export const initialState: pageTransitionStateType = {
  pageTransitionStatus: "enter",
  isIn: true,
  currentChildren: null,
  nextChildren: null,
  renderedChildren: null,
  prevShowLoading: undefined,
  showLoading: false,
  delayEnterTimeoutCallback: undefined,
  timeoutId: undefined,
};

export const reducer: React.Reducer<pageTransitionStateType, actionTypes> = (
  state: pageTransitionStateType,
  action: actionTypes
) => {
  switch (action.type) {
    case SET_SHOW_LOADING:
      state.prevShowLoading = state.showLoading;
      state.showLoading = action.showLoading;
      return state;
    case SET_PAGE_TRANSITION_STATE:
      state.pageTransitionStatus = action.pageTransitionStatus;
      switch (action.pageTransitionStatus) {
        case "enter":
          state.prevShowLoading = state.showLoading;
          state.showLoading = false;
          return state;
        case "exited":
          state.renderedChildren = null;
          return state;
        default:
          return state;
      }
    case SET_TRANSITION_META_DATA:
      const { children } = action;
      const {
        currentChildren,
        renderedChildren,
        nextChildren,
        isIn,
        pageTransitionStatus,
        prevShowLoading,
        showLoading,
        delayEnterTimeoutCallback,
        timeoutId,
      } = state;
      const hasNewChildren = areChildrenDifferent(currentChildren, children);
      const needsTransition = areChildrenDifferent(renderedChildren, children);
      const shouldAnimateTransition =
        needsTransition &&
        differentChildrenNeedAnimation(renderedChildren, children);
      const updateChildrenWithoutTransition =
        isIn && needsTransition && !shouldAnimateTransition;
      const shouldTransition =
        needsTransition &&
        !isIn &&
        (pageTransitionStatus === "enter" || pageTransitionStatus === "exited");
      const loadingRequiredAndFinished = prevShowLoading && !showLoading;

      if (updateChildrenWithoutTransition) {
        // We need to update our rendered children, but we shouldn't animate them.
        // This will occur when the key prop on our children stays the same but
        // the children themselves change. This can happen in a lot of cases: HMR,
        // a rerender due to a Redux state change, a Router.push to the current page,
        // etc. In this case, we'll just immediately flush the children to be
        // rendered.
        state.currentChildren = children;
        state.renderedChildren = children;
      } else if (hasNewChildren) {
        // We got a new set of children while we were transitioning some in
        // Immediately start transitioning out this component and update the next
        // component
        state.isIn = false;
        state.nextChildren = children;
        state.currentChildren = children;
        if (timeoutId) {
          clearTimeout(timeoutId);
          state.timeoutId = undefined;
        }
      } else if (shouldTransition) {
        state.renderedChildren = nextChildren;
        state.nextChildren = null;
        if (delayEnterTimeoutCallback && shouldDelayEnter(nextChildren)) {
          // Wait for the ready callback to actually transition in, but still
          // mount the component to allow it to start loading things
          state.timeoutId = delayEnterTimeoutCallback();
        } else {
          // No need to wait, mount immediately
          state.isIn = true;
        }
      } else if (loadingRequiredAndFinished) {
        // We hid the loading indicator; now that that change has been flushed to
        // the DOM, we can now bring in the next component!
        state.isIn = true;
      }
      return state;
    case SET_TIMEOUT_CALLBACK: {
      state.delayEnterTimeoutCallback = action.delayEnterTimeoutCallback;
      return state;
    }
    case START_DELAY_ENTER_TIMER: {
      if (state.delayEnterTimeoutCallback) {
        state.timeoutId = state.delayEnterTimeoutCallback();
      }
      return state;
    }
    case CLEAR_DELAY_ENTER_TIMER: {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
        state.timeoutId = undefined;
      }
      return state;
    }
    case SET_ON_CHILD_LOADED_META_DATA: {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      if (state.showLoading) {
        // We'll hide the loader first and animate in the page on the next tick
        state.showLoading = false;
      } else {
        // We can immediately bring in the next page!
        state.isIn = true;
      }
      return state;
    }
    case SET_INITIAL_STATE: {
      state.pageTransitionStatus = action.skipInitialTransition
        ? "init"
        : "enter";
      state.isIn = !shouldDelayEnter(action.children);
      state.currentChildren = action.children;
      state.nextChildren = null;
      state.renderedChildren = action.children;
      state.showLoading = false;
      return state;
    }
    default:
      return state;
  }
};
