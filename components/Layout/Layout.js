import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/components/Layout.module.css";
import Head from "next/head";

function Layout(props) {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default Layout;
