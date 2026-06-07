import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const mouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.2,
      });

      gsap.to(dotRef.current, {
        scale: 0.7,
        duration: 0.2,
      });
    };

    const mouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });

      gsap.to(dotRef.current, {
        scale: 1,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
  <div className="axis axis-x" />
  <div className="axis axis-y" />

  <div ref={dotRef} className="target-cursor-dot" />

  <div className="target-cursor-corner corner-tl" />
  <div className="target-cursor-corner corner-tr" />
  <div className="target-cursor-corner corner-br" />
  <div className="target-cursor-corner corner-bl" />
</div>
  );
}

export default Cursor;