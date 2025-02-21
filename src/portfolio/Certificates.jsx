import 'C:/Users/jakka/OneDrive/Desktop/react/ReactFolder/src/portfolio/all_Styles.css';
import { LiaCertificateSolid } from "react-icons/lia";


const Certificates = ()=>{
  const CertificatesData =[
    // {CertificateName:"CertificateName",CertificateCompanyName:"CertificateCompanyName",CertificateId:"CertificateId",CertificateIssued:"CertificateIssued",CertificateLink:"CertificateLink"},
    {CertificateName:" AI Fundamentals",CertificateCompanyName:"Microsoft Azure",CertificateId:"v4ux-DwW2",CertificateIssued:"April, 2024",CertificateLink:"https://drive.google.com/file/d/1Vb8YRxYDGoTvXIdIxJ4LZf5pyEHkb7Hl/view?usp=drive_link"},
    {CertificateName:"JAVA IT Specialist.",CertificateCompanyName:"Pearson Vue",CertificateId:"5LJK-4wbh",CertificateIssued:"July, 2024",CertificateLink:"https://drive.google.com/file/d/1dSIKa3FlAkcsr5a8b7aivHkQKe2QMoJk/view?usp=drive_link"},
    {CertificateName:"JavaScript",CertificateCompanyName:"HackerRank",CertificateId:"DE5DC12CEEOO",CertificateIssued:"Sep, 2024",CertificateLink:"https://www.hackerrank.com/certificates/de5dc12dee00"},
    {CertificateName:"Python",CertificateCompanyName:"HackerRank",CertificateId:"8F985BB4DF05",CertificateIssued:"Mar, 2024",CertificateLink:"https://www.hackerrank.com/certificates/8f985bb4df05"},
    {CertificateName:"HTML",CertificateCompanyName:"SoloLearn",CertificateId:"CC-IA2613RQ",CertificateIssued:"Aug, 2024",CertificateLink:"CertificateLink"},
    {CertificateName:"CSS",CertificateCompanyName:"SoloLearn",CertificateId:"CC-XYEB7DRO",CertificateIssued:"Sep, 2024",CertificateLink:"CertificateLink"},
    {CertificateName:"Java",CertificateCompanyName:"CodeChef",CertificateId:"42b4528",CertificateIssued:"Aug, 2023",CertificateLink:"CertificateLink"},
    {CertificateName:"Python for Problem Solving-1",CertificateCompanyName:"CodeChef",CertificateId:"e5ddf87",CertificateIssued:"Aug, 2023",CertificateLink:"CertificateLink"},
    {CertificateName:"Python",CertificateCompanyName:"CodeChef",CertificateId:"3ca33e2",CertificateIssued:"Aug, 2023",CertificateLink:"CertificateLink"},
    // {CertificateName:"CertificateName",CertificateCompanyName:"CertificateCompanyName",CertificateId:"CertificateId",CertificateIssued:"CertificateIssued",CertificateLink:"CertificateLink"},

  ]
  return(
    <main className='CertificatesPage' id='Certificates'>
      <h1 className='SideHeading' style={{textAlign:"center"}}><span className='SideHeading_highLet'>C</span>ertificates</h1>
      <section className='Certificates_Place'>
       {
        CertificatesData.map((data,index)=>{
          return(
            <div className="Certificate_div" key={index}>
              <div className="Certificate_Icon"><LiaCertificateSolid size={35}/></div>
              <div className="Certificate_Content">
                <div className="Certificate_Name">{data.CertificateName}</div>
                <div className="Certificate_Issuer">{data.CertificateCompanyName}</div>
                <div className="Certificate_Data">
                  <div className="Certificate_Date">Issued: {data.CertificateIssued}</div>
                  <div className="Certificate_Id">ID: {data.CertificateId}</div>
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
export default Certificates;