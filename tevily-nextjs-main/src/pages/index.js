import AboutOne from "@/components/AboutOne/AboutOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import ThreeIconBox from "@/components/ThreeIconBox/ThreeIconBox";
import React from "react";
import VideoTwo from "@/components/VideoTwo/VideoTwo";
import CounterOne from "@/components/CounterOne/CounterOne";
import NewsTwo from "@/components/NewsTwo/NewsTwo";
import BookNow from "@/components/BookNow/BookNow";
import TourTypes from "@/components/TourTypes/TourTypes";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <MainSlider />
      <ThreeIconBox />
      <AboutOne />
      <TourTypes />
      <VideoTwo />
      <CounterOne />
      <DestinationsOne />
      <BookNow />
      <NewsTwo />
    </Layout>
  );
};

export default Home;
