import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light">
      <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Sobre mí
        </h2>

        {/* FOTO */}
        <div className="flex justify-center mb-6">
          <img
            src="./profile.png"
            alt="Foto perfil de Santiago Romero"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow-lg border-4 border-primary hover:scale-105 transition-transform duration-300"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Soy <span className="font-semibold text-primary">Santiago Romero</span>, desarrollador fullstack con experiencia en la creación de aplicaciones web modernas y responsivas.
          Me especializo en <strong>React</strong>, <strong>TypeScript</strong> y stacks relacionados a <strong>MERN</strong> y <strong>PERN</strong>.
          Disfruto construir experiencias de usuario intuitivas, rápidas y accesibles.          
          Transformo ideas en aplicaciones funcionales, combinando diseño, lógica y tecnología.
        </p>

        {/* BOTÓN CV */}
        <div className="mb-12">
          <a
            href="https://drive.google.com/file/d/1yU63Vjd5NJbjlfybBQYD0_UDlpj8crTT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-primary/90 transition-all"
          >
            Descargar CV
          </a>
        </div>

        {/* TECNOLOGÍAS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
          {[
            "HTML5",
            "CSS",            
            "JavaScript",
            "TypeScript",
            "React",
            "Redux",
            "Node.js",
            "Express",
            "Asp .Net Core",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "C#",
            "C++",
            "Python",
            "Django",
            "Git",
            "Docker",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-dark/5 dark:bg-light/10 rounded-lg py-3 px-4 font-medium text-sm sm:text-base text-primary shadow-sm hover:shadow-md transition-shadow"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
