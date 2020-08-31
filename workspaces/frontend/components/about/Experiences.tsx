import React, { useRef, useCallback } from "react";
import utilStyles from "styles/utils.module.css";
import styles from "components/about/about.module.scss";
import ExperiencesBodyPg from "./experiencesBodyPg";
import ExperiencesBodyNcsu from "./ExperiencesBodyNcsu";

const toggleBodyItemVisibility = (
  bodyElementRefs: React.RefObject<HTMLDivElement>[],
  indexToShow: number
) => {
  const bodyElements = bodyElementRefs.map((bodyElementRef) => {
    return bodyElementRef.current;
  });
  bodyElements.forEach((element, index) => {
    if (!element) {
      return;
    }
    if (index === indexToShow) {
      element.classList.remove(styles.isHidden);
      element.classList.add(styles.isVisible);
    } else {
      element.classList.remove(styles.isVisible);
      element.classList.add(styles.isHidden);
    }
    console.warn(element.classList);
  });
};

export default function Experiences() {
  const pgBodyRef = useRef<HTMLDivElement>(null);
  const ncsuBodyRef = useRef<HTMLDivElement>(null);
  const bodyElementRefs = [pgBodyRef, ncsuBodyRef];

  const pgSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(bodyElementRefs, 0);
    console.warn("clicked pg sidebar");
  }, []);
  const ncsuSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(bodyElementRefs, 1);
    console.warn("clicked ncsu sidebar");
  }, []);

  return (
    <>
      <div className={styles.experiencesGridContainer}>
        <ul className={styles.experiencesSidebarContainer}>
          <li
            className={`${styles.experiencesSidebarItem} ${styles.pgSidebarItem}`}
            onClick={pgSidebarClickCallback}
          >
            <span>Prometheus Group</span>
            <span>Lead Software Engineer</span>
            <span>2017 - 2020</span>
          </li>
          <li
            className={`${styles.experiencesSidebarItem} ${styles.ncsuSidebarItem}`}
            onClick={ncsuSidebarClickCallback}
          >
            <span>NC State</span>
            <span>Student</span>
            <span>2015 - 2017</span>
          </li>
          <li
            className={`${styles.experiencesSidebarItem} ${styles.wtccSidebarItem}`}
          >
            <span>Wake Tech CC</span>
            <span>Student</span>
            <span>2013 - 2015</span>
          </li>
          <li
            className={`${styles.experiencesSidebarItem} ${styles.usafSidebarItem}`}
          >
            <span>US Air Force</span>
            <span>Staff Sergeant</span>
            <span>2007 - 2013</span>
          </li>
        </ul>
        <div className={styles.experiencesBodyContainer}>
          <div
            ref={pgBodyRef}
            className={`${styles.experiencesBodyItem} ${styles.experiencesBodyPG} ${styles.isVisible}`}
          >
            <ExperiencesBodyPg />
          </div>
          <div
            ref={ncsuBodyRef}
            className={`${styles.experiencesBodyItem} ${styles.experiencesBodyNCSU}`}
          >
            <ExperiencesBodyNcsu />
          </div>
        </div>
      </div>
    </>
  );
}
