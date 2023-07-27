import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const ServicesContainer = styled.div`
    height: auto;
    display: flex;
    padding-bottom: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;

    @media screen and (max-width: 480px){
        height: 4300px;

        @media screen and (max-width: 1000px){
            height: auto;
        }
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1920px;
    margin: 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding: 0 20px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    height: 470px;
    width: 260px;
    padding: 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServicesIcon = styled.img`
    height: 230px;
    width: 230px;
    margin-bottom: 10px;
    align: center;
`

export const ServicesH1 = styled.p`
    font-size: 20px;
    color: black;
    margin-top: 20px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 30px;
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const ServicesH2 = styled.p`
    font-size: 13px;
    margin-bottom: 40px;
    color:#05051f;
    text-align: left;
    margin-left: 40px;
    margin-right: 40px;
`

export const ServicesH3 = styled.p`
    font-size:18px;
    color: black;
    margin-top: 20px;
    text-align: left;
    margin-bottom: 10px;

}
`


export const ServicesP = styled.p`
    font-size: 13px;
    text-align: left;
    margin-bottom: 15px;    
    height: 50px;
`

export const Btn = styled.div`
    justify-content: flex-start;
    margin-top: 50px;
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

