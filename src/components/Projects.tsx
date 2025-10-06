import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Project = {
    title: string;
    description: string;
    details: string;
    image: string;
    tech: string[];
    demo: string;
    code: string;
};

const allProjects: Project[] = [
    {
        title: "Videogames App",
        description: "Proyecto de videojuegos con búsqueda, filtros y paginación.",
        details: "Aplicación web que permite buscar y filtrar videojuegos por género, plataforma y más. Incluye paginación y detalles de cada juego.",
        image: "/projects/videogames.png",
        tech: ["HTML", "CSS", "React", "Javascript", "Redux", "Node.js", "Express", "PostgreSQL"],
        demo: "https://videogames-app-one.vercel.app/",
        code: "https://github.com/santi4246/videogames",
    },
    {
        title: "Dashboard de Analytics",
        description: "Panel visual con gráficos y métricas en tiempo real.",
        details: "Dashboard interactivo que muestra métricas y gráficos en tiempo real utilizando React y Chart.js. Ideal para monitorear datos de manera visual.",
        image: "/projects/snykers.png",
        tech: ["HTML", "CSS", "React", "Javascript", "Node.js", "Express", "Firebase"],
        demo: "https://snykers.vercel.app/",
        code: "#",
    },
    {
        title: "Blog de páginas en Django",
        description: "Panel visual con páginas y artículos creados desde el panel de administrador.",
        details: "Blog sencillo que consta de un menú navbar para el recorrido de páginas, formulario de registro e inicio de sesión. La creación de páginas se realiza desde el panel de administrador y se sirve todo desde el backend.",
        image: "/projects/blog.png",
        tech: ["Python", "Django", "S3 Bucket AWS", "MySql"],
        demo: "https://project-blog-django.onrender.com",
        code: "https://github.com/santi4246/project-blog-django",
    },
    // Agregá más proyectos
];

const Projects = () => {
    const [selectedTech, setSelectedTech] = useState<string>("Todos");
    const [modal, setModal] = useState<Project | null>(null);

    const techOptions = ["Todos", ...new Set(allProjects.flatMap(p => p.tech))];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const filteredProjects =
        selectedTech === "Todos"
            ? allProjects
            : allProjects.filter((p) => p.tech.includes(selectedTech));

    return (
        <section id="projects" className="py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-aos="fade-up">
                    Proyectos
                </h2>

                {/* FILTROS */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {techOptions.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setSelectedTech(tech)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border ${selectedTech === tech
                                    ? "bg-primary text-white border-primary"
                                    : "text-primary border-primary hover:bg-primary hover:text-white"
                                } transition`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group bg-dark/5 dark:bg-light/5 rounded-xl overflow-hidden shadow-lg transition hover:scale-[1.02]"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            onClick={() => setModal(project)}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            {/* OVERLAY HOVER */}
                            <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-center p-4 text-sm font-medium">
                                {project.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {modal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-light dark:bg-dark max-w-lg w-full rounded-xl shadow-lg p-6 relative text-left text-dark dark:text-light">
                        <button
                            className="absolute top-4 right-4 text-xl text-primary hover:text-red-500"
                            onClick={() => setModal(null)}
                        >
                            &times;
                        </button>
                        <img src={modal.image} alt={modal.title} className="rounded-lg mb-4 w-full" />
                        <h3 className="text-2xl font-bold mb-2">{modal.title}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{modal.details}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {modal.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <a
                                href={modal.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white text-sm px-4 py-2 rounded hover:opacity-90 transition"
                            >
                                Demo
                            </a>
                            {
                                modal.code !== "#" && <a
                                    href={modal.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-primary text-primary text-sm px-4 py-2 rounded hover:bg-primary hover:text-white transition"
                                >
                                    Código
                                </a>
                            }
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;