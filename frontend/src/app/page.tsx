import Link from "next/link";
import Spinner from './components/Spinner';
import Dropdown from './components/NavBar/DropDown';
import AboutMe from "./components/HomePage/AboutMe";

export default function Home() {
  return (
    <div className='container'>
    <AboutMe />
    </div>
  )
}
