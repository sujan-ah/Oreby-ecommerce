import React from "react";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Banner from "../components/layout/Banner";
import Advertise from "../components/layout/Advertise";
import NewArrivals from "../components/layout/NewArrivals";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrivals />
    </>
  );
};

export default Home;
