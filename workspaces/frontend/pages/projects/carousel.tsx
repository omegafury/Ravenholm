import React from "react";
import CarouselComponent from "components/carousel/Carousel";
import ProjectPage from "components/projects/ProjectPage";

export default function VoronoiMutator() {
  const title = "Carousel";
  const description = (
    <>
      <p>
        This rotating 3d carousel was my first idea for an interesting project
        display medium. After getting to this stage of development however, I
        wasn't really satisfied with the usabililty of it, especially once many
        items were added, so I ended up scrapping it in favor of the isometric
        grid you now see on the projects page. I had to learn a significant
        amount about 3d transforms to get this to work though, which was a big
        help when doing the isometric grid.
      </p>
    </>
  );
  const projectComponent = <CarouselComponent />;

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
