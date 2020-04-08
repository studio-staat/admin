import ApolloProvider, { client } from "../providers/apollo";
import Head from "next/head";
import "../style/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="fontawesome/css/all.css" rel="stylesheet" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
