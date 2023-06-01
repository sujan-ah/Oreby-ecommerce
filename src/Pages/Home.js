import React from "react";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Banner from "../components/layout/Banner";
import Advertise from "../components/layout/Advertise";
import NewArrivals from "../components/layout/NewArrivals";
import Bestsellers from "../components/layout/Bestsellers";
import MiddleAdvertise from "../components/layout/MiddleAdvertise";
import Offers from "../components/layout/Offers";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrivals />
      <Bestsellers />
      <MiddleAdvertise />
      <Offers />
      <Footer />
    </>
  );
};

export default Home;
