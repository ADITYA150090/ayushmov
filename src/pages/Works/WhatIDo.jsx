import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhatIDo.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Video Editing",
  "FPV Drone Cinematography",
  "Photography",
  "Content Creation",
];

function WhatIDo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".services-label", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".services-title", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".service-row", {
        opacity: 0,
        x: -150,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 75%",
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="services-section"
      id="services"
    >
      <div className="services-label">
        (Services)
      </div>

      <h2 className="services-title">
        What I do
      </h2>

      <div className="services-list">
        {services.map((item, index) => (
       <div
       className="service-row"
       onMouseEnter={() =>
         document.body.classList.add(
           "cursor-expand"
         )
       }
       onMouseLeave={() =>
         document.body.classList.remove(
           "cursor-expand"
         )
       }
     >
            <div className="service-number">
              #{String(index + 1).padStart(2, "0")}
            </div>

            <div className="service-name">
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatIDo;