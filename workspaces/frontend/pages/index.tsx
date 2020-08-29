import Head from "next/head";
import utilStyles from "styles/utils.module.css";
import { getSortedPostsData } from "util/posts";
import Link from "next/link";
import Date from "components/Date";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  InferGetStaticPropsType,
} from "next";
import VoronoiStippling from "components/VoronoiStippling";
import VoronoiMutator from "components/VoronoiMutator";

const siteTitle = "Next.js Sample Website";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div
        style={{
          height: "inherit",
          display: "grid",
          gridTemplateAreas: `"mainBody"`,
        }}
      >
        {/* <VoronoiStippling /> */}
        <div
          style={{
            gridArea: "mainBody",
            justifySelf: "center",
            alignSelf: "center",
            fontSize: "2em",
            zIndex: 2,
            fontWeight: "bolder",
          }}
        >
          Andrew Poe
        </div>
        <VoronoiMutator />
      </div>
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
}
