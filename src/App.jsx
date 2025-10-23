import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'


export default function App(){
return (
<div className="min-h-screen bg-ink text-white flex flex-col">
<Navbar />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/skills" element={<Skills />} />
<Route path="/projects" element={<Projects />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</div>
)
}