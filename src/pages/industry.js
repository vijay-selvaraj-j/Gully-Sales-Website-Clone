import React, { useState } from 'react';
import Sidebar from '../WebsiteComponents/Sidebar';
import Navbar from '../WebsiteComponents/Navbar';
import SectionOne from '../WebsiteComponents/HomePage/SectionOne'
import { homeObjOne
} from '../WebsiteComponents/HomePage/SectionOne/Info';
import Icon1 from '../images/logo-1.png';
import SectionTwo from '../WebsiteComponents/Industries/IndustryPage';

import Footer from '../WebsiteComponents/HomePage/Footer';

const Industry = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Navbar toggle = {toggle}/>

      <SectionTwo />
      <Footer/>



      
    </>
  )
}

export default Industry
