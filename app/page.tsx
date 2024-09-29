import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import mountains from "../public/mountains.png";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Uma plataforma de comércio eletrônico completa com funcionalidade de gerenciamento de produtos, carrinho e checkout.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Task Management App",
    description:
      "Um aplicativo de gerenciamento de tarefas estilo Kanban com atualizações em tempo real e recursos de colaboração em equipe.",
    tags: ["React", "Firebase", "Material-UI"],
  },
  {
    title: "Weather Dashboard",
    description:
      "Um painel meteorológico que fornece condições atuais e previsões para vários locais.",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"],
  },
];

const tagColors = {
  React: "bg-blue-500",
  "Node.js": "bg-green-500",
  MongoDB: "bg-green-700",
  Express: "bg-gray-600",
  Firebase: "bg-yellow-500",
  "Material-UI": "bg-blue-700",
  JavaScript: "bg-yellow-400",
  "OpenWeather API": "bg-blue-400",
  "Chart.js": "bg-pink-500",
  HTML: "bg-orange-500",
  CSS: "bg-blue-600",
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-900">Jhon</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="#about"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Sobre
                </Link>
                <Link
                  href="#projects"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Projetos
                </Link>
                <Link
                  href="#contact"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <section id="about" className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900">Jhon Doe</h1>
            <p className="mt-1 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              doloribus accusamus vitae asperiores nulla architecto maxime minus
              quam voluptatibus voluptatem eaque omnis consequuntur beatae odio,
              ipsam nisi aspernatur tenetur laboriosam.
            </p>
          </section>

          <section id="projects" className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <Image
                    alt="Mountains"
                    src={mountains}
                    placeholder="blur"
                    width={400}
                    height={200}
                    quality={100}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${
                            tagColors[tag as keyof typeof tagColors] ||
                            "bg-gray-500"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 flex justify-end space-x-3">
                    <button className="text-gray-600 hover:text-gray-900">
                      <Globe className="h-5 w-5" />
                      <span className="sr-only">Ver projeto</span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">Ver código</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer id="contact" className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contato
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <a
                    href="mailto:jhondoe@example.com"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    jhondoe@example.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-2" />
                  <a
                    href="tel:+5511999999999"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    +55 (11) 99999-9999
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Redes Sociais
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <Linkedin className="h-5 w-5 text-gray-400 mr-2" />
                  <a
                    href="https://www.linkedin.com/in/jhondoe"
                    target="_blank"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center">
                  <Github className="h-5 w-5 text-gray-400 mr-2" />
                  <a
                    href="https://github.com/jhondoe"
                    target="_blank"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Localização
              </h3>
              <p className="mt-4 text-base text-gray-500">
                São Paulo, SP
                <br />
                Brasil
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2023 Jhon Doe. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
