import AboutOne from "@/components/AboutOne/AboutOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import ThreeIconBox from "@/components/ThreeIconBox/ThreeIconBox";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <MainSlider />
      <ThreeIconBox />
      <DestinationsOne />
      <AboutOne />
      <WhyChoose />
      <NewsOne />
    </Layout>
  );
};

export default Home;
