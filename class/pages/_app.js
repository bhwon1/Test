import {ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

function MyApp({ Component, pageProps }) {
  
  console.log("qqqq")

  const client = new ApolloClient({
    uri : "http://practice.codebootcamp.co.kr/graphql" ,
    cache: new InMemoryCache() // 나중에 할것
  })
  
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )

}

export default MyApp