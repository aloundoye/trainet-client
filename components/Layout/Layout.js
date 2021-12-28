import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";
import Head from "next/head";

function Layout(props) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Trainet</title>
        <meta name="description" content="Trainet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
