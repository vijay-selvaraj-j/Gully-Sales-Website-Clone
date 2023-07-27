import React from 'react'
import Icon1 from '../../../images/graphic-design.png';
import Icon2 from '../../../images/digital-marketing.png';
import Icon3 from '../../../images/content-writing.png';
import Icon4 from '../../../images/sales-strategy.png';
import Icon5 from '../../../images/lead-generation.png';
import Icon6 from '../../../images/sales-training.png';
import Icon7 from '../../../images/sales-coaching.png';
import Icon8 from '../../../images/channel-sales.png';
import Fade from 'react-reveal/Fade';

import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,
    BtnLink,
    Btn,
    ServicesH3
} from './SecTwoTags';
import Zoom from 'react-reveal/Zoom';


const SectionTwo = () => {
  return (
    <ServicesContainer id="services" >
        <Zoom duration={500} distance='150px'>
        <ServicesH1>Marketing and Sales Services</ServicesH1>
        <ServicesH2>At GullySales, we understand that a strong sales and marketing strategy is essential for business success. That's why we offer a wide range of services to help businesses of all sizes reach their goals. Whether you need help with branding, digital marketing, sales training, lead generation or more, our team of experts has the skills and experience to help you succeed.
Here is a complete list of the sales and marketing services we can provide to our customers:</ServicesH2>
</Zoom>
        <ServicesWrapper>
            
     
            <Fade left duration={1000} distance='150px'>
            <ServicesCard>
                <ServicesIcon src={Icon1} loading='lazy'/>
                <ServicesH3>Graphic Design</ServicesH3>
                <ServicesP>Get high-quality, creative and effective graphic design services to help businesses stand out in a crowded market</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            <Fade top duration={1000} distance='150px' >
            <ServicesCard to='about'>
                <ServicesIcon src={Icon2} loading='lazy'/>
                <ServicesH3>Digital Marketing</ServicesH3>
                <ServicesP>From social media management to email marketing campaigns, we provide a range of digital marketing services to help you reach a wider audience.</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            <Fade bottom duration={1000} distance='150px'>
            <ServicesCard>
                <ServicesIcon src={Icon3} loading='lazy'/>
                <ServicesH3>Content Writing</ServicesH3>
                <ServicesP>We create compelling, engaging content that will help you build a strong relationship with your target audience.</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            <Fade right duration={1000} distance='150px'>
            <ServicesCard>
                <ServicesIcon src={Icon4} loading='lazy'/>
                <ServicesH3>Sales Strategy</ServicesH3>
                <ServicesP>We work with you to create a comprehensive sales strategy that will help you reach your target audience and close more deals.</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            <Fade left duration={1000} distance='150px'>
            <ServicesCard>
                <ServicesIcon src={Icon5} loading='lazy'/>
                <ServicesH3>Lead Generation</ServicesH3>
                <ServicesP>Get proven results with GullySales expert lead generation services. Personalized approach and data-driven insights for your business.</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            <Fade bottom duration={1000} distance='150px'>
            <ServicesCard to='about'>
                <ServicesIcon src={Icon6} loading='lazy'/>
                <ServicesH3>Sales Training</ServicesH3>
                <ServicesP>We provide training and support to help your sales team develop the skills and knowledge they need to close more deals and grow your business.</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            <Fade bottom duration={1000} distance='150px'>
            <ServicesCard>
                <ServicesIcon src={Icon7} loading='lazy'/>
                <ServicesH3>Sales Coaching</ServicesH3>
                <ServicesP>We provide one-on-one coaching and support to help your sales team reach their full potential.</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            <Fade right duration={1000} distance='150px'>
            <ServicesCard>
                <ServicesIcon src={Icon8} loading='lazy'/>
                <ServicesH3>Channel Sales</ServicesH3>
                <ServicesP>We help you track your sales data and performance so that you can make informed decisions about your sales strategy.</ServicesP>
                <Btn>
                    <BtnLink to="/">Learn More</BtnLink>
                </Btn>
            </ServicesCard>
            </Fade>
            
        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default SectionTwo
