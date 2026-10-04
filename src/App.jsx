import './App.css'
import MatrixRain from './components/MatrixRain'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'


function App() {
    return (
        <main className="container">
            <MatrixRain />
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </main>
    )
}

export default App
