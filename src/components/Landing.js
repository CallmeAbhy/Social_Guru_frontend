import React from 'react';

import './Footer.css';
import './Landing.css';
import { Link } from "react-router-dom";
import autoSlider from './Scripts/Landing'



const Landing = () => {
  return (
    <>

<div id="searchbar">
        <input id="searchInput" placeholder="What are you looking for?" />
        <div id="searchGlass">
            <i class='bx bx-search'></i>
        </div>
</div>

<div id="scrollSlider">
        <div class="getWidth sliderImg1">
            <div class="sliderContentBox">
                <div>
                    <h1>Get ahead. Get an Internship!</h1>
                </div>
                <div class="sliderCheckMark">
                    <img src="https://internshala.com/static/images/common/check_box_dark.svg" alt="" />
                    <p>10,000+ internships with stipend</p>
                </div>
                <div class="sliderCheckMark">
                    <img src="https://internshala.com/static/images/common/check_box_dark.svg" alt="" />
                    <p>100% verified</p>
                </div>
                <div class="sliderCheckMark">
                    <img src="https://internshala.com/static/images/common/check_box_dark.svg" alt="" />
                    <p>Apply for free</p>
                </div>
            </div>
        </div>
        <div class="getWidth sliderImg2">
            
        </div>
        <div className="getWidth sliderImg3">
            <div className="sliderContentBox">
            <div className="white-text">
                <h3>Introducing</h3>
            </div>
            <div className="white-text2 white-text">
                <h1>Fresher Job</h1>
                <span id="bgSpan">New</span>
            </div>
            <div className="white-text">
                    <h3>Apply to premium fresher jobs for free</h3>
                </div>
                <div class="sliderCheckMark white-text">
                    <img src="https://internshala.com/static/images/common/check_box_white.svg" alt="" />
                    <p>100% verified</p>
                </div>
                <div class="sliderCheckMark white-text">
                    <img src="https://internshala.com/static/images/common/check_box_white.svg" alt="" />
                    <p>Minimum CTC 3 LPA</p>
                </div>
                <div class="sliderCheckMark white-text">
                    <img src="https://internshala.com/static/images/common/check_box_white.svg" alt="" />
                    <p>Apply for free</p>
                </div>
            </div>
          
            
        </div>
        <div class="getWidth sliderImg4">
            
        </div>
        </div>

        <div id="login_modal_popup">

</div>

<div id="bigB">
        <div id="internships">
            <div class="headDiv">
                <div>
                    <h1 class="title">Internships</h1>
                    <p class="description">Apply to 10,000+ internships for free</p>
                </div>
                <div>
                    <div class="anchor">
                        <a href="#">View all internships &#8594;</a>
                    </div>
                </div>
            </div>
            <div>
                <div class="header">Popular cities</div>
                <div class="gridB">
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" />
                        <p >Work From Home</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg" />
                        <p >Delhi/NCR</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/bangalore.svg" />
                        <p>Bangalore</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/mumbai.svg" />
                        <p >Mumbai</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/hyderabad.svg" />
                        <p >Hyderabad</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/chennai.svg" />
                        <p >Chennai</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/kolkata.svg" />
                        <p >Kolkata</p>
                    </div>
                    <div class="getDatabaseValue">
                        <img src="https://internshala.com/static/images/home/internships/categories/international.svg" />
                        <p >International</p>
                    </div>
                </div>
            </div>
            <div>
            <div class="header">Popular categories</div>
            <div class="gridB">
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/part_time.svg" />
                    <p>Part time</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/engineering.svg" />
                    <p>Engineering</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/ngo.svg" />
                    <p>NGO</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/business_mba.svg" />
                    <p>MBA</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/design.svg" />
                    <p>Design</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/science.svg" />
                    <p>Science</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/media.svg" />
                    <p>Media</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/internships/categories/humanities.svg" />
                    <p>Humanities</p>
                </div>
            </div>
        </div>
    </div>
    <div id="internT">
        <div class="headDiv">
            <div>
                <div class="offers_75">
                    <h1 class="title">Social-Guru Trainings</h1>
                    <img src="https://internshala.com/cached_uploads/offer_tags/618b6119251e41636524313.png" alt="offers_75%" />
                </div>
                <p class="description">Learn new-age skills on the go</p>
            </div>
            <div>
                <div class="anchor">
                    <a href="/">View all trainings &#8594;</a>
                </div>
            </div>
        </div>
        <div>
            <div class="gridC">
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/programming_with_python.svg" />
                    <p>Programming <br /> with Python</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/digital_marketing.svg" />
                    <p>Digital <br /> Marketing</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/web_development.svg" />
                    <p>Web <br /> Development</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/machine_learning.svg" />
                    <p>Machine <br /> Learning</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/advanced_excel.svg" />
                    <p>Advanced Excel</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/programming_with_c_and_c++.svg" />
                    <p>C/C++ Programming</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/autocad.svg" />
                    <p>AutoCAD</p>
                </div>
                <div>
                    <img src="https://internshala.com/static/images/home/trainings/icons/data_science.svg" />
                    <p>Data Science</p>
                </div>
            </div>
        </div>
</div>
<div id="freshJ">
    <div class="headDiv">
        <div>
            <h1 class="title">Fresher Jobs <span id="bgSpan"><span id="new">New</span></span></h1>
            <p class="description">Premium fresher jobs on your fingertips</p>
        </div>
        <div>
            <div class="anchor">
                <a href="/">View all jobs &#8594;</a>
            </div>
        </div>
    </div>
    <div>
        <div id="gridD">
            <div>
                <img src="https://internshala.com/static/images/home/jobs/perks/ctc.svg" />
                <p>Minimum CTC of 3 LPA</p>
            </div>
            <div>
                <img src="https://internshala.com/static/images/home/jobs/perks/dream.svg" />
                <p>Dream companies</p>
            </div>
            <div>
                <img src="https://internshala.com/static/images/home/jobs/perks/verified.svg" />
                <p>100% verified jobs</p>
            </div>
        </div>
    </div>
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

    </>
  );
};
export default Landing;