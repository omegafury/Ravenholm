import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "components/layout/Layout";
import { ContextProvider } from "components/ContextProvider";
import PageTransition from "components/PageTransition";
import "util/fontAwesome";
import "styles/global.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-typist/dist/Typist.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ContextProvider>
      <Layout {...pageProps}>
        <PageTransition
          timeout={300}
          loadingTimeout={{
            enter: 400,
            exit: 0,
          }}
          loadingClassNames="loading-indicator"
          classNames="page-transition"
        >
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </Layout>
    </ContextProvider>
  );
}

export default App;
