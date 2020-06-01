import React from "react"
import Fade from 'react-reveal/Fade'

import Layout from "../components/Layout/";
import HomeCard from "../components/HomeCard/HomeCard"
import ContactCard from "../components/ContactCard/ContactCard"
import NavBar from "../components/NavBar/NavBar"
import BusinessPlanSVG from '../assets/images/business_plan.svg';
import DataProcessingSVG from '../assets/images/data_processing.svg';
import PitchingSVG from '../assets/images/pitching.svg';
import Logo from '../assets/images/logo.png';

export default () => (
  <Layout>
    <div className="home">
      <div className="home-card__banner-container">
        <img src={Logo} className="home-card__logo" />
      </div>
      {/*/<div className="home-card__navbar">
        <NavBar></NavBar>
      </div>*/}
      <div className="container">
        <Fade duration={1500} delay={200}>
          <HomeCard title="Mission Statement" graphic={BusinessPlanSVG} sectionId={1}>
            To provide a creative space for motivated students at the University of Virginia to craft data-driven solutions in response to challenges faced by organizations in the University and Charlottesville communities
          </HomeCard>
        </Fade>
        <Fade duration={1500} delay={200}>
          <HomeCard title="Vision" graphic={DataProcessingSVG} sectionId={2}>
            It is our belief at HooThinks that consulting, at its core, is the act of helping others to solve challenges in a structured manner.  We want to inspire generations of UVA students with this message, allowing them to use their creativity and unique talents to affect positive change in the University community, in Charlottesville, and beyond.
          </HomeCard>
        </Fade>
        <Fade duration={1500} delay={200}>
          <HomeCard title="Achieving Our Mission" graphic={PitchingSVG} sectionId={3}>
            In order for students to develop effective data-driven solutions, HooThinks Consulting teaches them how to leverage data analysis, design thinking, project management knowledge, and consulting techniques.
          </HomeCard>
        </Fade>
      </div>
      <ContactCard></ContactCard>
    </div>
  </Layout>
)