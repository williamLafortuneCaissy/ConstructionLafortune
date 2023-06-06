import { Icon } from "@iconify/react";
import Title from "../components/Title";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id="contact" className="container section-spacing-top pb-16">
            <div className="grid gap-16 lg:grid-cols-2">
                <div>
                    <Title as="h2" className="mb-16">Contact</Title>
                    <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-4">
                        <div>
                            <div className="">Téléphone</div>
                            <div className="text-xl font-medium">+1 514 612-8765</div>
                        </div>
                        <div>
                            <div className="">Courriel</div>
                            <div className="text-xl font-medium">construction@lafortune.com</div>
                        </div>
                        <div>
                            <div className="">Adresse</div>
                            <div className="text-xl font-medium leading-5 mt-1">
                                489 Rue de la Montagne, <br />
                                Montréal, QC, <br />
                                H3C 2T8
                            </div>
                        </div>
                        <div>
                            <div className="">Suivez-Nous</div>
                            <div className="text-4xl flex gap-1 mt-1 items-center">
                                <Icon icon="la:facebook" />
                                <Icon icon="mdi:instagram" height=".9em"/>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}

export default Contact;