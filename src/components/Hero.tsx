const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      // Detectar si es móvil
      const isMobile = window.innerWidth <= 768;

      // Offset distinto según el dispositivo
      const offset = isMobile ? 120 : 80;

      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-light dark:bg-dark">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-dark dark:text-light">
        ¡Hola! Soy <span className="text-primary">Santiago Romero</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Desarrollador fullstack especializado en <strong>React</strong>, <strong>TypeScript</strong> y
        tecnologías modernas del ecosistema web. Me gusta crear interfaces atractivas, accesibles y funcionales.
      </p>
      <div className="flex gap-4 mb-8">
        <button
          onClick={scrollToContact}
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Contactame
        </button>
        <a
          href="https://drive.google.com/file/d/1yU63Vjd5NJbjlfybBQYD0_UDlpj8crTT/view?usp=sharing"
          className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/santi4246" target="_blank" rel="noreferrer" className="text-primary hover:scale-110 transition text-2xl">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/santi4246" target="_blank" rel="noreferrer" className="text-primary hover:scale-110 transition text-2xl">
          <i className="fab fa-linkedin"></i>
        </a>
        {/* Agregá más redes si querés */}
      </div>
    </section>
  );
}

export default Hero;