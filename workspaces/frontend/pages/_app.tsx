import { AppProps } from "next/app";
import React from "react";
import Layout from "components/Layout";
import { ContextProvider } from "components/ContextProvider";
import "styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default App;
