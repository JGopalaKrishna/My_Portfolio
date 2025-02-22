import './all_Styles.css';

import { SiGeeksforgeeks } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";


const About = ()=>{
  return(
    <>
    <main className='AboutPage' id='About'>
      <section className='AboutPage_part1 ComeFromLeft'>
        <div className='AboutPage_part1_MySelf'>
          <h1 className='SideHeading'><span className='SideHeading_highLet'>A</span>bout <span className='SideHeading_highLet'>M</span>e</h1>
          <div className='AboutPage_part1_MySelf_Matter'>
            A passionate Full-Stack Developer, Machine Learning Enthusiast, and Competitive Programmer. I thrive on solving complex problems, optimizing performance, and building scalable applications.
            {/* <br/> */}
            {/* <br/> */}
            With expertise in React, Node.js, Python, Java, and MongoDB, I have worked on multiple projects, including web applications, mobile apps, and machine learning models. My dedication to continuous learning keeps me updated with the latest tech trends.
          </div>
        </div>
        {/* <div className='AboutPage_part1_MyEducation'>
          <h1 className='SideHeading'><span className='SideHeading_highLet'>E</span>ducation</h1>
          <div style={{paddingLeft:"10px"}}><tr><td>🎓</td><th>B.Tech </th>:<td> Aditya College of Engineering and Technology 2022 - 2026</td></tr></div>
        </div> */}
        {/* <div className='AboutPage_part1_ProfessionalProfiles'>
          <h1 className='SideHeading'><span className='SideHeading_highLet'>P</span>rofessional <span className='SideHeading_highLet'>P</span>rofiles</h1>
          <div className="AboutPage_part1_ProfessionalProfiles_Icons" style={{paddingLeft:"10px"}}>
            <a href='mailto:jakkakrishna2003@gmail.com' className='For_Icons'>                                   <MdEmail    size={40} color='#02b5b1' /> <br/> <span className='SideHeading_highLet'>E</span>mail     </a>
            <a href='https://github.com/JGopalaKrishna/' className='For_Icons'>                           <FaGithub   size={40} color='#02b5b1' /> <br/> <span className='SideHeading_highLet'>G</span>itHub    </a>
            <a href='https://www.linkedin.com/in/gopala-krishna-jakka-294a3b2a6/' className='For_Icons'>  <FaLinkedin size={40} color='#02b5b1' /> <br/> <span className='SideHeading_highLet'>L</span>inkedIn  </a>
          </div>
        </div> */}
        <div className='AboutPage_part2_WhatiDo'>
          <h1 className='SideHeading'><span className='SideHeading_highLet'>M</span>y <span className='SideHeading_highLet'>E</span>xpertise</h1>
          <div className='List_of_My_Expertise'>
            <div className='single_Expertise'>
              <div className='single_Expertise_Heading'>🚀 Full-Stack Development :</div><div className='single_Expertise_Contant'>Creating seamless web and mobile applications.</div>
            </div>
            <div className='single_Expertise'>
              <div className='single_Expertise_Heading'>🤖 Machine Learning & AI :</div><div className='single_Expertise_Contant'>Explore AI/ML concepts with a focus on potential real-world applications.</div>
            </div>
            <div className='single_Expertise'>
              <div className='single_Expertise_Heading'>🎯 Competitive_Programming :</div><div className='single_Expertise_Contant'>Practice coding challenges on platforms like Geeksforgeeks, LeetCode, CodeChef, and HackerRank.</div>
            </div>
            {/* <div className='single_Expertise'>
              <div className='single_Expertise_Heading'>☁️ Cloud & DevOps :</div><div className='single_Expertise_Contant'>Deploying scalable apps on AWS & Google Cloud.</div>
            </div> */}
          </div>
        </div>

      </section>
      <section className='AboutPage_part2 ComeFromRight'>
        <div className='AboutPage_part1_MyEducation'>
          <h1 className='SideHeading'><span className='SideHeading_highLet'>E</span>ducation</h1>
          <div style={{paddingLeft:"10px"}}><div><div style={{fontWeight:"bold"}}>🎓B.Tech in Computer Science & Engineering (AI & ML) </div><div> Aditya College of Engineering and Technology | 2022 - 2026</div></div></div>
        </div>
        {/* <div className='AboutPage_part2_WhatiDo'>
          <h1 className='SideHeading'><span className='SideHeading_highLet'>M</span>y <span className='SideHeading_highLet'>E</span>xpertise</h1>
          <div className='List_of_My_Expertise'>
            <div className='single_Expertise'>
              <div className='single_Expertise_Heading'>🚀 Full-Stack Development :</div><div className='single_Expertise_Contant'>Creating seamless web and mobile applications.</div>
            </div>
            <div className='single_Expertise'>
              <div className='single_Expertise_Heading'>🤖 Machine Learning & AI :</div><div className='single_Expertise_Contant'>Developing intelligent models for real-world applications.</div>
            </div>
            <div className='single_Expertise'>
              <div className='single_Expertise_Heading'>🎯 Competitive_Programming :</div><div className='single_Expertise_Contant'>Solving algorithmic challenges on Geeksforgeeks, LeetCode & HackerRank.</div>
            </div>
            <div className='single_Expertise'>
              <div className='single_Expertise_Heading'>☁️ Cloud & DevOps :</div><div className='single_Expertise_Contant'>Deploying scalable apps on AWS & Google Cloud.</div>
            </div>
          </div>
        </div> */}
        <div className='AboutPage_part1_ProfessionalProfiles'>
          <h1 className='SideHeading'><span className='SideHeading_highLet'>C</span>oding <span className='SideHeading_highLet'>P</span>rofiles</h1>
          <div className="AboutPage_part2_CodingProfiles_Icons" style={{paddingLeft:"10px"}}>
            <a href='https://leetcode.com/u/gopala_4296/' className='For_Icons'>                  <SiLeetcode      size={40} color='#02b5b1' /> <br/> <span className='SideHeading_highLet'>L</span>eetCode   </a>
            <a href='https://www.hackerrank.com/profile/jakkakrishna2003' className='For_Icons'>  <FaHackerrank    size={40} color='#02b5b1' /> <br/> <span className='SideHeading_highLet'>H</span>ackerRank    </a>
            <a href='https://www.geeksforgeeks.org/user/jakkakrismmj7/' className='For_Icons'>    <SiGeeksforgeeks size={40} color='#02b5b1' /> <br/> <span className='SideHeading_highLet'>G</span>eeksForGeeks     </a>
            <a href='https://www.codechef.com/users/gopala_4296/' className='For_Icons'>                  <SiCodechef      size={40} color='#02b5b1' /> <br/> <span className='SideHeading_highLet'>C</span>odeChef   </a>
          </div>
        </div>
        <div className='AboutPage_part2_My Vision'>
          <h1 className='SideHeading'><span className='SideHeading_highLet'>M</span>y <span className='SideHeading_highLet'>V</span>ision</h1>
          <div style={{paddingLeft:"10px"}}>I aim to bridge the gap between technology and real-world applications, leveraging my skills to create impactful solutions.</div>
        </div>
      </section>
    </main>
    </>
  )
}

export default About;