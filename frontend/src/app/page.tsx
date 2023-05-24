import AboutMe from './components/HomePage/AboutMe';
import Contact from './components/HomePage/Contact';
import Depoiments from './components/HomePage/Depoiments';
import StaticDepoiments from './components/HomePage/StaticDepoiments';

export default function Home() {
  return (
    <div>
    <AboutMe />
    <StaticDepoiments />
    <Depoiments />
    <Contact />
    </div>
  )
}
