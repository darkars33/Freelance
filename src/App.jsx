import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SmoothScroll from "./component/SmoothScroll";


gsap.registerPlugin(ScrollTrigger);

const ScrollColorChange = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".section");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to("body", { backgroundColor: section.dataset.bgColor, duration: 1 }),
        onEnterBack: () => gsap.to("body", { backgroundColor: section.dataset.bgColor, duration: 1 }),
      });
    });
  }, []);

  useEffect(() =>{
    gsap.to(".box", {
      x:500,
      duration:2,
      delay:1,
      color:"red",
    })
  },[])

  return (

    <SmoothScroll>
      <div>
        <div className="section" data-bg-color="#f9e1ee" style={{ height: "100vh" }}>
          <h1>Section 1</h1>
        </div>
        <div className="section" data-bg-color="#e0f0ff" style={{ height: "100vh" }}>
          <h1>Section 2</h1>
        </div>
        <div className="section" data-bg-color="#ffeddf" style={{ height: "100vh" }}>
          <h1>Section 3</h1>
        </div>

        {/* <div className="box w-[400px] h-[400px] bg-red-500">

        </div> */}
      </div>
    </SmoothScroll>

  );
};

export default ScrollColorChange;
