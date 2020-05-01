import React from "react";
import Index from "../component/Index";
import Layout from "../component/Layout";
import { Helmet } from "react-helmet";

export default () => (
  <>
    <Helmet>
      <body id="bg-img" />
    </Helmet>
    <Layout title="Welcome To My Portfolio" />
    <Index />
  </>
);
