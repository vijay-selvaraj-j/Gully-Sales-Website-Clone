import React from 'react'
import Icon2 from '../../../images/hospital.png';
import Icon3 from '../../../images/banner.png';

import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesH3,
    ServicesH4,
    BtnLink,
    Btn,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP
} from './IndustryTags';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useHistory, useLocation } from 'react-router-dom';

const url = window.location.pathname;


const IndustryElements = () => {
  return (

   
    <ServicesContainer id="industry" >

        <Zoom duration={500}>
        <ServicesH1>Industry solutions from GullySales</ServicesH1>
        <ServicesH3>Unlock your business's full potential with our marketing & solution expertise. We craft innovative strategies that drive growth and success.

</ServicesH3>
</Zoom>
        <ServicesWrapper>
            
     
            <Fade left duration={1000} distance='150px'>
            <ServicesCard>
                <ServicesIcon src={Icon3} loading='lazy'/>
                <ServicesH2>Dental</ServicesH2>
                <ServicesP>
Our dental sales and marketing services will help you increase leads, improve your online presence, and grow your business.</ServicesP>
<Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            <Fade bottom duration={1000} distance='150px'>
            <ServicesCard to='about'>
                <ServicesIcon src={Icon2} loading='lazy'/>
                <ServicesH2>Hospital</ServicesH2>
                <ServicesP>Maximize your hospital's potential with our expert marketing & sales services. Increase patient engagement, drive website traffic and generate leads.</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            
        </ServicesWrapper>
        <Zoom duration={500}>
        <ServicesH4> Our team of experts will work closely with you to understand your unique business needs and develop a customized strategy that will help you achieve your goals. Whether you're looking to increase website traffic, boost sales, or establish yourself as a thought leader in your industry, we have the tools and expertise to help you succeed.</ServicesH4>
        </Zoom>
    </ServicesContainer>
  )
}

export default IndustryElements
