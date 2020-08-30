import React from "react";
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
import Typist from "react-typist";

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
  const descriptors = ["Software Engineer"];
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
          }}
        >
          <Typist cursor={{ show: false }}>
            <div
              style={{
                display: "grid",
                gridTemplateAreas: `"name"
                                "descriptor"`,
              }}
            >
              <span
                style={{
                  gridArea: "name",
                  textAlign: "center",
                  width: "350px",
                }}
              >
                Andrew Poe
              </span>
              <Typist.Delay ms={1000} />
              {descriptors.map((descriptor, index) => {
                const returnArray = [
                  <span
                    key={"descriptor" + index}
                    style={{ gridArea: "descriptor", justifySelf: "center" }}
                  >
                    &nbsp;{descriptor}&nbsp;
                  </span>,
                ];
                if (index + 1 < descriptors.length) {
                  returnArray.push(
                    <Typist.Backspace
                      key={"typist" + index}
                      count={descriptor.length + 1}
                      delay={1000}
                    />
                  );
                }
                return returnArray;
              })}
            </div>
          </Typist>
        </div>
        <VoronoiMutator />
      </div>
    </>
  );
}
