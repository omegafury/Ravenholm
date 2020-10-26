import React from "react";
import VoronoiMutatorComponent from "components/VoronoiMutator";
import ProjectPage from "components/projects/ProjectPage";

export default function VoronoiMutator() {
  const title = "Voronoi Mutator";
  const description = (
    <>
      <p>
        This came about from my search for a good backdrop for the home page. I
        found{" "}
        <a
          href="https://observablehq.com/@mootari/valking-woronoi"
          target="_blank"
        >
          this
        </a>{" "}
        on Observable, and thought it was pretty sweet. The bulk of the work
        with this component was migrating the code from the Observable platform
        into typescript, and setting up the randomization so that on each page
        load the animation would be different.
      </p>
      <p>
        Fundamentally, this is just a{" "}
        <a href="https://en.wikipedia.org/wiki/Voronoi_diagram" target="_blank">
          voronoi diagram
        </a>
        , but the underlying code generates the points making up the diagram in
        various patterns depending on the inputs. It also applies a time
        dimension to this generation, thereby giving it the ability to generate
        an animation. My addition also randomly picks 0 or more parameters, then
        slowly mutates those chosen parameters over time.
      </p>
    </>
  );
  const projectComponent = <VoronoiMutatorComponent />;

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
