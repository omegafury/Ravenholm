import React from "react";

export function areChildrenDifferent(
  oldChildren: React.ReactNode,
  newChildren: React.ReactNode
) {
  return oldChildren !== newChildren;
}

export function differentChildrenNeedAnimation(
  oldChildren: React.ReactNode,
  newChildren: React.ReactNode
) {
  if (!oldChildren || !newChildren) {
    return true;
  }

  if (
    !React.isValidElement(oldChildren) ||
    !React.isValidElement(newChildren)
  ) {
    console.warn(
      "[next-page-transitions] PageTransition child is not a valid React component"
    );
    return true;
  }

  if (oldChildren.key == null || newChildren.key == null) {
    console.warn(
      "[next-page-transitions] PageTransition child does not have a key"
    );
    return true;
  }

  return oldChildren.key !== newChildren.key;
}

export function shouldDelayEnter(children: React.ReactNode) {
  return (
    React.isValidElement(children) && children.props.pageTransitionDelayEnter
  );
}
