import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';



const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
      ];
    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ?<AiOutlineClose></AiOutlineClose>:<AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }
            </div>
            <ul className={`md:flex absolute md:static bg-yellow-200 px-6 duration-1000
            ${open ? 'top-16' : '-top-60'}
            `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;