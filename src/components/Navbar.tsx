import DownloadIcon from "../assets/download.png";
import type { NavbarProps } from "../types/NavProps";

const Navbar = (props: NavbarProps) => {
  return (
    <div className=" bg-gray-900 fixed top-0 left-0 w-full flex justify-end gap-10 p-5 font-bold text-white rounded-bl-sm rounded-br-sm">
        <button className="cursor-pointer" onClick={() =>props.scrollToSection(props.refs.homeRef)}>Home</button>
        <button className="cursor-pointer" onClick={() =>props.scrollToSection(props.refs.educationRef)}>Education</button>
        <button className="cursor-pointer" onClick={() =>props.scrollToSection(props.refs.skillsRef)}>Skills</button>
        <button className="cursor-pointer" onClick={() =>props.scrollToSection(props.refs.projectsRef)}>Projects</button>
        <button className="cursor-pointer" onClick={() =>props.scrollToSection(props.refs.contactRef)}>Contact</button>

        <button className="">Resume</button>
    </div>
  )
}

export default Navbar