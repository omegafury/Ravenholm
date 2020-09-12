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
  {
    title: "item9",
    preview: <div>placeholder</div>,
  },
];

export default function ProjectsMenu2() {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {items.map((item, index) => {
            return (
              <div key={index} className={`${styles.item}`}>
                <div className={styles.itemFace5}>
                  <div className={styles.itemCardTitle}>{item.title}</div>
                </div>
                <div className={styles.itemFace4} />
                <div className={styles.itemFace3} />
                <div className={styles.itemFace2} />
                <div className={styles.itemFace1}>
                  <div className={styles.itemCardPreview}>{item.preview}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div>info card</div>
      </div>
    </>
  );
}
