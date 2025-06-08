import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Features from './Components/Features/Features'
import NotesFeatures from './Components/NotesFeature/NotesFeatures'
import Reason from './Components/Reason/Reason'
import CTA from './Components/CTA/CTA'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Features/>
      <NotesFeatures/>
      <Reason/>
      <CTA/>
    </div>
  )
}

export default Home
