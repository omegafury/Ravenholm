import { AppProps } from "next/app";
import React from "react";
import Layout from "components/layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
