import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import effezzientLogo from "../assets/images/eff_logo.png"
import ibdsfaLogo from "../assets/images/ibdsfa_logo.png"
import dragonLogo from "../assets/images/dragon_logo.png"
import kidsDashboardLogo from "../assets/images/kids_dashboard_logo.png"
import SMSMLogo from "../assets/images/smsm_logo.png"
import RadioTunerLogo from "../assets/images/radio_tuner_logo.png"
import GujResLogo from "../assets/images/guj_res_logo.png"
import OthersLogo from "../assets/images/others_logo.png"

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=app.effezient&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><img src={effezzientLogo} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://play.google.com/store/apps/details?id=app.effezient&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><h2>Effezzient</h2></a>
                <p>Developed and maintained a mobile app for managing leads, sales funnel, team tasks, and customer support. Features include daily attendance tracking, check-in/check-out using Google Location APIs, expense management, and a branded service & spare app for field teams. Built using Android (Java/Kotlin).</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.meril.ibdsfa&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><img src={ibdsfaLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.meril.ibdsfa&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><h2>IBD SFA</h2></a>
                <p>An internal mobile app for seamless international expense tracking, approval, and reporting for employees across global locations.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.ibl.dragonapp&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><img src={dragonLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.ibl.dragonapp&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><h2>DRAGON: Special Ed</h2></a>
                <p>DRAGON allows for an agency teacher to keep track of their sessions with students on a real-time basis so that it can be uploaded to NY DOE in a timely and accurate basis.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.tabnova.aidashboard&hl=en_US" target="_blank" rel="noreferrer"><img src={kidsDashboardLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.tabnova.aidashboard&hl=en_US" target="_blank" rel="noreferrer"><h2>Kids Dashboard</h2></a>
                <p>Contributed to the development of a Kids Dashboard Parental Control app, ensuring a secure and customizable digital environment for children, all within an intuitive Android interface.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.tabnova.classroomapp&hl=en_US" target="_blank" rel="noreferrer"><img src={SMSMLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.tabnova.classroomapp&hl=en_US" target="_blank" rel="noreferrer"><h2>Samsung Classroom Management</h2></a>
                <p>Collaborated on the Samsung Classroom Management app, empowering educators with a robust Android toolset for classroom organization and student engagement.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.radiotuner&hl=en" target="_blank" rel="noreferrer"><img src={RadioTunerLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.radiotuner&hl=en" target="_blank" rel="noreferrer"><h2>Radio Tuner: Online AM FM - Apps on Google Play</h2></a>
                <p>Enhanced the UI of a radio tuner app, delivering a visually appealing and intuitive interface that elevated the user experience.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.gujaratirecipes&hl=en" target="_blank" rel="noreferrer"><img src={GujResLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://play.google.com/store/apps/details?id=com.gujaratirecipes&hl=en" target="_blank" rel="noreferrer"><h2>All Recipes in Gujarati - Apps on Google Play</h2></a>
                <p>Contributed to the creation of a user-friendly Gujarati recipe app, helping users explore and share traditional dishes while preserving cultural heritage.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={OthersLogo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Others</h2></a>
                <p>Sportolic: A sports news app inspired by Inshorts, delivering curated sports updates with integrated real-time chat for user engagement.</p>

                <p>GoSport: A team-building and sports turf booking platform with features like team creation, ground reservations, online payments, and real-time chat for coordination.</p>

                <p>Appointment Booking Apps: Developed scheduling apps for customers and admin panels, including booking, calendar management, and notification systems.</p>

                <p>E-commerce Applications: Built online shopping apps with payment gateway integration and real-time order tracking.</p>

                <p>Integrated online payments using PayUMoney, Stripe, Razorpay, PayPal, and more.</p>

                <p>Used various Firebase products like Realtime Database, Cloud Storage, FCM notifications, and Authentication to power dynamic, scalable features across apps.</p>
            </div>
        
        </div>
    </div>
    );
}

export default Project;