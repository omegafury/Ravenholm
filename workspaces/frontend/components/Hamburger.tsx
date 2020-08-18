import styles from "components/layout.module.scss";
import { useState, useDispatch } from "components/ContextProvider";
import { useCallback } from "react";
import { toggleHamburger } from "util/actions/hamburgerActions";

export default function Hamburger({ className }: { className?: string }) {
  const dispatch = useDispatch();
  const { hamburger: state } = useState();
  const isOpen = state.isOpen;
  const navIconClassName = isOpen
    ? `${className} ${styles.navIcon} ${styles.isOpen}`
    : `${className} ${styles.navIcon}`;
  const onClick = useCallback(() => {
    dispatch(toggleHamburger());
  }, []);

  return (
    <div className={navIconClassName} onClick={onClick}>
      <div className={styles.hamburger}></div>
      <svg x="0px" y="0px" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="24"
          strokeDasharray="160 160"
          strokeDashoffset="160"
        />
      </svg>
    </div>
  );
}
