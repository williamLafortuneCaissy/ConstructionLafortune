import Title from '../components/Title';
import Button from '../components/Button';
import city from '../assets/images/city-overview.jpg';
const Hero = () => {

    return (
        <section className="isolate section-spacing">
            <div className="container">
                <Title as="h1" className='uppercase pb-5 xl:text-5xl'>Construisons <br /> ensemble le monde de demain</Title>
                <p className='pb-10'>Contactez-nous pour transformer vos rêves en réalités</p>
                <div className="grid gap-4 md:grid-cols-2">
                    <Button as="a" href="#contact" className="justify-self-start self-start">Contact</Button>
                    <div className="bg-orange-light text-purple p-7 shadow-md max-w-xl">
                        <div className="text-3xl font-medium mb-4">Construction Lafortune</div>
                        <p className="leading-7">Une entreprise de construction et de rénovation engagée, offrant des solutions de haute qualité pour les projets résidentiels et commerciaux. Notre équipe expérimentée, axée sur le service client, transforme efficacement vos visions en réalités concrètes, tout en respectant vos délais et budgets.</p>
                    </div>
                </div>
            </div>
            <img className="w-full max-h-[80vh] object-cover relative -z-10 -mt-8 md:-mt-40 lg:-mt-28" src={ city } alt="Une vue d'orizon de la ville de Montréal" />
        </section>
    );
}

export default Hero;