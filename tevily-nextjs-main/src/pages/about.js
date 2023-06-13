import AboutPage from "@/components/AboutPage/AboutPage";
import BookNow from "@/components/BookNow/BookNow";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import Information from "@/components/Information/Information";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About">
      <PageHeader title="About" outerPage="Pages" />
      <AboutPage />
      <Information />
      <BookNow />
    </Layout>
  );
};

export default About;
