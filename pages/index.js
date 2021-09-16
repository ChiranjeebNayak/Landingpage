import "bootstrap/dist/css/bootstrap.css";
import Clients from '../components/clients'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hello from '../components/hello'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Project from '../components/project'
import Work from '../components/work'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Hello/>
      <Work/>
      <Project/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  )
}
