import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
export const ServicesContainer = styled.div`
    height: auto;
    margin-top: 100px;
    margin-bottom: 100px;

    flex-direction: column;

    background-color: #fafafa;

    @media screen and (max-width: 760px){
        height: 1700px;
        display: flex;

    }

    @media screen and (max-width: 480px){
        height: 2000px;
        display: flex;

    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: left;
    grid-gap: 30px;
    padding: 0 0px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr ;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    border-radius: 10px;
    max-height: 900px;
    max-width: 400px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
margin-left: 0;
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const Btn = styled.div`
    justify-content: flex-start;
    margin-top: 40px;
    margin-bottom: 40px;
`
export const BtnLink = styled(LinkR)`
    border-radius: 10px;
    background: #CD0032;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#A4072D ;
        color: #fff;
    }
`


export const ServicesIcon = styled.img`
    height: 200px;
    width: 350px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.p`
    font-size: 2.0rem;
    color: black;
    margin-bottom: 14px;
    text-align: left;
    margin-left: 100px;
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;
    line-height: 24px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ServicesH3 = styled.p`
    font-size: 1rem;
    margin-bottom: 30px;
    color:#05051f;
    text-align: justify;
    margin-left: 100px;
    margin-right: 100px;
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;
    line-height: 24px;



`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color:#05051f;
    text-align: left;
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;
    line-height: 24px;

`

export const ServicesP = styled.p`
    font-size: 0%.9;
    text-align: justify;
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;
    line-height: 24px;
    
`

export const ServicesH4 = styled.p`
    font-size: 1rem;
    margin-bottom: 0px;
    margin-top: 50px;
    color:#05051f;
    text-align: justify;
    margin-left: 100px;
    margin-right: 100px;
    font-family: 'Cormorant Garamond',Georgia,"Times New Roman",serif;
    line-height: 24px;



`
