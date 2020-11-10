import React, { useRef, useCallback } from "react";
import styles from "components/about/about.module.scss";
import ExperienceBodyPg from "components/about/ExperienceBodyPg";
import ExperienceBodyNcsu from "components/about/ExperienceBodyNcsu";
import ExperienceBodyWtcc from "components/about/ExperienceBodyWtcc";
import ExperienceBodyUsaf from "components/about/ExperienceBodyUsaf";

/**
 * Handles the transitioning of the classNames to animate out and in
 * the old and new body elements.
 * @param bodyElementRefs Refs for each of the body elements
 * @param indexToShow The index of the body element we want to make visible
 */
const toggleBodyItemVisibility = (
  navElementRefs: React.RefObject<HTMLLIElement>[],
  bodyElementRefs: React.RefObject<HTMLDivElement>[],
  indexToShow: number
) => {
  const navElements = navElementRefs.map((navElementRef) => {
    return navElementRef.current;
  });
  navElements.forEach((element, index) => {
    if (!element) {
      return;
    }
    if (index === indexToShow) {
      element.classList.add(styles.isSelected);
    } else {
      element.classList.remove(styles.isSelected);
    }
  });

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
  const pgNavRef = useRef<HTMLLIElement>(null);
  const pgBodyRef = useRef<HTMLDivElement>(null);
  const ncsuNavRef = useRef<HTMLLIElement>(null);
  const ncsuBodyRef = useRef<HTMLDivElement>(null);
  const wtccNavRef = useRef<HTMLLIElement>(null);
  const wtccBodyRef = useRef<HTMLDivElement>(null);
  const usafNavRef = useRef<HTMLLIElement>(null);
  const usafBodyRef = useRef<HTMLDivElement>(null);
  const navElementRefs = [pgNavRef, ncsuNavRef, wtccNavRef, usafNavRef];
  const bodyElementRefs = [pgBodyRef, ncsuBodyRef, wtccBodyRef, usafBodyRef];

  const pgSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(navElementRefs, bodyElementRefs, 0);
  }, []);
  const ncsuSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(navElementRefs, bodyElementRefs, 1);
  }, []);
  const wtccSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(navElementRefs, bodyElementRefs, 2);
  }, []);
  const usafSidebarClickCallback = useCallback(() => {
    toggleBodyItemVisibility(navElementRefs, bodyElementRefs, 3);
  }, []);

  return (
    <>
      <div className={styles.experiencesGridContainer}>
        <ul className={styles.experiencesSidebarContainer}>
          <li
            ref={pgNavRef}
            className={`${styles.experiencesSidebarItem} ${styles.pgSidebarItem} ${styles.isSelected}`}
            onClick={pgSidebarClickCallback}
          >
            <span>Prometheus Group</span>
            <span>Lead Software Engineer</span>
            <span>2017 - 2020</span>
          </li>
          <li
            ref={ncsuNavRef}
            className={`${styles.experiencesSidebarItem} ${styles.ncsuSidebarItem}`}
            onClick={ncsuSidebarClickCallback}
          >
            <span>NC State</span>
            <span>Student</span>
            <span>2015 - 2017</span>
          </li>
          <li
            ref={wtccNavRef}
            className={`${styles.experiencesSidebarItem} ${styles.wtccSidebarItem}`}
            onClick={wtccSidebarClickCallback}
          >
            <span>Wake Tech CC</span>
            <span>Student</span>
            <span>2013 - 2015</span>
          </li>
          <li
            ref={usafNavRef}
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
            <ExperienceBodyPg />
          </div>
          <div ref={ncsuBodyRef} className={`${styles.experiencesBodyItem}`}>
            <ExperienceBodyNcsu />
          </div>
          <div ref={wtccBodyRef} className={`${styles.experiencesBodyItem}`}>
            <ExperienceBodyWtcc />
          </div>
          <div ref={usafBodyRef} className={`${styles.experiencesBodyItem}`}>
            <ExperienceBodyUsaf />
          </div>
        </div>
      </div>
    </>
  );
}
