import logo from '../assets/images/logo-nav.jpg';
import { navItem, navList} from '../assets/css/navbar.module.css';

const Navbar = () => {
    return (
        <nav className="p-6 flex justify-between items-center">
            <a href="#"><img src={logo} alt="Logo Construction Lafortune" width="40" height="40 " /></a>
            <ul className={`flex gap-4 md:text-xl ${navList}`}> 
                <li><a className={navItem} href="#home">Accueil</a></li>
                <li><a className={navItem} href="#about">À propos</a></li>
                <li><a className={navItem} href="#projects">Réalisations</a></li>
                <li><a className={navItem} href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;