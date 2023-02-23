// import "../styles/globals.css";
// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"; // API 설정할떄 필요한 것
// const  {ApolloProvider, ApolloClient, InMemoryCache } = require('@apollo/client') // commonjs 옛날
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import "antd/dist/antd";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp;
