import React, { useState } from 'react';
import Sidebar from '../WebsiteComponents/Sidebar';
import Navbar from '../WebsiteComponents/Navbar';
import SectionOne from '../WebsiteComponents/HomePage/SectionOne'

import { homeObjOne
} from '../WebsiteComponents/HomePage/SectionOne/Info';
import SectionTwo from '../WebsiteComponents/HomePage/SectionTwo';
import Footer from '../WebsiteComponents/HomePage/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Navbar toggle = {toggle}/>
      <SectionOne {...homeObjOne}/>
      <SectionTwo />
      <Footer/>
    </>
  )
}

export default Home
