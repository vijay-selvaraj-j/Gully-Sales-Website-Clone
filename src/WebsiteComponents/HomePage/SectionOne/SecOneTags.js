import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? 'linear-gradient(to bottom right, #eadcfc,#e6f8fc,white,white)' : '#fff')};

    @media screen and (max-width: 768px){
            height: 420px;
}

@media screen and (max-width: 1000px){
    height: 420px;
}
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 400px;
    width: 100%;
    max-width: 1920px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    margin-top: 80px;
    align-items: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    max-width: 1400px;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    justify-content: left ! important;
    display: flex ! important;
    in align-right;


`

export const TextWrapper = styled.div`
    max-width: 1500px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
       padding-bottom: 0px;
   }
`

export const TopLine = styled.p`
    color: ${({lightTop}) => (lightTop ? '#34399e' : '#62a7b3')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;

`
export const Heading = styled.p`
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 100;
    color: ${({lightText}) => (lightText ? '#f7f8f8' : '#05051f')};
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;


    @media screen and (max-width: 768px){
        font-size: 20px;
    }
`
export const Subtitle = styled.p`
    max-width: 1000px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#05051f' : '#fff')};
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;

    @media screen and (max-width: 768px){
        margin-bottom: 0px;
   }
    
`
export const Subtitle1 = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 30px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#05051f' : '#fff')};
    font-family: 'Sacramento',cursive;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 350px;
    height: 80%;
`

export const Img = styled.img`
        width: 140%;
        height: 130%;
        margin: 0 0 10px 0;
        padding-right: 0;
        border-radius: 30px;

        @media screen and (max-width: 768px){
         width: 80%;
        height: 70%;
    }

`
export const Button =styled(LinkR)`
 border-radius: 5px;
    background: ${({primary}) => (primary ? '#ccf8ff' : '##ccf8ff')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'black' : 'black')};
    font-size: ${({fontBig}) => (fontBig ? '25px' : '25px')};
    outline: none;
    border: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width:200px;
    height:50px;
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#ccf8ff')};
        color: ${({dark}) => (dark ? '#ccf8ff' : '#fff')};
    }
`