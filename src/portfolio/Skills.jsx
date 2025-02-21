import React, { useState, useEffect } from 'react';
import 'C:/Users/jakka/OneDrive/Desktop/react/ReactFolder/src/portfolio/all_Styles.css';
// import './Skills.css';

const imageSources = [
  { id: "C_Logo", src: "/C_Logo.png" },
  { id: "Python_Logo", src: "/Python_Logo.png" },
  { id: "Java_Logo", src: "/Java_Logo.png" },
  { id: "JavaScript_Logo", src: "/JavaScript_Logo.png" },
  { id: "R_Logo", src: "/R_Logo.png" },
  { id: "React_Logo", src: "/React_Logo.png" },
  { id: "Express_Logo", src: "/Express_Logo.png" },
  { id: "NodeJS_Logo", src: "/NodeJS_Logo.png" },
  { id: "ReactNative_Logo", src: "/ReactNative_Logo.png" },
  { id: "NextJS_Logo", src: "/NextJS_Logo.png" },
  { id: "Sql_Logo", src: "/Sql_Logo.png" },
  { id: "mongoDB_Logo", src: "/mongoDB_Logo.png" },
  { id: "GitHub_Logo", src: "/GitHub_Logo.png" },
  { id: "VScode_Logo", src: "/VScode_Logo.png" },
  { id: "IntelliJ_Logo", src: "/IntelliJ_Logo.png" },
  { id: "Spyder_Logo", src: "/Spyder_Logo.png" }
];

const Skills = () => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    imageSources.forEach(({ id, src }) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
      };
    });
  }, []);

  return (
    <main className='SkillsPage' id='Skills'>
      <h1 className='SideHeading' style={{ textAlign: "center" }}>
        <span className='SideHeading_highLet'>S</span>kills
      </h1>
      <section className='Skills_Place'>
        
        {/* Languages */}
        <div className='Skills_Place_part ComeFromLeft'>
          <h2 className='SideHeading'><span className='SideHeading_highLet'>L</span>anguages</h2>
          <div className='Skills_Images'>
            {["C_Logo", "Python_Logo", "Java_Logo", "JavaScript_Logo", "R_Logo"].map((id) => (
              <div className="Skill_Img" key={id}>
                {!loadedImages[id] && <div className="loading-overlay">Loading...</div>}
                {loadedImages[id] && <img className='Logo_IMg' src={`/${id}.png`} alt={id.replace("_", " ")} style={{height:"100%",width:"100%"}} />}
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="Skills_Place_part ComeFromRight">
          <h2 className='SideHeading'><span className='SideHeading_highLet'>F</span>rameworks</h2>
          <div className='Skills_Images'>
            {["React_Logo", "Express_Logo", "NodeJS_Logo", "ReactNative_Logo", "NextJS_Logo"].map((id) => (
              <div className="Skill_Img" key={id}>
                {!loadedImages[id] && <div className="loading-overlay">Loading...</div>}
                {loadedImages[id] && <img className='Logo_IMg' src={`/${id}.png`} alt={id.replace("_", " ")} style={{height:"100%",width:"100%"}} />}
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="Skills_Place_part ComeFromLeft">
          <h2 className='SideHeading'><span className='SideHeading_highLet'>D</span>atabases</h2>
          <div className='Skills_Images'>
            {["Sql_Logo", "mongoDB_Logo"].map((id) => (
              <div className="Skill_Img" key={id}>
                {!loadedImages[id] && <div className="loading-overlay">Loading...</div>}
                {loadedImages[id] && <img className='Logo_IMg' src={`/${id}.png`} alt={id.replace("_", " ")} style={{height:"100%",width:"100%"}}/>}
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="Skills_Place_part ComeFromRight">
          <h2 className='SideHeading'><span className='SideHeading_highLet'>T</span>ools</h2>
          <div className='Skills_Images'>
            {["GitHub_Logo", "VScode_Logo", "IntelliJ_Logo", "Spyder_Logo"].map((id) => (
              <div className="Skill_Img" key={id}>
                {!loadedImages[id] && <div className="loading-overlay">Loading...</div>}
                {loadedImages[id] && <img className='Logo_IMg' src={`/${id}.png`} alt={id.replace("_", " ")} style={{height:"100%",width:"100%"}} />}
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
};

export default Skills;
