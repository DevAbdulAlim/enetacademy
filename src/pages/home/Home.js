import React, { Fragment } from "react";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Stats from "../../components/stats/Stats";
import Course from "../../components/course/Course";
import Faq from "../../components/faq/Faq";
import Feature from "../../components/feature/Feature";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Stats />
      <Category />
      <Course />
      <Feature />
      <Faq />
      <Footer />
    </Fragment>
  );
}
