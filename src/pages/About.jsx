import React from "react";
import './About.css'
import profilePic from '../assets/lumiq-india-office.jpg'; // Import the image

export const About = () => {
    return(
        <div className="upc">
            <div className="gradient"></div>
            <div className="profile-down">
                {/* Use the imported image variable */}
                <img src={profilePic} alt="Profile Pic" /> 
                <div className="Profile-title">Lumiq</div>
                <div className="profile-description">
                LUMIQ is an end-to-end Data Transformation Partner for modern financial services and insurance (FSI) companies, helping them build the Right Data DNA  which powers their competitive edge and future growth. 

We are building a community of passionate data professionals who thrive on experimentation and complexity exploration.   

                </div>
                <div className="profile-button"><a href="https://lumiq.ai/">Contact Me</a></div>
            </div>
        </div>
    )
}
