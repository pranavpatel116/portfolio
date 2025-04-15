import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faAndroid, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "Java",
    "Kotlin",
    "Android SDK",
    "XML Layouts",
    "Room Database",
    "Retrofit / OkHttp",
    "LiveData & ViewModel (MVVM)",
    "Firebase (Auth, Firestore, Push Notifications)",
    "Git & GitHub",
    "Dart",
    "Provider",
    "Custom UI"
];

const labelsSecond = [
    "React Native (JavaScript/TypeScript)",
    "Redux / Context API",
    "React Navigation",
    "Native Modules & Linking",
    "REST APIs & Axios",
    "Firebase Integration",
    "Git & GitHub",

];

const labelsThird = [
    "Node.js",
    "REST API basics",
    "Docker & Docker Compose",
    "Postman for API testing",
    "Git & GitHub",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Mobile Application Development</h3>
                    <p>Over 6 years of experience building high-quality mobile apps. 5+ years with Android (Java/Kotlin) and 1 year with Flutter. Skilled in clean architecture, modern UI frameworks, REST API integration, and Firebase services to deliver robust, scalable, and user-friendly applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>React Native Development</h3>
                    <p>Experienced in building cross-platform mobile apps using React Native with a focus on performance, reusable components, and smooth native integrations. Skilled in bridging native modules, managing state, and working across both Android and iOS platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Backend & DevOps (Basic Proficiency)</h3>
                    <p>Familiar with building lightweight backend services using Node.js and managing containerized environments with Docker. Capable of setting up REST APIs, working with Express, and creating Dockerfiles for development and deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;