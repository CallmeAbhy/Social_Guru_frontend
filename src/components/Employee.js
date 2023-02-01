import React from 'react';
import './Employee.css';
import './Footer.css';
const Employee = () => {
  return (
    <div>
      <div id="regStd1">
        <div id="poster1">
            <div>
                <div>A <span>free</span> ride to your dream career</div>
                <h3>Register and apply to 10000+ opportunities</h3>
                <div class="cat">
                    <img src="https://internshala.com/static/images/common/check_box.svg" />
                    <h4>Internships</h4>
                </div>
                <div class="cat">
                    <img src="https://internshala.com/static/images/common/check_box.svg " />
                    <h4>Fresher jobs</h4>
                </div>
                <div class="cat">
                    <img src="https://internshala.com/static/images/common/check_box.svg" />
                    <h4>Work from home jobs</h4>
                </div>
            </div>
        </div>
        <div id="signupSec1">
            <div id="signupDiv1">
                <div class="textCenter1" id="signGoogle">
                    <img src="https://internshala.com/static/images/login/google_logo.png" />
                    <h4>Sign Up with Google</h4>
                </div>
                <div id="horStroke">

                </div>
                <div class="textCenter1" id="opt">
                    <p>OR</p>
                </div>
                <form onsubmit="signup(event)">
                    <div class="details1">
                        <label>Email</label>
                        <input placeholder="vivek@example.com"/>
                    </div>
                    <div class="details1">
                        <label>Password</label>
                        <input placeholder="Must be at least 6 characters" type="password"/>
                    </div>
                    <div id="name1">
                        <div class="details1">
                            <label>First Name</label>
                            <input placeholder="Vivek"/>
                        </div>
                        <div class="details1">
                            <label>Last Name</label>
                            <input placeholder="Sharma"/>
                        </div>
                    </div>
                    <p id="tc1">By signing up, you agree to our <span>Terms and Conditions</span>.</p>
                    <button class="textCenter1" type="submit">Sign up</button>
                </form>
                <p id="msg_regStudent">Already registered? <span>Login</span></p>
            </div>
        </div>
    </div>
<div></div>
<div></div>
<div></div>
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

export default Employee
