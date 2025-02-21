import { useEffect, useRef } from "react";
import 'C:/Users/jakka/OneDrive/Desktop/react/ReactFolder/src/portfolio/all_Styles.css';

const MouseAnimation = ()=>{
    const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.pageX - 20}px`;
        cursorRef.current.style.top = `${e.pageY - 20}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);
  return(
    <div ref={cursorRef} className="custom_cursor"><div className="dot_cursor"></div></div>
    
  )
}
export default MouseAnimation;