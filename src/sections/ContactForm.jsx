import Button from "../components/Button";

const ContactForm = () => {
    return ( 
        <form action="/" className="p-8 md:p-12 bg-orange-light text-purple -mb-8 lg:-mb-72 shadow-md">
            <p className="mb-8 text-lg font-medium">Réaliser vos rêves architecturaux avec un premier contact !</p>
            <div className="grid gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                    <label htmlFor="firstname" className="block mb-3">Prénom</label>
                    <input className="input" type="text" name="firstname" id="firstname" />
                </div>
                <div>
                    <label htmlFor="lastname" className="block mb-3">Nom</label>
                    <input className="input" type="text" name="lastname" id="lastname" />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-3">Téléphone</label>
                    <input className="input" type="text" name="phone" id="phone" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-3">Courriel</label>
                    <input className="input" type="text" name="email" id="email" />
                </div>
                <div className="col-span-full">
                    <label htmlFor="message" className="block mb-3">Message</label>
                    <textarea className="input " name="message" id="message" cols="30" rows="3"></textarea>
                </div>
            </div>
            <Button className="mt-6">Contact</Button>
        </form>
    );
}
 
export default ContactForm;