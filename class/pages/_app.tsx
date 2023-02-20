import "../styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
// const  {ApolloProvider, ApolloClient, InMemoryCache } = require('@apollo/client') // commonjs 옛날

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 나중에 할것
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
