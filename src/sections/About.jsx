import Title from "../components/Title";
import { Icon } from '@iconify/react';

const aboutData = [
    {
        icon: <Icon icon="codicon:shield" />,
        title: 'Fiabilité',
        description: 'Nous respectons les délais et les budgets, en fournissant des services fiables et en minimisant les perturbations pour nos clients.'
    },
    {
        icon: <Icon icon="codicon:shield" />,
        title: 'Innovation',
        description: 'Nous employons les dernières technologies et techniques de construction pour garantir des résultats innovants et durables pour tous vos projets.'
    },
    {
        icon: <Icon icon="ph:gear-light" />,
        title: 'Sur-Mesure',
        description: "Nous créons des solutions sur mesure qui s'alignent parfaitement avec votre vision, garantissant un projet qui répond à vos attentes uniques."
    },
    {
        icon: <Icon icon="system-uicons:diamond" />,
        title: 'Transparence',
        description: 'Nous cultivons des relations fondées sur la confiance avec nos clients en assurant une communication ouverte et une transparence totale tout au long du processus de construction.'
    },
];

const About = () => {
    return (
        <section id="about" className="container section-spacing">
            <Title as="h2" className="text-4xl mb-10">Pourquoi nous?</Title>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                {aboutData.map((about) => (
                    <div key={about.title} className="bg-purple-light p-6">
                        <div className="flex gap-3 items-center mb-2">
                            <span className="text-2xl">{about.icon}</span>
                            <h3 className="text-lx font-medium">{about.title}</h3>
                        </div>
                        <p>{about.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default About;