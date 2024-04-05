import React, { useState, useEffect } from "react";
import News from "../../components/home/news/News";
import Reviews from "../../components/home/reviews/Reviews";
import Index from "../../components/home/HeroSection/Index";
import TopEvents from "../../components/home/topevents/TopEvents";
import FeatureEvents from "../../components/home/feature/FeatureEvents";
import Loader from "../../components/loader/Loader";

export default function Home() {

  // 

  return (
    <>
      <Index />
      <TopEvents />
      <FeatureEvents />
      <Reviews />
      <News />
    </>
  );
}
