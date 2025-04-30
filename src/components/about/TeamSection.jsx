"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "MSc. Soledad Inlago ",
    role: "PRESIDENTA",
    description:
      "Líder en educación intercultural con más de 15 años de experiencia.",
    image: "/images/socios/Soledad Inlago.jpg",
  },
  {
    name: "MSc.Carlos Bautista",
    role: "COORDINADOR GENERAL",
    description:
      "Especialista en desarrollo de currículos educativos culturalmente adaptados.",
    image: "/images/socios/Carlos Bautista.jpg",
  },
  {
    name: "Msc.Maribel  Chimbo",
    role: "SECRETARIA DE ACTAS Y COMUNICACIONES.",
    description:
      "Experta en gestión de proyectos comunitarios y desarrollo sostenible.",
    image: "/images/socios/Maribel Chimbo.jpeg",
  },
  {
    name: "MSc. César Pilataxi",
    role: "SECRETARIO DE FINANZAS.",
    description:
      "Experto en gestión de recursos económicos",
    image: "/images/socios/CesarPilataxi.jpeg",
  },
  {
    name: "MSc.Darwin Reyes",
    role: "PRIMER VOCAL.",
    description:
      "Experto en gestión de proyectos comunitarios y desarrollo sostenible.",
    image: "/images/socios/Darwin Reyes.jpeg",
  },
  {
    name: "LCDO.Floresmilo Simbaña",
    role: "SEGUNDO VOCAL.",
    description:
      "Experto en gestión de proyectos comunitarios y desarrollo sostenible.",
    image: "/images/socios/FloresmiloSimba.jpg",
  },
  {
    name: "Ing.Carla Chilamá",
    role: "MIEMBRO.",
    description:
      "Proyectos comunitarios",
    image: "/images/socios/Carla.png",
  },
  {
    name: "América Túquerres",
    role: "MIEMBRO.",
    description:
      "Desarrollo sostenible.",
    image: "/images/socios/America Tuquerres.jpeg",
  },
  {
    name: "Ing.Elsa Bautista",
    role: "MIEMBRO.",
    description:
      "Especialista en desarrollo sostenible.",
    image: "/images/socios/Elsa Bautista.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personas comprometidas con la preservación y fortalecimiento de las
            culturas indígenas a través de la educación y el desarrollo
            comunitario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-blue-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
