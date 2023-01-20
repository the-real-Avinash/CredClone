import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import ProductShowCase from "../components/ProductShowcase";
import FeelSpecial from "../components/common/FeelSpecial";
import CredExperience from "../components/credExperience";
import CredSecurity from "../components/CredSecurity";
import BrandLove from "../components/BrandsLove";
import WindowPeak from "../components/WindowPeak";
import MobileScroll from "../components/MobileScroll";
import CredStory from "../components/CredStory";
import AppRating from "../components/AppRating";
import Footer from "../common/styles/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>

      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
