import { useEffect, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

import 'C:/Users/jakka/OneDrive/Desktop/react/ReactFolder/src/portfolio/all_Styles.css';

import { FaAngleDoubleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


import fb from '/FarmerBazaar1.png'
import WorldWideCars from '/WorldWideCars.png'
import MazeCoinHunt from '/coinPro.jpg'
import Pro_Img_mcqTest from '/mcqTest.png'
import contactBook from '/contactBookPro1.png'
import Tic_Tac_Toe from '/Tic_Tac_Toe.png'


const Projects = ()=>{
  //  useEffect(() => {
  //   const cards = document.querySelectorAll(".Project_Div");
  //   cards.forEach((card) => {
  //     VanillaTilt.init(card, {
  //       max: 8,
  //       speed: 100, 
  //     }); 
  //   });
  // });
  const ProjectsData=[
    // {ProjectName:"ProjectName",ProjectImg:"ProjectImg",ProjectDescription:"ProjectDescription",ProjectTechnologies:[],ProjectKeyFeatures:[],ProjectCodeLink:"ProjectCodeLink",ProjectLiveLink:"ProjectLiveLink"},
    {ProjectName:"Farmer Bazaar (E-Commerce)",ProjectImg:fb,ProjectDescription:"A web application direct transactions between farmers and customers for fresh product.",ProjectTechnologies:["React", "Node.js", "MongoDB"],ProjectKeyFeatures:["Farmer Profile","Selling Prodects","Cart Functionality","Wishlist"],ProjectCodeLink:"https://github.com/JGopalaKrishna/Farmer_Bazaar",ProjectLiveLink:""},
    {ProjectName:"World Wide Cars",ProjectImg:WorldWideCars,ProjectDescription:"A web website showcasing detailed information about various car brands and models.",ProjectTechnologies:["HTML", "CSS", "JavaScript"],ProjectKeyFeatures:["All car Brands","Cart Functionality","Wishlist"],ProjectCodeLink:"https://github.com/JGopalaKrishna/WorldWideCars",ProjectLiveLink:"https://jgopalakrishna.github.io/WorldWideCars/"},
    {ProjectName:"Maze Coin Hunt",ProjectImg:MazeCoinHunt,ProjectDescription:"A simple catching a coins game.",ProjectTechnologies:["HTML", "CSS", "JavaScript"],ProjectKeyFeatures:["Interactive Maze Gameplay","Simple Controls","Responsive Design","Device Friendly"],ProjectCodeLink:"https://github.com/JGopalaKrishna/Maze_Coin_Hunt",ProjectLiveLink:"https://jgopalakrishna.github.io/Maze_Coin_Hunt/"},
    {ProjectName:"MCQ'S",ProjectImg:Pro_Img_mcqTest,ProjectDescription:"A GUI application for allowing users to practice multiple-choice questions with an interactive interface.",ProjectTechnologies:["Java", "JDBC"],ProjectKeyFeatures:["User Friendly","Gain Knowledge"],ProjectCodeLink:"https://github.com/JGopalaKrishna/MCQ_S",ProjectLiveLink:""},
    {ProjectName:"Contact Book",ProjectImg:contactBook,ProjectDescription:"A GUI application for managing contacts.",ProjectTechnologies:["Python", "Tkinter", "SQLite"],ProjectKeyFeatures:["CURD Opretions","Serching","User Friendly"],ProjectCodeLink:"https://github.com/JGopalaKrishna/Contact_Book",ProjectLiveLink:""},
    {ProjectName:"Tic-Tac-Toe",ProjectImg:Tic_Tac_Toe,ProjectDescription:"A simple Tic-Tac-Toe game.",ProjectTechnologies:["HTML", "CSS", "JavaScript"],ProjectKeyFeatures:["Interactive Interface","Score Tracking","Restart Functionality:"],ProjectCodeLink:"https://github.com/JGopalaKrishna/TIC_TAC_TOE",ProjectLiveLink:"https://jgopalakrishna.github.io/TIC_TAC_TOE/"},
  ]
  const [ProjectInfo,setProjectInfo]= useState();
  useEffect(() => {
    if (ProjectInfo) {
      document.body.classList.add("no-scroll"); // Disable scrolling
    } else {
      document.body.classList.remove("no-scroll"); // Enable scrolling
    }
  }, [ProjectInfo]);

  const [loadingStates, setLoadingStates] = useState(Array(ProjectsData.length).fill(true));

  const handleLoad = (index) => {
    setLoadingStates(prev => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };
  return(
    <main className='ProjectsPage' id='Projects'>
      <h1 className='SideHeading' style={{textAlign:"center"}}><span className='SideHeading_highLet'>P</span>rojects</h1>
       <section className='Projects_Place'>
        {
            ProjectsData.map((Data,index)=>{
            return(
              <div className="Project_Div" key={index} onClick={()=>{setProjectInfo(Data);}}>
                <div className="Project_Img">
                  {loadingStates[index] && (<div className="loading-overlay">Loading...</div>)}
                  <img src={Data.ProjectImg} style={{minHeight:"00%",minWidth:"00%",display: loadingStates[index] ? "none" : "block" }} onLoad={() => handleLoad(index)}/>
                </div>
                <div className="Project_Content">
                  <div className="Project_Name">{Data.ProjectName}</div>
                  <div className="Project_Description">{Data.ProjectDescription}</div>
                  <div className="Project_More">More <FaAngleDoubleRight className='Project_More_Icon'/></div>
                </div>
              </div>
            )
            })
        }
      </section>
      {ProjectInfo ?<ProjectDeatils data={ProjectInfo} closeDetails={() => setProjectInfo(null)} /> : <></>}
    </main>
  )
}
export default Projects;


const ProjectDeatils = (props)=>{
  var ProjectInfo = props.data;
  console.log(ProjectInfo);
  console.log(ProjectInfo["ProjectKeyFeatures"]);
  return(
    <section className='ProjectDeatils_Area'>
      <div className="ProjectDeatils_div">
        <div className="ProjectDeatils_Head">
        <div className="ProjectDeatils_Name">
          <h2 className='SideHeading' style={{margin:0}}><span className='SideHeading_highLet'>{ProjectInfo["ProjectName"]}</span></h2>
        </div>
        <div className="ProjectDeatils_Remove" onClick={props.closeDetails}><IoClose size={32} color='red' /></div>
        </div>
        <div className="ProjectDeatils_Image">
          <img src={ProjectInfo["ProjectImg"]} className='ProjectDeatils_Img'/>
        </div>
        <div className="ProjectDeatils_Content">
          <h2 className='SideHeading' style={{marginBottom:5,marginTop:10}}><span className='SideHeading_highLet'>T</span>echnologies</h2>    
          <div className="ProjectDeatils_Tech">
              {ProjectInfo["ProjectTechnologies"].map((data,index)=>{return <div className='ProjectDeatils_Tech_Name' key={index}>{data}</div>})}
          </div>
          <h2 className='SideHeading' style={{marginBottom:5,marginTop:10}}><span className='SideHeading_highLet'>K</span>ey <span className='SideHeading_highLet'>F</span>eatures</h2>          
          <div className="ProjectDeatils_Features">
              {ProjectInfo["ProjectKeyFeatures"].map((data,index)=>{return <li key={index}>{data}</li>})}
          </div>
          <div className="ProjectDeatils_Links">
            <a href={ProjectInfo["ProjectCodeLink"]} className="ProjectDeatils_Link shine_white_light">View Source Code</a>
            {ProjectInfo["ProjectLiveLink"]!= "" ?<a href={ProjectInfo["ProjectLiveLink"]} className="ProjectDeatils_Link shine_white_light">Live Demo</a> :<></>}
          </div>
        </div>
      </div>
    </section>
  )
}