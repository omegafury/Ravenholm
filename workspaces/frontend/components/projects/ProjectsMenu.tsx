import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import styles from "components/projects/projects.module.scss";
import VoronoiMutator from "components/VoronoiMutator";

type itemType = {
  title: string;
  preview: React.ReactNode;
};

const items: itemType[] = [
  {
    title: "Voronoi Mutator",
    preview: <VoronoiMutator />,
  },
  {
    title: "item2",
    preview: <div>placeholder</div>,
  },
  {
    title: "item3",
    preview: <div>placeholder</div>,
  },
  {
    title: "item4",
    preview: <div>placeholder</div>,
  },
  {
    title: "item5",
    preview: <div>placeholder</div>,
  },
  {
    title: "item6",
    preview: <div>placeholder</div>,
  },
  {
    title: "item7",
    preview: <div>placeholder</div>,
  },
  {
    title: "item8",
    preview: <div>placeholder</div>,
  },
];
// 25vw. See projects.module.scss for $itemDim;
const itemDim = 25;

export default function ProjectsMenu() {
  const [count, setCount] = useState(items.length);
  const refsMap = items.map(() => {
    return useRef<HTMLDivElement>(null);
  });
  useEffect(() => {
    refsMap.forEach((ref, index) => {
      if (!ref.current) {
        return;
      }
      // Rotate each item to the correct location on the carousel.
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
            const item = items[index];
            return (
              <div key={index} className={`${styles.item}`} ref={ref}>
                <div className={styles.itemBoxSides} />
                <div className={styles.itemBoxTopBottom} />
                <div className={styles.itemCard}>
                  <div className={styles.itemCardTitle}>{item.title}</div>
                  <div className={styles.itemCardPreview}>{item.preview}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
