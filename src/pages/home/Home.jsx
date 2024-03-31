import React, { useState, useEffect } from "react";
import News from "../../components/home/news/News";
import Reviews from "../../components/home/reviews/Reviews";
import Index from "../../components/home/HeroSection/Index";
import TopEvents from "../../components/home/topevents/TopEvents";
import FeatureEvents from "../../components/home/feature/FeatureEvents";
import Loader from "../../components/loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
          setLoading(false);
        }, 3000);
   
    // const measureLoadingTime = () => {
    //   const { domContentLoadedEventEnd, loadEventEnd } = window.performance.timing;
    //   const loadingTime = loadEventEnd - domContentLoadedEventEnd; // Calculate loading time
    //   console.log("time:", loadingTime)
    //   // Set the loading time as the timeout duration
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, loadingTime);
    // };

    // Check if the performance timing information is available
    // if (window.performance && window.performance.timing) {
    //   measureLoadingTime();
    // } else {
    //   // Fallback to a default loading time if performance timing information is not available
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 5000); // Default loading time: 5 seconds
    // }
  }, []);

  // if (loading) {
  //   return <Loader />; // Display the Loader component while loading
  // }

  return (
    <>
    {loading &&  <Loader />}
      <Index />
      <TopEvents />
      <FeatureEvents />
      <Reviews />
      <News />
    </>
  );
}
