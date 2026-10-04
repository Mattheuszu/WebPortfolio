import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import MatrixRain from './components/MatrixRain'
import TypeWriter from "./components/TypeWriter.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from './components/Navbar';


function App() {
    return  (
        <main className="container">
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contacts />
            <MatrixRain />
            <TypeWriter />
            <Footer />
            <Navbar />
        </main>
    )
}

export default App
