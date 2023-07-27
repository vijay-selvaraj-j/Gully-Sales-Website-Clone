import React from 'react'
import Zoom from 'react-reveal/Zoom';
import {
    InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, Img, ImgWrap} from './SecOneTags';
import Fade from 'react-reveal/Fade';


const SectionOne = ({
    lightBg, id, to, imgStart, topLine, lightText, headLine, darkText, description, description1, description2, description3, img, alt, primary,
    dark,
    dark2,
    lightTop
}) => {
  return (
   <>
   <InfoContainer lightBg = {lightBg} id={id}>
    <InfoWrapper>
    <Zoom duration={500}>
        <InfoRow imgStart = {imgStart}>
            <Column1>
                <TextWrapper>
                    <TopLine lightTop={lightTop}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <Subtitle darkText={darkText}>{description1}</Subtitle>
                    <Subtitle darkText={darkText}>{description2}</Subtitle>
                    <Subtitle darkText={darkText}>{description3}</Subtitle>
                </TextWrapper>
            </Column1>
            <Column2>
                <ImgWrap>
                <Fade left duration={1000} distance='150px'>
                      <Img src={img} loading='lazy' alt={alt}/>
                      </Fade> 
                </ImgWrap>
            </Column2>
        </InfoRow>
        </Zoom>
    </InfoWrapper>
   </InfoContainer>
   </>
  )
}

export default SectionOne
