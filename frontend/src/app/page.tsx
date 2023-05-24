import Link from "next/link";
import Spinner from './components/Spinner';
import Dropdown from './components/NavBar/DropDown';
import AboutMe from "./components/HomePage/AboutMe";
import Depoiments from "./components/HomePage/Depoiments";

export default function Home() {
  return (
    <div className='container'>
    <AboutMe />
    <Depoiments />
    </div>
  )
}
