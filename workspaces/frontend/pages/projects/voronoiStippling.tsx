import React from "react";
import VoronoiStipplingComponent from "components/VoronoiStippling";
import ProjectPage from "components/projects/ProjectPage";
import Link from "next/link";

export default function VoronoiStippling() {
  const title = "Voronoi Stippling";
  const description = (
    <>
      <p>
        This is a port of{" "}
        <a
          href="https://observablehq.com/@mbostock/voronoi-stippling"
          target="_blank"
        >
          this Observable.
        </a>{" "}
        For this I needed to set up a web worker to handle asynchronous
        calculations, as generating the Voronoi Stippling on the main
        javasscript thread would just lock up the page. I originally looked at
        using this on the main page, but found that it was to slow, as well as
        not quite being as visually interesting as I wanted, so I ended up using
        the{" "}
        <Link href="/projects/voronoiMutator">
          <a>Voronoi Mutator</a>
        </Link>{" "}
        instead.
      </p>
    </>
  );
  const projectComponent = <VoronoiStipplingComponent />;

  return (
    <>
      <ProjectPage
        title={title}
        description={description}
        projectComponent={projectComponent}
      />
    </>
  );
}
