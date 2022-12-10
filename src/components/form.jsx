import react from 'react';
import { useState } from 'react'
const FORM=()=>{
  const [datahandle, setdatahandle] = useState('');
  const [name, setName] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [branch, setbranch] = useState('');
  const [Gender,setgender] = useState('');
  const [Course,setcourse] = useState('');
  const [Graduation,setGraduation] = useState('');
  const [Domain,setdomain] = useState('');
  const [otherclub,setotherclub] = useState('');
  const [aboutme,setaboutme] = useState('');
  const [whyjoin,setwhyjoin] = useState('');
  const [ProgrammingLanguages,setProgrammingLanguages] = useState('');
  const [ProgrammingProficiency,setProgrammingProficiency] = useState('');
  const [ProblemSolvingRate,setProblemSolvingRate] = useState('');
  const [live,setlive] = useState('');
  const [Stayafter5pm,setStayafter5pm] = useState('');
  const [wantContentorGraphics,setwantContentorGraphics] = useState('');
  const [ContentorGraphics,setContentorGraphics] = useState('');
  const [projects,setprojects] = useState('');
  const [Contentlist,setContentlist] = useState('');
  const [graphiclist,setGraphiclist] = useState('');
  const [whyme,setwhyme] = useState('');

const NameHandler=(event)=>{
    setName(event.target.value);
}
const MobileHandler=(event)=>{
  setmobile(event.target.value);
}
const EmailHandler=(event)=>{
  setemail(event.target.value);
}
const GenderHandler=(event)=>{
  setgender(event.target.value);
}
const CourseHandler=(event)=>{
  setcourse(event.target.value);
}
const BranchHandler=(event)=>{
  setbranch(event.target.value);
}
const GraduationHandler=(event)=>{
  setGraduation(event.target.value);
}
const DomainHandler=(event)=>{
  setdomain(event.target.value);
}
const ClubsHandler=(event)=>{
  setotherclub(event.target.value);
}
const AboutmeHandler=(event)=>{
  setaboutme(event.target.value);
}
const whyjoinHandler=(event)=>{
  setwhyjoin(event.target.value);
}
const ProgramingHandler=(event)=>{
  setProgrammingLanguages(event.target.value);
}
const ProficiencyHandler=(event)=>{
  setProgrammingProficiency(event.target.value);
}
const ProblemHandler=(event)=>{
  setProblemSolvingRate(event.target.value);
}
const LiveHandler=(event)=>{
  setlive(event.target.value);
}
const After5Handler=(event)=>{
  setStayafter5pm(event.target.value);
}
const wantconHandler=(event)=>{
  setwantContentorGraphics(event.target.value);
}
const contentHandler=(event)=>{
  setContentorGraphics(event.target.value);
}
const ProjectHandler=(event)=>{
  setprojects(event.target.value);
}
const GraphicslinksHandler=(event)=>{
  setGraphiclist(event.target.value);
}
const ContentlinksHandler=(event)=>{
  setContentlist(event.target.value);
}
const whymeHandler=(event)=>{
  setwhyme(event.target.value);
}
const FormHandler= async (event)=>{
  event.preventDefault();
  
   console.log(name,email,mobile,whyme);
  
  
  try{
    const response= await fetch("https://v1.nocodeapi.com/tushar2024cs1028/google_sheets/NNqJUyDUqFvoqWqE?tabId=Sheet1",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",

      },
      body:JSON.stringify([[name,mobile,email,Gender,Course,branch,Graduation,Domain,otherclub,aboutme,whyjoin,ProgrammingLanguages,ProgrammingProficiency,ProblemSolvingRate,live,Stayafter5pm,wantContentorGraphics,ContentorGraphics,projects,graphiclist,Contentlist,whyme],]),

    });
    await response.json();
    /*{setdatahandle();}*/
    
  }
  catch(err){
     console.log(err);
}
    setName("");
    setmobile("");
    setemail("");
    setgender("");
    setcourse("");
    setbranch("");
    setGraduation("");
    setdomain("");
    setotherclub("");
    setaboutme("");
    setwhyjoin("");
    setProgrammingLanguages("");
    setProgrammingProficiency("");
    setProblemSolvingRate("");
    setlive("");
    setStayafter5pm("");
    setwantContentorGraphics("");
    setContentorGraphics("");
    setprojects("");
    setGraphiclist("");
    setContentlist("");
    setwhyme("");
}





    return (
      
        <div className="container mt-4">
          <div className="container font">
          
            <p><h2 style={{textAlign:"center"}}>Registrations</h2><br></br>
We offer our members with four domains to work on, namely:<br></br>
      1.Artificial Intelligence/Machine Learning<br></br>
      2. Development<br></br>
      3. Augmented and Virtual Reality<br></br>
      4. Cyber Security<br></br>
You can apply for any ONE of these domains of your liking.<br></br><br></br>

Apart from this you can also apply for 'Domain Specific Recruitment' in the domains of :<br></br>
    a. Graphics <br></br>
    b. Content Writing<br></br>

NOTE: <br></br>
 1. In MYCIN the recruitments are open ONLY for the students of 2nd year.<br></br>
 2. For Domain Specific Recruitment you will have to submit your work beforehand in order to be considered.<br></br>
 3. For Technical Domains there will be coding contest in round 2 after registrations. </p>

          <div className="modal-body">
               <form onSubmit={FormHandler}>

                   
                   

                    <div className="form-row">
                         <div className="form-group col-md-6">
                              <label for="Name">Name</label>
                              <input type="text" className="form-control innerfont" name="Name" value={name} placeholder="Enter Name" required onChange={NameHandler}/>
                         </div>
                         <div className="form-group col-md-6">
                              <label for="inputPassword4">Mobile No.</label>
                              <input type="phone" className="form-control innerfont" name="user_phone"  value={mobile} placeholder="Enter 10-digit Mobile no." maxLength="10" required onChange={MobileHandler}/>
                         </div>
                    </div>


                    


                    <div className="form-row" >
                         <div className="form-group col-md-6">
                              <label for="email" style={{color: "red"}}>Email Id</label>
                              <input type="email" className="form-control innerfont" name="user_email"  value={email} placeholder="Enter Email id" required onChange={EmailHandler}/>
                         </div>
                         
                         <div className="form-group col-md-6">
                              <label for="Gender">Gender</label>
                              <select id="Gender" name="user_gender" className="form-control innerfont"  value={Gender} required onChange={GenderHandler}>
                                   <option selected>Choose...</option>
                                   <option value="Male">Male</option>
                                   <option value="Female">Female</option>
                                   <option valuye="other">Other</option>
                              </select>
                         </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group col-md-4">
                              <label for="Course">Course</label>
                              <select name="Course" className="form-control innerfont"  value={Course} required onChange={CourseHandler}>
                                   <option selected>Choose...</option>
                                   <option value="BTECH">B.TECH</option>
                                   <option value="MCA">MCA</option>
                                   <option value="B.PHARMA">B.PHARMA</option>
                                   <option value="M.TECH">M.TECH</option>
                                   <option value="MCA">MCA</option>
                              </select>
                         </div>
                         
                         <div className="form-group col-md-4">
                              <label for="Branch">Branch</label>
                              <select name="Branch" className="form-control innerfont" value={branch} required onChange={BranchHandler}>
                                   <option selected>Choose...</option>
                                   <option value="CSE">CSE</option>
                                   <option value="CS">CS</option>
                                   <option value="IT">IT</option>
                                   <option value="CSIT">CSIT</option>
                                   <option value="CSAI">CSAI</option>
                                   <option value="CSME">CSME</option>
                                   <option value="EC">EC</option>
                                   <option value="EN">EN</option>
                                   <option value="MECHANICAl">MECHANICAL</option>
                                   <option value="CIVIL">CIVIL</option>
                                   <option value="B.PHARMA">B.PHARMA</option>
                                   <option value="MBA">MBA</option>
                                   
                              </select>
                         </div>
                         <div className="form-group col-md-4">
                              <label for="Graduation">Year of Graduation</label>
                              <select name="Graduation" className="form-control innerfont" value={Graduation} required onChange={GraduationHandler}>
                                   <option selected>Choose...</option>
                                   <option value="2025">2025</option>
                                   <option value="2026">2026</option>
                                   
                              </select>
                         </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                              <label for="Domain">Team of your prefrence</label>
                              <select name="Domain" className="form-control innerfont" value={Domain} required onChange={DomainHandler}>
                                   <option selected>Choose...</option>
                                   <option value="ArtificialX (AI and ML Domain)">ArtificialX (AI and ML Domain)</option>
                                   <option value="CodeBrewers (Web and Android Development)">CodeBrewers (Web and Android Development)</option>
                                   <option value="VR FLY (Augmented Reality and Virtual Reality)">VR FLY (Augmented Reality and Virtual Reality)</option>
                                   <option value="Eagles Cyber Squad (Cyber Security)">Eagles Cyber Squad (Cyber Security)</option>

                                   
                              </select>
                         </div>
                         <div className="form-group col-md-6">
                              <label for="Other_Clubs">Other Clubs you're a part of?</label>
                              <select name="Other_Clubs" className="form-control innerfont"  value={otherclub} required onChange={ClubsHandler}>
                                   <option selected>Choose...</option>
                                   <option value="yes">Yes</option>
                                   <option value="No">No</option>
                              </select>
                         </div>     
                    </div>
                    <div className="form-group">
                         <label for="Aboutme">Tell us about yourself?</label>
                         <textarea className="form-control innerfont" name="Aboutme" rows="3"  value={aboutme} required onChange={AboutmeHandler}></textarea>
                    </div>
                    <div className="form-group">
                         <label for="Why_do_you_want_to_join_this_club">Why do you want to join this club?</label>
                         <textarea className="form-control innerfont" name="Why_do_you_want_to_join_this_club"  value={whyjoin} rows="3" required onChange={whyjoinHandler}></textarea>
                    </div>
                    


                    <div className="form-group">
                         <label for="Programming_Languages">What Programming languages do you know?</label>
                         <input type="text" className="form-control innerfont" name="Programming_Languages"  value={ProgrammingLanguages} placeholder="C/C++/python etc" required onChange={ProgramingHandler}/>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                              <label for="Programming_Proficiency">How proficient are you in programming?</label>
                              <select name="Programming_Proficiency" className="form-control innerfont"  value={ProgrammingProficiency}required onChange={ProficiencyHandler}>
                                   <option selected>Choose...</option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   <option value="4">4</option>
                                   <option value="5">5</option>
                              </select>
                         </div>
                         <div className="form-group col-md-6">
                              <label for="Problem_Solving_Rate">How would you rate your reasoning and problem solving skills?</label>
                              <select name="Problem_Solving_Rate" className="form-control innerfont" value={ProblemSolvingRate} required onChange={ProblemHandler}>
                                   <option selected>Choose...</option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                   <option value="4">4</option>
                                   <option value="5">5</option>
                              </select>
                         </div>   
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                              <label for="Live">Where do you stay?</label>
                              <select name="Live" className="form-control innerfont"  value={live} required onChange={LiveHandler}>
                                   <option selected>Choose...</option>
                                   <option value="Hostler">Hostler</option>
                                   <option value="Day Scholar">Day Scholar</option>
                              </select>
                         </div>
                         
                         <div className="form-group col-md-6">
                              <label for="Stay_after_5pm">Can you stay after 5 PM?</label>
                              <select name="Stay_after_5pm" className="form-control innerfont"  value={Stayafter5pm} required onChange={After5Handler}>
                                   <option selected>Choose...</option>
                                   <option value="YES">YES</option>
                                   <option value="NO">NO</option>
                                   <option value="MAYBE">MAYBE</option>
                              </select>
                         </div>
                         
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                              <label for="want_Content_or_Graphics">Do you also want to Apply in the Graphics or Content domain?</label>
                              <select name="want_Content_or_Graphics" className="form-control innerfont" value={wantContentorGraphics} required onChange={wantconHandler}>
                                   <option selected>Choose...</option>
                                   <option value="YES">YES</option>
                                   <option value="NO">NO</option>
                                   
                              </select>
                         </div>
                         <div className="form-group col-md-6">
                              <label for="Content_or_Graphics">If yes? Choose your domain</label>
                              <select name="Content_or_Graphics" className="form-control innerfont" value={ContentorGraphics} onChange={contentHandler}>
                                   <option selected>Choose...</option>
                                   <option value="Graphics">Graphics</option>
                                   <option value="Content Writing">Content Writing</option>
                              </select>
                         </div>     
                    
                    </div>
                    <div className="form-group">
                         <label for="Projects">GitHub Link(s) to projects made by you.
(Paste ONLY link to your projects, if you don't have then just write NA. Writing anything else is not permissible)</label>
                         <textarea className="form-control innerfont" name="Projects" rows="2" value={projects} required onChange={ProjectHandler}></textarea>
                    </div>
                    <div className="form-group">
                         <label for="Graphics_Links">For Graphics give link for at least 10 different designs made by you.
<br></br>NOTE: Copying canva template is not permissible</label>
                         <textarea className="form-control innerfont" name="Graphics_Links" rows="2" value={graphiclist} onChange={GraphicslinksHandler}></textarea>
                    </div>
                    <div className="form-group">
                         <label for="Content_Links">For Content Writing Domain, give link for at least 10 different short stories, articles, essays, poems, etc written by you </label>
                         <textarea className="form-control innerfont" name="Content_Links" rows="2"  value={Contentlist}onChange={ContentlinksHandler}></textarea>
                    </div>
                    <div className="form-group">
                         <label for="Why_me">Why should we consider you?</label>
                         <textarea className="form-control innerfont" name="Why_me" rows="2" value={whyme} required  onChange={whymeHandler}></textarea>
                    </div>

                    <input type="submit" name="submit" className="btn btn-info btn-large" value="Submit"></input>
                     

               </form>
          </div>
          
     </div>

          
          
        </div>    
    );
}
export default FORM;