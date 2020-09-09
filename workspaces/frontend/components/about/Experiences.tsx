import React, { useRef, useCallback } from "react";
import utilStyles from "styles/utils.module.css";
import styles from "components/about/about.module.scss";
import ExperiencesBodyPg from "components/about/ExperiencesBodyPg";
import ExperiencesBodyNcsu from "components/about/ExperiencesBodyNcsu";
import ExperiencesBodyWtcc from "components/about/ExperiencesBodyWtcc";
import ExperiencesBodyUsaf from "components/about/ExperiencesBodyUsaf";

/**
 * Handles the transitioning of the classNames to animate out and in
 * the old and new body elements.
 * @param bodyElementRefs Refs for each of the body elements
 * @param indexToShow The index of the body element we want to make visible
 */
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
    } else if (element.classList.contains(styles.isVisible)) {
      element.classList.remove(styles.isVisible);
      element.classList.add(styles.isHidden);
    }
  });
};

export default function Experiences() {
  const pgBodyRef = useRef<HTMLDivElement>(null);
  const ncsuBodyRef = useRef<HTMLDivElement>(null);
  const wtccBodyRef = useRef<HTMLDivElement>(null);
  const usafBodyRef = useRef<HTMLDivElement>(null);
  const bodyElementRefs = [pgBodyRef, ncsuBodyRef, wtccBodyRef, usafBodyRef];

  const pgSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(bodyElementRefs, 0);
  }, []);
  const ncsuSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(bodyElementRefs, 1);
  }, []);
  const wtccSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(bodyElementRefs, 2);
  }, []);
  const usafSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(bodyElementRefs, 3);
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
            onClick={wtccSidebarClickCallback}
          >
            <span>Wake Tech CC</span>
            <span>Student</span>
            <span>2013 - 2015</span>
          </li>
          <li
            className={`${styles.experiencesSidebarItem} ${styles.usafSidebarItem}`}
            onClick={usafSidebarClickCallback}
          >
            <span>US Air Force</span>
            <span>Staff Sergeant</span>
            <span>2007 - 2013</span>
          </li>
        </ul>
        <div className={styles.experiencesBodyContainer}>
          <div
            ref={pgBodyRef}
            className={`${styles.experiencesBodyItem} ${styles.isVisible}`}
          >
            <ExperiencesBodyPg />
          </div>
          <div ref={ncsuBodyRef} className={`${styles.experiencesBodyItem}`}>
            <ExperiencesBodyNcsu />
          </div>
          <div ref={wtccBodyRef} className={`${styles.experiencesBodyItem}`}>
            <ExperiencesBodyWtcc />
          </div>
          <div ref={usafBodyRef} className={`${styles.experiencesBodyItem}`}>
            <ExperiencesBodyUsaf />
          </div>
        </div>
      </div>
    </>
  );
}
