import React, { useRef, useCallback, useEffect, useState } from "react";
import styles from "components/projects/projects.module.scss";

const items = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
];
// 25vw. See projects.module.scss for $itemDim;
const itemDim = 25;

export default function ProjectsMenu() {
  const [count, setCount] = useState(0);
  const refsMap = items.map(() => {
    return useRef<HTMLDivElement>(null);
  });
  useEffect(() => {
    refsMap.forEach((ref, index) => {
      if (!ref.current) {
        return;
      }
      const rotateYVal = ((2 * Math.PI) / items.length) * (index + count);
      const translateZVal = (items.length * itemDim) / (2 * Math.PI);
      ref.current.style.transform = `rotateY(${rotateYVal}rad) translateZ(${translateZVal}vw`;
    });
  }, [count]);
  const leftCallback = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);
  const rightCallback = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.leftArrow} onClick={leftCallback}>
          <img src="/images/arrowLeft.png" />
        </div>
        <div className={styles.upArrow} onClick={leftCallback}>
          <img src="/images/arrowUp.png" />
        </div>
        <div className={styles.rightArrow} onClick={rightCallback}>
          <img src="/images/arrowRight.png" />
        </div>
        <div className={styles.downArrow} onClick={rightCallback}>
          <img src="/images/arrowDown.png" />
        </div>
        <div className={styles.items}>
          {refsMap.map((ref, index) => {
            return (
              <div key={index} className={`${styles.item}`} ref={ref}>
                <div>test {index}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
