import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
