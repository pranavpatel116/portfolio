import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sr. Mobile Application Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Inspiro Infotech</h4>
            <p>
            Experienced in building native and cross-platform mobile apps using Android (Java/Kotlin), React Native, with basic backend skills in Node.js and Docker.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sr. Mobile Application Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sarvadhi Solutions Pvt. Ltd</h4>
            <p>
            Evolved from a Senior Android Developer to a versatile cross-platform specialist, proficient in React Native and Flutter, and dedicated to designing impactful educational and social apps for enhanced user engagement.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sr. Android Application Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sassy Infotech Pvt. Ltd</h4>
            <p>
            Progressed from a Junior Android Developer to a Senior role, with expertise in crafting online shopping apps, system-level utilities, and innovative social apps, demonstrating adaptability and a deep understanding of mobile development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Android Application Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">MacyMind Pvt. Ltd</h4>
            <p>
            Started as a Junior Android Developer, honing skills by working on radio tuner and Gujarati recipe apps, and eventually growing into a proficient Android developer with a diverse portfolio of app contributions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;