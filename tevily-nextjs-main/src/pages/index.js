import AboutOne from "@/components/AboutOne/AboutOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import PopularTours from "@/components/PopularTours/PopularTours";
import TeamOne from "@/components/TeamOne/TeamOne";
import VideoOne from "@/components/VideoOne/VideoOne";
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
      <PopularTours />
      <VideoOne />
      <BrandOne />
      <WhyChoose />
      <NewsOne />
    </Layout>
  );
};

export default Home;
