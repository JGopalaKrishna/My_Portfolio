import './all_Styles.css';
import JGK_Profile from '/JGK_Profile.jpg'
const Home = ()=>{
  return(
    <header className='HomePage' id='Home'>
      <section className='HomePage_Contant ComeFromLeft'>
        {/* <div className='HomePage_Contant_N'>I'm <span className='HomePage_Contant_Name'>Gopala Krishna Jakka</span></div> */}
        <div className="wrapper">
            <div className="static-txt">I'm a</div>
            <ul className="dynamic-txts">
            <li className="liTag"><span className="spanTag">Full-Stack Developer</span></li>
            <li className="liTag"><span className="spanTag">Problem Solver</span></li>
            <li className="liTag"><span className="spanTag">Machine Learning Enthusiast</span></li>
            <li className="liTag"><span className="spanTag">Software Developer</span></li>
            </ul>
        </div>
        <div className='HomePage_Contant_Matter'>A dedicated developer with expertise in full-stack development, machine learning, and competitive programming. Passionate about continuous learning and building high-performance applications.</div>
        <div className='HomePage_Contant_Buttons'>
          <a href="https://drive.google.com/file/d/146n9G0Ib1SPR6P0vglSzOBRcclg4Tfl7/view" target="_blank"><div className='HomePage_Contant_Button1'>View Resume</div></a>
          <a href="https://drive.google.com/uc?export=download&id=146n9G0Ib1SPR6P0vglSzOBRcclg4Tfl7" download><div className='HomePage_Contant_Button2 shine_white_light'>Download Resume</div></a>
        </div>
      </section>
      <section className='HomePage_Image ComeFromRight'>
        <img  src={JGK_Profile} className='HomePage_Image-1'/>
      </section>

    </header>
  )
}

export default Home;