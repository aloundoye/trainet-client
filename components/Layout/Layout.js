import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";
import Head from "next/head";

function Layout(props) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
