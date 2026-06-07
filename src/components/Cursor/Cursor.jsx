import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const mouseDown = () => {
      gsap.to(cursor, {
        scale: 0.7,
        duration: 0.2,
      });
    };

    const mouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
    />
  );
}

export default Cursor;