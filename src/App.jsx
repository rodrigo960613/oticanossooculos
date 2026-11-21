import React from "react";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Offers from "./components/Offers/Offers.jsx";
import Collection from "./components/Collection/Collection.jsx";
import Tour from "./components/Tour/Tour.jsx";
import Store from "./components/Store/Store.jsx";
import Steps from "./components/Steps/Steps.jsx";
import Cta from "./components/Cta/Cta.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Location from "./components/Location/Location.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll.js";

export default function App() {
  useSmoothScroll();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offers />
        <Collection />
        <Tour />
        <Store />
        <Steps />
        <Cta />
        <Faq />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
