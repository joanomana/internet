// CreditsSection.jsx
import React from "react";

const team = [
  {
    name: "Joan Sebastian Omaña Suarez",
    roles: [
      "Redacción de contenido educativo",
      "Organización SCRUM y GitHub",
      "Desarrollo BackEnd",
    ],
  },
  {
    name: "Jhon Isaac Medina Mendoza",
    roles: [
      "Organización SCRUM y GitHub",
      "Redacción de contenido educativo",
      "Desarrollo Frontend",
    ],
  },
  {
    name: "Brian Fair Suarez Porras",
    roles: [
      "Interfaz y Animaciones",
      "Organización SCRUM y GitHub",
      "Documentación",
    ],
  },
];

export default function CreditsSection() {
  return (
    <section className="bg-white/85 mx-auto px-3 space-y-6 p-6 rounded-xl shadow-md " id="credits">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Créditos del Proyecto
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                {member.name}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {member.roles.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
