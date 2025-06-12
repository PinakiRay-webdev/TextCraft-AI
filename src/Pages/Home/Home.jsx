import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Tools from './Components/Tools/Tools'
import NotesFeatures from './Components/NotesFeature/NotesFeatures'
import Reason from './Components/Reason/Reason'
import CTA from './Components/CTA/CTA'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Tools/>
      <NotesFeatures/>
      <Reason/>
      <CTA/>
    </div>
  )
}

export default Home
