import 'C:/Users/jakka/OneDrive/Desktop/react/ReactFolder/src/portfolio/all_Styles.css';
import React_Logo from '/React_Logo.png'
import ReactNative_Logo from '/ReactNative_Logo.png'
import JavaScript_Logo from '/JavaScript_Logo.png'
import NodeJS_Logo from '/NodeJS_Logo.png'
import Python_Logo from '/Python_Logo.png'
import Java_Logo from '/Java_Logo.png'
import Sql_Logo from '/Sql_Logo.png'
import mongoDB_Logo from '/mongoDB_Logo.png'

const Skills = ()=>{
  const SkillsData=[
    {Skill_ImgUrl:React_Logo,Skill_Name:"React",Skill_Value:90},
    {Skill_ImgUrl:JavaScript_Logo,Skill_Name:"JavaScript",Skill_Value:80},
    {Skill_ImgUrl:Python_Logo,Skill_Name:"Python",Skill_Value:80},
    {Skill_ImgUrl:NodeJS_Logo,Skill_Name:"Node.js",Skill_Value:80},
    {Skill_ImgUrl:mongoDB_Logo,Skill_Name:"MongoDB",Skill_Value:80},
    {Skill_ImgUrl:Sql_Logo,Skill_Name:"SQL",Skill_Value:70},
    {Skill_ImgUrl:Java_Logo,Skill_Name:"Java",Skill_Value:70},
    {Skill_ImgUrl:ReactNative_Logo,Skill_Name:"ReactNative",Skill_Value:70},
  ]
  return(
    <main className='SkillsPage' id='Skills'>
      <h1 className='SideHeading' style={{textAlign:"center"}}><span className='SideHeading_highLet'>S</span>kills</h1>
      <section className='Skills_Place'>
        {
          SkillsData.map((Data,index)=>{
            return(
              <div className='Skill_Div' key={index}>
                <div className="Skill_Img">
                  <img src={Data.Skill_ImgUrl} style={{height:"100%",width:"100%"}}/>
                </div>
                <div className="Skill_Content">
                    <div className="Skill_Content_Matter">
                      <div className="Skill_Name">{Data.Skill_Name}</div>
                      <div className="Skill_Value" style={{paddingRight:"20px"}}>{Data.Skill_Value}%</div>
                    </div>
                    <div className="Skill_Content_Persentage">
                      <div className="Skill_Content_Persentage_Fill" style={{width:Data.Skill_Value+"%"}}></div>
                    </div>
                </div>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Skills;