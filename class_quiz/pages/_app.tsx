// import "../styles/globals.css";

import { globalStyles } from "../src/commons/styles/globalStyles";
import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}
