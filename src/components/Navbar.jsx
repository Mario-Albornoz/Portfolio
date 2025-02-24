import { NavLink } from "react-router-dom";
import { lighthouseIcon } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header sticky top-0">
        {/**logo with initials */}
        <NavLink to="/" className="w-10 h-10 rounded-lg orange-gradient
        items-center justify-center flex font-bold shadow-md">
            <img
              src={lighthouseIcon}
              alt=''
              className="rounded-lg"
            />
        </NavLink>
        {/**right top corner text with the page its currently on */}
        <nav className="flex text-lg gap-7 font-medium"> 
            <NavLink to="/about" className={({isActive}) => isActive 
            ? 'text-blue-500' : 'text-Nav-Bar'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive 
            ? 'text-blue-500' : 'text-Nav-Bar'}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive 
            ? 'text-blue-500' : 'text-Nav-Bar'}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar