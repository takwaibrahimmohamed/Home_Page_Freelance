import React from 'react'

import styled from '@emotion/styled';
import Header from './Header';
import FooterCom from './Footer';
import WelcomeSec from './WelcomeSec';
import ImageBackground from './ImageBackground';
import RatedSec from './RatedSec';
import GroupList from './GroupList';
import ExploreAllProduct from './ExploreAllProduct';
import SideBackGround from './SideBackGround';
import OurProduct from './OurProduct';
import CustomerFeedBack from './CustomerFeedBack';
import EngoySection from './EngoyComponent';


const Home = () => {
    const Home=styled.div({
      backgroundColor: "#FCF3E6",
      boxShadow: "110px 134px 210px 0px rgba(0, 0, 0, 0.15)",
      // maxWidth: "1440px",
      // maxHeight: "2239px",
    overflow:"hidden"
   
    })
  return (
    // <SwipeableTemporaryDrawer/>
    <Home>
       <Header/>
       <WelcomeSec/>
       <ImageBackground/>
       <RatedSec/>
       <GroupList/>
       <ExploreAllProduct/>
       <SideBackGround/>
       <OurProduct/>
       <CustomerFeedBack/>
       <EngoySection/>
        <FooterCom/>
        
    </Home>
  )
}

export default Home