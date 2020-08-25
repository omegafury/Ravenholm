import React, { JSXElementConstructor, useEffect, useCallback } from "react";
import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useDispatch, useState } from "components/ContextProvider";
import {
  setShowLoading,
  setPageTransitionStatus,
  setTransitionMetaData,
  setTimeoutCallback,
  setOnChildLoadedMetaData,
  startDelayEnterTimer,
  clearDelayEnterTimer,
  setInitialState,
} from "util/actions/pageTransitionActions";
import { shouldDelayEnter } from "util/pageTransitionUtils";

const defaultProps = {
  tag: "div",
  loadingComponent: null,
  loadingCallbackName: "pageTransitionReadyToEnter",
  loadingDelay: 500,
  skipInitialTransition: false,
};

type transitionTypes =
  | "init"
  | "enter"
  | "entering"
  | "entered"
  | "exit"
  | "exiting"
  | "exited";
type transitionTimeoutType =
  | number
  | { enter?: number; exit?: number; appear?: number };
type transitionClassnamesType =
  | string
  | {
      appear?: string;
      appearActive?: string;
      appearDone?: string;
      enter?: string;
      enterActive?: string;
      enterDone?: string;
      exit?: string;
      exitActive?: string;
      exitDone?: string;
    };
type PageTransitionPropTypes = {
  tag: JSXElementConstructor<any>;
  children: React.ReactNode;
  classNames: string;
  timeout: transitionTimeoutType;
  loadingComponent: React.ReactNode;
  loadingDelay: number;
  loadingCallbackName: string;
  loadingTimeout: transitionTimeoutType;
  loadingClassNames: transitionClassnamesType;
  skipInitialTransition: boolean;
};

function buildClassName(className: string, transitionState: transitionTypes) {
  switch (transitionState) {
    case "enter":
      return `${className}-enter`;
    case "entering":
      return `${className}-enter ${className}-enter-active`;
    case "entered":
      return `${className}-enter-done`;
    case "exit":
      return `${className}-exit`;
    case "exiting":
      return `${className}-exit ${className}-exit-active`;
    case "exited":
      return `${className}-exit-done`;
    default:
      return "";
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: defaultProps,
  };
};

export default function PageTransition({
  tag: Tag,
  children,
  classNames,
  timeout,
  loadingComponent,
  loadingDelay,
  loadingCallbackName,
  loadingTimeout,
  loadingClassNames,
  skipInitialTransition,
}: PageTransitionPropTypes) {
  const dispatch = useDispatch();
  const { pageTransition: state } = useState();
  const { renderedChildren, pageTransitionStatus, isIn, showLoading } = state;
  const hasLoadingComponent = !!loadingComponent;
  const containerClassName = buildClassName(classNames, pageTransitionStatus);

  /** DEFINE TRANSITION CALLBACK HOOKS */
  const onEnter = useCallback(() => {
    dispatch(setPageTransitionStatus("enter"));
  }, []);
  const onEntering = useCallback(() => {
    dispatch(setPageTransitionStatus("entering"));
  }, []);
  const onEntered = useCallback(() => {
    dispatch(setPageTransitionStatus("entered"));
  }, []);
  const onExit = useCallback(() => {
    dispatch(setPageTransitionStatus("exit"));
  }, []);
  const onExiting = useCallback(() => {
    dispatch(setPageTransitionStatus("exiting"));
  }, []);
  const onExited = useCallback(() => {
    dispatch(setPageTransitionStatus("exited"));
  }, []);

  /** DEFINE DELAY ENTER TIMER CALLBACK */
  const delayEnterTimer = useCallback(() => {
    return setTimeout(() => {
      dispatch(setShowLoading(true));
    }, loadingDelay);
  }, [loadingDelay]);

  /** DEFINE DELAY ENTER CALLBACK HOOK */
  // This is the callback that's passed to child components utilizing the
  // "pageTransitionDelayEnter" prop to force the transition logic to wait.
  // This callback is what lets PageTransition know to start the transition.
  const onChildLoaded = useCallback(() => {
    dispatch(setOnChildLoadedMetaData());
  }, []);

  /** DEFINE LIFECYCLE EFFECT HOOKS */
  // On mount, seed the state with the required information for the page transitions.
  useEffect(() => {
    dispatch(setInitialState(skipInitialTransition, children));
  }, []);

  // Reflow document upon certain transition statuses
  useEffect(() => {
    if (
      ["entering", "exiting", "exited"].indexOf(pageTransitionStatus) !== -1
    ) {
      // Need to reflow!
      if (document.body) document.body.scrollTop;
    }
  }, [pageTransitionStatus]);

  // Set the delayEnterTimer into the pageTransition state so that it can be called
  // during the pageTransition logic in setTransitionMetaData
  useEffect(() => {
    dispatch(setTimeoutCallback(delayEnterTimer));
  }, [loadingDelay]);

  // Whenever we see a new children prop, check if we should delay the enter transition.
  // If so, set the timeout. On unmounting, clear the timeout if it still exists.
  useEffect(() => {
    if (shouldDelayEnter(children)) {
      dispatch(startDelayEnterTimer());
    }
    return () => {
      dispatch(clearDelayEnterTimer());
    };
  }, [children]);

  // This effect is where the bulk of the transition work is accomplished, and is therefore ran each render.
  // This should only run after the other effects have ran however, as they handle the initialization required
  // for the state transitions in here to work properly.
  useEffect(() => {
    dispatch(setTransitionMetaData(children));
  }, [children, pageTransitionStatus]);

  return (
    <>
      <Transition
        timeout={timeout}
        in={isIn}
        appear={!skipInitialTransition}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Tag className={containerClassName}>
          {React.isValidElement(renderedChildren) &&
            React.cloneElement(renderedChildren, {
              [loadingCallbackName]: () => onChildLoaded(),
            })}
        </Tag>
      </Transition>
      {hasLoadingComponent && (
        <CSSTransition
          in={showLoading}
          mountOnEnter
          unmountOnExit
          appear
          classNames={loadingClassNames}
          timeout={loadingTimeout}
        >
          {loadingComponent}
        </CSSTransition>
      )}
    </>
  );
}
PageTransition.defaultProps = defaultProps;
