import Title from "../components/Title";
import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';
import project5 from '../assets/images/project-5.jpg';
import project6 from '../assets/images/project-6.jpg';
import project7 from '../assets/images/project-7.jpg';
import project8 from '../assets/images/project-8.jpg';
import styles from '../assets/css/projects.module.css';

const projectsData = [
    {
        img: project1,
        alt: '',
    },
    {
        img: project2,
        alt: '',
    },
    {
        img: project3,
        alt: '',
    },
    {
        img: project4,
        alt: '',
    },
    {
        img: project5,
        alt: '',
    },
    {
        img: project6,
        alt: '',
    },
    {
        img: project7,
        alt: '',
    },
    {
        img: project8,
        alt: '',
    },
];
const Projects = () => {
    return (
        <section id="projects" className="container section-spacing">
            <Title as="h2" className="text-4xl mb-10">Nos Réalisations</Title>
            <div className={`flex overflow-auto pb-6 gap-4 ${styles.toolbar}`}>
                {projectsData.map(project => (
                    <div key={project.img} className="basis-80 shrink-0">
                        <img src={project.img} alt={project.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;