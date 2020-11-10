import React from "react";
import styles from "components/projects/projects.module.scss";
import VoronoiMutator from "components/VoronoiMutator";
import Link from "next/link";

type itemType = {
  title: string;
  preview: React.ReactNode;
  href: string;
};

const items: itemType[] = [
  {
    title: "Voronoi Mutator",
    preview: <VoronoiMutator />,
    href: "/projects/voronoiMutator",
  },
  {
    title: "Carousel",
    preview: (
      <img
        src={"/images/carousel.png"}
        style={{ height: "100%", width: "100%" }}
      />
    ),
    href: "/projects/carousel",
  },
  {
    title: "Voronoi Stippling",
    preview: (
      <img
        src={"/images/voronoiStipplingExample.png"}
        style={{ height: "100%", width: "100%" }}
      />
    ),
    href: "/projects/voronoiStippling",
  },
];

export default function IsometricMenu() {
  return (
    <>
      <div className={styles.gridBackground}>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {items.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <div className={`${styles.item}`}>
                    <div className={styles.itemFace5}>
                      <div>{item.title}</div>
                    </div>
                    <div className={styles.itemFace4} />
                    <div className={styles.itemFace3} />
                    <div className={styles.itemFace2} />
                    <div className={styles.itemFace1}>
                      <div className={styles.itemCardPreview}>
                        {item.preview}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
