import './App.css'
import { Proudly } from './components/Proudly'
import { Ensure } from './components/Ensure'
import Footer from './components/Footer'
import { Header } from './components/Header'
import  ProjectForm  from './components/ProjectForm'
import { Automotive } from './components/Automotive'
import { Map } from './components/Map'
import TestimonialSection from './components/TestimonialSection'
import { Business } from './components/Business'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <Header/>
    <Ensure/>
    <Automotive/>
    <Map/>/
    <Proudly/>
    <ProjectForm/>
    <TestimonialSection/>
    <Business/>
    <Footer/>
    </>
  )
}

export default App
