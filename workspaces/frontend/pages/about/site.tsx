import React from "react";
import styles from "components/about/about.module.scss";

export default function Site() {
  return (
    <div className={styles.siteContainer}>
      <h1>Background</h1>
      <p>
        This is my (Andrew Poe) personal site. While it does contain my resume,
        and a more detailed breakdown of my work history, its primary focus is
        not necessarily as a portfolio site. Having as a visible example of my
        work IS important, since I'm unlikely to be able to show off anythiong I
        do on the job, but this site is really intended to be a kind of long
        lasting coding playground for me. The web isn't going anywhere, and
        neither am I, so this site should be a living project, evolving as the
        web and its technologies do.
      </p>
      <h1>The site</h1>
      <p>
        This site is a{" "}
        <a href="https://nextjs.org/" target="_blank">
          Next.js
        </a>{" "}
        site, which by extension means it's using{" "}
        <a href="https://reactjs.org/" target="_blank">
          React
        </a>
        . I'm using TypeScript everywhere, both because it's just a big
        improvement over vanilla JavaScript, and because at my previous job I
        didn't get to use it outside some small collaboration work I did. We had
        something like 100k+ lines of JavaScript in my product, and no free time
        to even contemplate that kind of switch. Now, one of the things that
        makes JavaScript particularly easy to deal with is that is doesn't have
        types, so there have obviously been bumps in the road related to
        typings. One in particular that was interesting was related to the
        library (
        <a
          href="https://github.com/illinois/next-page-transitions"
          target="_blank"
        >
          next-page-transitions
        </a>
        ) I wanted to use for animating the Next.js page transitions. The
        library did everything I wanted and was easy to use, but it was also
        very dead, and had no types for me to use. There also didn't appear to
        be a good alternative in the Next.js ecosystem at the time, so I decided
        to just rewrite it from scratch, using the dead library as a base to
        guide the business logic. I initially tried simply writing types for it
        and calling it a day, but that ended up being a big enough PITA that I
        just went forward with the full rewrite. If the source library was much
        larger I definitely wouldn't have done this, but since it was fairly
        small it was definitely worth it. It was also excellent practice for me
        for setting up a very complicated component using{" "}
        <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">
          React Hooks
        </a>
        , as I also didn't have a chance to use those on my old project.
      </p>
      <p>
        I've put a fair bit of time into making sure the site follows responsive
        deisgn, and has a good user experience whether on a widescreen desktop,
        or a small mobile screen. That includes both testing as numerous
        different resolutions on each page I developed, as well as quick real
        world testing on the Android and Apple devices I have access to. I was
        able to discover a few UI bugs that only cropped up on on the actual
        mobile hardware and fix them, but my access to hardware is limited, so
        if you see any particularly egregious bugs, and have some spare time,
        shoot me an email about it. I'm always interested in feedback.
      </p>
      <p>
        Currently this site doesn't have a backend / database associated with
        it, as I currently have no need for either yet. I'll be using a Postgres
        database when I need one however. As for the backend stack, I guess that
        determination will come down to what I really need. If it's a minimal
        requirement I could go serverless with Lambdas, or something like a
        Spring boot project if I forsee a larger footprint requirement.
      </p>
    </div>
  );
}
