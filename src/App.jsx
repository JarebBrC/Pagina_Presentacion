import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Banner } from './components/Banner/Banner.jsx'
import  OurProyects from './components/OurProyects/OurProyects.jsx'
import { Contact } from './components/Contact/Contact.jsx'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <OurProyects></OurProyects>
    <Contact></Contact>
    </>
  )
}

export default App
