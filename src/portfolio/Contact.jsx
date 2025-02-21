import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";
import { MdScheduleSend } from "react-icons/md";
import { BsFillSendXFill } from "react-icons/bs";
import { BsFillSendCheckFill } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [Print,setPrint]=useState(["Send",<BsFillSendFill size={20} style={{color:"white"}}/>])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Stops page navigation
    try{
      setPrint(["Loading...",<MdScheduleSend size={20} style={{color:"white"}}/>])
    const response = await fetch("https://formspree.io/f/mwpvreyv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    
    if(!response.ok){
      setPrint(["Fail",<BsFillSendXFill size={20} style={{color:"white"}}/>]);
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    alert("Sended Successfully!");
    setPrint(["Sent",<BsFillSendCheckFill size={20} style={{color:"white"}}/>]);
    setTimeout(() => { setPrint(["Sent",<BsFillSendFill size={20} style={{color:"white"}}/>])}, 5000);
  
    e.target.reset();
  }catch (err){
    alert(`Submission failed: ${err.message}`);
  }
  };

  return(
    <main className="ContactPage" id="Contact">
      <h1 className='SideHeading' style={{textAlign:"center"}}><span className='SideHeading_highLet'>C</span>ontact</h1>
      <section className="Contact_Info ComeFromLeft">
        <div className="Contact_Info_div">
            <div className="connectHeading">Let's Connect</div>
            <a href="mailto:jakkakrishna2003@gmail.com"  className="connectData">
              <div><CiMail size={20} style={{color:"#02b5b1"}}/></div>
              <div>jakkakrishna2003@gmail.com</div>
            </a>
            <a href="tel:+91 7780693599" className="connectData">
              <div><BsTelephone size={20} style={{color:"#02b5b1"}}/></div>
              <div>+91 7780693599</div>
            </a>
            <a href="https://maps.app.goo.gl/PqKJ5zzUfFyqyU6u5" className="connectData">
              <div><SlLocationPin size={20} style={{color:"#02b5b1"}}/></div>
              <div>Kakinada, Andhra Pradesh, INDIA</div>
            </a>
            <a href="https://www.linkedin.com/in/gopala-krishna-jakka-294a3b2a6/" className="connectData">
              <div><AiOutlineLinkedin size={20} style={{color:"#02b5b1"}}/></div>
              <div>Linked In</div>
            </a>
            <a href="https://github.com/JGopalaKrishna" className="connectData">
              <div><FiGithub size={20} style={{color:"#02b5b1"}}/></div>
              <div>Git Hub</div>
            </a>
        </div>
        <div className="Contact_Form ComeFromRight">
          <form onSubmit={handleSubmit} className="ComeFromRight">
            <div className="Contact_Form_Label">Name</div>
            <input type="text" name="name" required onChange={handleChange}  className="Contact_Form_Input" />
            <div className="Contact_Form_Label">Email</div>
            <input type="email" name="email" required onChange={handleChange} className="Contact_Form_Input" />
            <div className="Contact_Form_Label">Message</div>
            <textarea name="message" required onChange={handleChange} className="Contact_Form_Input"></textarea>
            <button type="submit" className="Contact_Form_Button shine_white_light">{Print[0]} {Print[1]}</button>
          </form>
        </div>
      </section>
    </main>

  );
};

export default Contact;