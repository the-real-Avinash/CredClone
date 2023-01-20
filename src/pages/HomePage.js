import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import ProductShowCase from "../components/ProductShowcase";
import FeelSpecial from "../components/common/FeelSpecial";
import CredExperience from "../components/credExperience";
import CredSecurity from "../components/CredSecurity";
import BrandLove from "../components/BrandsLove";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandLove />
      <CredExperience />
      <div className="non-mobile">
        <WindowPeak />
      </div>

      <CredSecurity />
    </>
  );
};

export default HomePage;
