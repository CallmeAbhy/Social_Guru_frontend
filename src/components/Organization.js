import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Footer.css';

import './Organization.css';
import {Button, Modal, Form } from 'react-bootstrap';
import Demo from './Demo';
const Organization  = () => {

const [organizationname, setOrganizationname ] = useState("");
const [sector, setSector] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [phonenumber, setPhonenumber] = useState("");
const history= useHistory();
async function signUp(){
    let item = {organizationname, sector, email, password, firstname, lastname, phonenumber}
    console.warn(item)

    let result = await fetch("http://34.205.65.36:4000/client", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }

    })
    result = await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("/add")
}
  return (
    <div>
         
        
        <div id="regStd">
            <div id="poster">
                <div>
                    <div class="white-text">Hire the best interns</div>
                    <h3>Register and post your internship for free now!</h3>
                    <h4>12 Mn+ internships seekers from 30,000+ colleges across India</h4>
                </div>
            </div>
            <div id="signupSec">
                <div id="signupDiv">
                    <form onsubmit="signup(event)">
                    <div class="details1">
                            <label>Company Name</label>
                            <input placeholder="Kutumb Aspiration" value={ organizationname } onChange={(e) => setOrganizationname(e.target.value)} />
                        </div>
                        <div class="details1">
                            <label>Sector</label>
                            <input placeholder="Education" value={ sector } onChange={(e) => setSector(e.target.value)} />
                        </div>
                        
                        <div class="details1">
                            <label>Official Email Id</label>
                            <input placeholder="name@company_name.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="details1">
                            <label>Password</label>
                            <input placeholder="Minimum 6 characters" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div id="name">
                            <div class="details1">
                                <label>First Name</label>
                                <input placeholder="Your First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div class="details1">
                                <label>Last Name</label>
                                <input placeholder="Your Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                            </div>
                        </div>
                        <div class="details2">
                            <label>Mobile Number</label><br/>
                            <input value="+91" id="code"/>
                            <input type="number" placeholder="10 digit mobile number" id="mob" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                        </div>
                        <p id="tc">By signing up, you agree to our <span>Terms and Conditions</span>.</p>
                      
                        <Demo />
                    </form>
                    <p id="msg_regEmployer"><span>Have a question?</span></p>
                </div>
            </div>
        </div>
        <h1 class="textCenter">Hire interns in 3 simple steps</h1>
        <div id="stepsToFollow">
            <div class="steps">
                <img src="https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/1_register.png"/>
                <h3 class="textCenter">1. Register</h3>
                <p class="textCenter">Get started by creating your account</p>
            </div>
            <div class="steps">
                <img src="https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/2_post.png"/>
                <h3 class="textCenter">2. Post</h3>
                <p class="textCenter">Post internships for any profile and location</p>
            </div>
            <div class="steps">
                <img src="https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/3_hire.png"/>
                <h3 class="textCenter">3. Hire</h3>
                <p class="textCenter">Screen and hire using our world class ATS</p>
            </div>
        </div>
        <h1 class="textCenter" id="noOfComp">2,84,686 companies trust us</h1>
        <button class="textCenter" id="regBtn">Register Now</button>
        <div id="knowMore">
            <div>
                <h2>Now also post fresher jobs on Internshala</h2>
                <h6>Hire the best freshers <span>faster</span></h6>
                <div class="textCenter">Know More</div>
            </div>
        </div>
        
<section id="footer">
<div id="footer_pageLinks">
<div>
        <h5>Internships by places</h5>
        <div>Internship in India</div>
        <div>Internship in Delhi</div>
        <div>Internship in Bangalore</div>
        <div>Internship in Hyderabad</div>
        <div>Internship in Mumbai</div>
        <div>Internship in Chennai</div>
        <div>Internship in Gurgaon</div>
        <div>Internship in Kolkata</div>
        <div>Virtual internship</div>
    </div>
    <div>
        <h5>Internship by Stream</h5>
        <div>Computer Science Internship</div>
        <div>Electronics Internship</div>
        <div>Mechanical Internship</div>
        <div>Civil Internship</div>
        <div>Marketing Internship</div>
        <div>Chemical Internship</div>
        <div>Finance Internship</div>
        <div>Summer Research Fellowship</div>
        <div>Campus Ambassador Program</div>
    </div>
    <div>
        <h5 id='sectionTitle'>Online Trainings&nbsp;&nbsp;<span>OFFER</span></h5>
        <div>Programming with Python</div>
        <div>Digital Marketing</div>
        <div>Web Development</div>
        <div>Machine Learning</div>
        <div>Advanced Excel</div>
        <div>Ethical Hacking</div>
        <div>AutoCAD</div>
        <div>Creative Writing</div>
        <div>Data Science</div>
    </div>
    <div>
        <h5>About Social-Gurus</h5>
        <div>About us</div>
        <div>We're hiring</div>
        <div>Hire interns for your company</div>
        <div>Team Diary</div>
        <div>Blog</div>
        <div>Our Services</div>
        <div>Terms & Conditions</div>
        <div>Privacy</div>
        <div>Contact us</div>
    </div>
</div>
<hr />
<div id="social">

    <div>
        <div className="playStore">
        <i class='bx bxl-play-store'></i>
            <span>Get Android App</span>
        </div>
        <div className="icon-color">
        <i class='bx bxl-instagram'  ></i>
            <i class='bx bxl-twitter'></i>
            <i class='bx bxl-youtube'></i>
            <i class='bx bxl-linkedin'></i>
        </div>
    </div>
    <div>
    <i class='bx bx-copyright' id="crIcon"></i>
        <p id='cpRight'>Copyright 2023 Social-Gurus</p>
    </div>
</div>
</section>
    </div>
    
  )

}


export default Organization
