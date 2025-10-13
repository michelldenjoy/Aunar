import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroHome from '../components/Home/HeroHome'
import FeatureHome from '../components/Home/FeatureHome'
import GalleryHome from '../components/Home/GalleryHome'



export default function Home() {
  return (
<div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroHome />
        <GalleryHome />
        <FeatureHome />
      </main>
      <Footer />
    </div>
  )
}
