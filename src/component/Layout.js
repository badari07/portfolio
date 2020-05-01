import React from "react";
import { Helmet } from "react-helmet";
import "../../scss/main.scss";
import Header from "../component/Header";

export default ({childrens,title}) => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous"
      />
      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link rel="stylesheet" type="text/css" href="/assets/main.css" />
      <title>{title}</title>
    </Helmet>
    <Header />
  </>
);