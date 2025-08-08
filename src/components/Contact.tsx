import { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const icons = {
    github: FaGithub as unknown as React.FC,
    linkedin: FaLinkedin as unknown as React.FC,
    email: FaEnvelope as unknown as React.FC,
};

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const email = process.env.REACT_APP_USER_EMAIL;
const name = process.env.REACT_APP_USER_NAME;

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        console.log(`ServiceId: ${serviceId}, TemplateId: ${templateId}, PublicKey: ${publicKey}`);
        e.preventDefault();

        if (!formRef.current) return;

        // Datos para el call center
        const params = {
            user_name: formRef.current.user_name.value,
            user_email: formRef.current.user_email.value,
            user_phone: formRef.current.user_phone.value,
            message: formRef.current.message.value,
            email: email,
            name: name,
        };

        emailjs
            .send(
                serviceId!,
                templateId!,
                params,
                publicKey
            )
            .then(() => {
                setStatus("success");
                formRef.current?.reset();
                setTimeout(() => setStatus(""), 3000);
            })
            .catch(() => setStatus("error"));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-900 to-black text-white"
        >
            <div
                className="max-w-3xl w-full"
                data-aos="fade-up"
            >
                <h2 className="text-4xl font-bold mb-4 text-center">Contacto</h2>
                <p className="text-gray-400 mb-10 text-center">
                    ¿Tenés un proyecto o una idea? ¡Hablemos!
                </p>

                <form
                    ref={formRef}
                    className="grid grid-cols-1 gap-6"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Tu nombre"
                        required
                        pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ ]{2,}"
                        title="Solo letras, mínimo 2 caracteres"
                        className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Tu correo"
                        required
                        className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <input
                        type="number"
                        name="user_phone"
                        placeholder="Tu telefono"
                        required
                        className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        rows={5}
                        required
                        minLength={10}
                        className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <button
                        type="submit"
                        className="bg-cyan-600 hover:bg-cyan-500 transition-all text-white font-semibold py-3 rounded-lg"
                    >
                        Enviar mensaje
                    </button>
                </form>

                {status === "success" && (
                    <p className="mt-4 text-green-500 text-center font-semibold">
                        ¡Mensaje enviado correctamente! Te responderé pronto.
                    </p>
                )}

                {status === "error" && (
                    <p className="mt-4 text-red-500 text-center font-semibold">
                        Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </p>
                )}

                <div className="mt-12 flex justify-center space-x-6 text-2xl text-white">
                    <a
                        href="http://github.com/santi4246"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-all"
                    >
                        <icons.github />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/santiago-romero-santi4246/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-all"
                    >
                        <icons.linkedin />
                    </a>
                    <a
                        href="mailto:santiago_pna@hotmail.com"
                        className="hover:text-cyan-400 transition-all"
                    >
                        <icons.email />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;