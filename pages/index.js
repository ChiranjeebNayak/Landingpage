import "bootstrap/dist/css/bootstrap.css";
import Client from '../components/client'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Home from '../components/home'
import Navbar from '../components/navbar'
import Works from '../components/works'
import Service from '../components/service'
import About from "../components/about";
export default function Index() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Works/>
      <Client/>
      <Contact/>
      <Footer/>
    </div>
  )
}
