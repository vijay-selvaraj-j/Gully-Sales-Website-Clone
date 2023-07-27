import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #fff;
    transition: 0.8s all ease;
    height: 60px;
    margin-top: -80px;
    display: flex;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 1px 1px 3px 3px #ddd;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 15px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        color: #f57b1d;
        transition: 0.4s ease-in-out;
    }
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 10;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #262626;
        box-shadow: 1px 1px 1px 1px #ddd;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 60px;
`

export const NavLinks = styled(LinkR)`
    color: #616161;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 14px;

    &:hover{
        transition: all 0.4s ease-in-out;
        color: #262626;
    }
`

export const LogoIcon = styled.img`
    height: 30px;
    width: 150px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 100px;
   
`
