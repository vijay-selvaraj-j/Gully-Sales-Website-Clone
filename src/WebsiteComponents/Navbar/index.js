import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import Icon1 from '../../images/logo.png';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    LogoIcon
}from './NavbarElements';

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 140){
      setScrollNav(true)
    }
    else
    setScrollNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
    <IconContext.Provider value={{color: '#5D5D5D'}}>
      <Nav scrollNav={scrollNav}>
      
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}><LogoIcon src={Icon1}/></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
                <NavLinks to="/" 
                smooth={true} duration={500} spy={true} exact='true' 
                offset={-80} >
                Services</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/industry"
                smooth={true} duration={500} spy={true} exact='true' 
                offset={-80}>Industries</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/"
                smooth={true} duration={500} spy={true} exact='true' 
                offset={-80}>Customers</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/"
                smooth={true} duration={500} spy={true} exact='true' 
                offset={-80}>Team</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="/"
                smooth={true} duration={500} spy={true} exact='true' 
                offset={-80}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
