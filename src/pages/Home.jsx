import React from "react";
import Navbar from "../components/NavBar";
import HeroHome from "../components/Home/HeroHome";
import FeatureHome from "../components/Home/FeatureHome";
import GalleryHome from "../components/Home/GalleryHome";
import TextIntro from "../components/Home/TextIntro";
import InfoImg from "../components/Home/InfoImg";
import Amenities from "../components/Home/Amenities";
import BloqueInfo from "../components/Home/BloqueInfo";
import Location from "../components/Home/Location";
import ScrollToTop from "../components/Home/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroHome />
        <BloqueInfo />
         <TextIntro />
         <InfoImg />
         <Amenities />
         <Location />
        <GalleryHome />
        <FeatureHome />
      </main>
      <ScrollToTop />
    </div>
  );
}
