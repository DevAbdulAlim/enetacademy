import React, { Fragment } from "react";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Stats from "../../components/stats/Stats";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Stats />
      <Category />
      <Footer />
    </Fragment>
  );
}
