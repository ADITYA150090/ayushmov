import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Timeline from "../../components/VideoTimeline/Timeline";
import { footageData } from "../../data/footageData";
import About from "../About/About";
import WhatIDo from "../Works/WhatIDo";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";

import "./Landing.css";

function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
    <section className="landing">

<video
  className="bg-video"
  autoPlay
  muted
  playsInline
  key={footageData[currentIndex].video}
  onEnded={() => {
    setCurrentIndex((prev) =>
      prev === footageData.length - 1
        ? 0
        : prev + 1
    );
  }}
>
        <source
          src={footageData[currentIndex].video}
          type="video/mp4"
        />
      </video>

      <div className="overlay" />

      <Navbar />

      <div className="guide-line" />
      <div className="cross-line" />

      <div className="hero-top">
        <h2>
          Cinematic Video Editor & Visual Storyteller
        </h2>

        <p>
          The personal portfolio of Ayush,
          exploring photography, film and editing.
        </p>
      </div>

      <h1 className="big-name">
        AYUSH MOV
      </h1>

      <Timeline
        footage={footageData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

    </section>
     <About />
     <WhatIDo />
     <Contact />
     <Footer/>
     </>
  );
}

export default Landing;