import map from '../assets/images/map-placeholder.jpg';
import logo from '../assets/images/logo-footer.jpg';
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return ( 
        <footer className="bg-gray text-purple pt-16 pb-6">
            <div className="container">
                <div className="lg:w-1/2 flex">
                    <div className="mr-auto"><img src={logo} alt="Google map" className="h-40" /></div>
                    <div className="mr-auto"><img src={map} alt="Google map" className="h-40" /></div>
                </div>
               <hr className='mb-5 mt-7'/>
               <p>© {currentYear} Construction Lafortune. Tous droits réservés.</p>
            </div>

        </footer>
     );
}
 
export default Footer;