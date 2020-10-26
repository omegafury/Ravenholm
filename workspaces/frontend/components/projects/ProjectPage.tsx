import React, { useRef, useCallback } from "react";
import styles from "components/projects/projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type projectPagePropType = {
  title: string;
  description: React.ReactNode;
  projectComponent: React.ReactNode;
};

export default function ProjectPage({
  title,
  description,
  projectComponent,
}: projectPagePropType) {
  const infoContainerRef = useRef<HTMLDivElement>(null);

  const displayButtonOnClick = useCallback(() => {
    const infoContainerElement = infoContainerRef.current;
    if (!infoContainerElement) {
      return;
    }
    const isExpanded = infoContainerElement.classList.contains(
      styles.infoContainerIsExpanded
    );
    const isCollapsed = infoContainerElement.classList.contains(
      styles.infoContainerIsCollapsed
    );
    const initialState = !isExpanded && !isCollapsed;
    if (isExpanded || initialState) {
      infoContainerElement.classList.remove(styles.infoContainerIsExpanded);
      infoContainerElement.classList.add(styles.infoContainerIsCollapsed);
    } else {
      infoContainerElement.classList.remove(styles.infoContainerIsCollapsed);
      infoContainerElement.classList.add(styles.infoContainerIsExpanded);
    }
  }, []);

  return (
    <>
      <div className={styles.projectPageContainer}>
        <div className={styles.infoContainer} ref={infoContainerRef}>
          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>{title}</h2>
            <hr />
            <div className={styles.infoDesc}>{description}</div>
            {/* <div className={styles.additionalControls}></div> */}
          </div>
          <div className={styles.displayButton} onClick={displayButtonOnClick}>
            <FontAwesomeIcon
              className={styles.displayButtonIcon}
              icon={["fas", "angle-left"]}
              size="1x"
            />
            <FontAwesomeIcon
              className={styles.displayButtonIcon}
              icon={["fas", "angle-left"]}
              size="1x"
            />
          </div>
        </div>
        <div className={styles.projectContainer}>{projectComponent}</div>
      </div>
    </>
  );
}
