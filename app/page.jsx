import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { PiCertificateFill } from "react-icons/pi"
import { IoMdCheckmarkCircle } from "react-icons/io"

export default function Home() {
  const projects = [
    {
      id: 1,
      name: "Star-shipment",
      description:
        "Star-shipment is an ongoing web platform built with Next.js and Tailwind CSS, connecting buyers with suppliers. The project is currently under development for a client, with a scalable backend to be implemented using Supabase.",
      github: "https://github.com/mouus/star-shipment",
      tech: ["Next.js", "Tailwind CSS", "Supabase"],
      status: "Paused",
      lastUpdated: "Sep 20, 2024",
    },
    // {
    //   id: 2,
    //   name: "Sithaana",
    //   description:
    //     "Sithaana is a comprehensive platform built using Next.js, Tailwind CSS, and Supabase for the backend. It includes modern UI components and efficient data management. Currently an ongoing project under development.",
    //   image: "/img/pixel-sithaana.png",
    //   github: "https://github.com/mouus/sithaana",
    //   tech: ["Next.js", "Tailwind CSS", "Supabase"],
    //   status: "In Development",
    //   lastUpdated: "Sep 20, 2024",
    // },
    {
      id: 3,
      name: "Zaff-profile",
      description:
        "Developed a frontend website for a client using Next.js and TailwindCSS. This project showcased my ability to deliver responsive and modern designs tailored to client needs.",
      github: "https://github.com/mouus/zaff-profile",
      tech: ["Next.js", "Tailwind CSS"],
      status: "Completed",
      lastUpdated: "Oct 24, 2024",
    },
    {
      id: 4,
      name: "One-bloodbank",
      description:
        "One-blood bank is a React Native app developed to connect blood donors and recipients in the Maldives, addressing the challenge of finding blood. The project was paused as the client shifted focus.",
      github: "https://github.com/mouus/onebloodbank",
      tech: ["React Native", "Supabase"],
      status: "Paused",
      lastUpdated: "2024",
    },
    {
      id: 5,
      name: "Portfolio.oi",
      description:
        "A modern, responsive portfolio website built with JavaScript and styled with modern CSS. Features a clean design with smooth animations and optimized performance for showcasing personal projects.",
      github: "https://github.com/mouus/portfolio.oi",
      tech: ["JavaScript", "HTML", "CSS"],
      status: "Completed",
      lastUpdated: "Jan 11, 2024",
    },
    {
      id: 6,
      name: "Zaff-travel",
      description:
        "A travel website project built with JavaScript, featuring modern web development practices. Designed to showcase travel destinations and provide an engaging user experience.",
      github: "https://github.com/mouus/zaff-travel",
      tech: ["TypeScript", "HTML", "CSS"],
      status: "Completed",
      lastUpdated: "Apr 13, 2024",
    },
    {
      id: 7,
      name: "Travel",
      description:
        "A comprehensive travel application built with TypeScript, featuring modern architecture and type-safe development. Includes advanced features for travel planning and booking management.",
      github: "https://github.com/mouus/travel",
      tech: ["TypeScript", "React", "Node.js"],
      status: "Completed",
      lastUpdated: "Jul 7, 2024",
    },
  
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Pixel Mountain Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/img/mountain-pic.jpg"
          alt="Pixel Mountains Background"
          fill
          className="object-cover "
          priority
        />
      </div>

      {/* Pixel Background Pattern Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234f46e5' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated pixel stars */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center mt-16 md:mt-32 px-4">
          <div className="inline-block p-8 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-indigo-500/30 rounded-2xl shadow-2xl">
            <p className="text-sm font-semibold text-indigo-300 mb-2">Hey,I&apos;m</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 pixel-font">Musannif Rasheed</h1>
            <p className="text-xl md:text-2xl text-indigo-200 mb-6">Full Stack Developer</p>
            <div className="flex gap-6 justify-center">
              <Link
                href="https://github.com/mouus"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border border-gray-600 hover:border-indigo-400"
              >
                <FaGithub size={24} className="text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/musannif-rasheed-378b152a1/"
                className="p-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors border border-blue-500 hover:border-blue-300"
              >
                <FaLinkedin size={24} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="mt-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-indigo-300 text-sm font-semibold mb-2">Get To Know More</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white pixel-font">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-2xl text-center">
                <AiFillSafetyCertificate className="text-indigo-400 text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                <p className="text-indigo-200">3+ Years</p>
                <p className="text-indigo-200">Full Stack Development</p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl text-center">
                <PiCertificateFill className="text-purple-400 text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <p className="text-purple-200">Studying for an</p>
                <p className="text-purple-200">undergraduate degree</p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-900/50 to-indigo-900/30 backdrop-blur-sm border border-gray-500/30 rounded-2xl">
              <p className="text-gray-200 leading-relaxed text-lg">
               Hi, I&apos;m Musannif Rasheed, a full-stack developer with nearly four years of hands-on experience. I got into programming during a difficult period in my life, driven by the need to support my family and build a practical skillset. I taught myself to code and have been focused on growing through real-world projects and continuous learning. Currently, I&apos;m working independently on a SaaS product, aiming to create simple, effective solutions that solve real problems through technology.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="experience" className="mt-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-indigo-300 text-sm font-semibold mb-2">Explore My</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white pixel-font">Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-500/30 rounded-2xl">
                <h3 className="text-2xl font-bold text-green-300 text-center mb-8">Frontend Development</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-green-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">HTML</h4>
                        <p className="text-sm text-green-200">Experienced</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-green-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">CSS</h4>
                        <p className="text-sm text-green-200">Experienced</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-green-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">JavaScript</h4>
                        <p className="text-sm text-green-200">Intermediate</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-green-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">React</h4>
                        <p className="text-sm text-green-200">Experienced</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-green-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">Tailwind CSS</h4>
                        <p className="text-sm text-green-200">Intermediate</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-green-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">Next.js</h4>
                        <p className="text-sm text-green-200">Intermediate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-300 text-center mb-8">Backend Development</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-blue-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">Node.js</h4>
                        <p className="text-sm text-blue-200">Intermediate</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-blue-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">PostgreSQL</h4>
                        <p className="text-sm text-blue-200">Basic</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-blue-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">Git</h4>
                        <p className="text-sm text-blue-200">Intermediate</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-blue-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">Express.js</h4>
                        <p className="text-sm text-blue-200">Basic</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-blue-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">Supabase</h4>
                        <p className="text-sm text-blue-200">Intermediate</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-blue-400 text-xl" />
                      <div>
                        <h4 className="font-semibold text-white">Firebase</h4>
                        <p className="text-sm text-blue-200">Basic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mt-20 px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-indigo-300 text-sm font-semibold mb-2">Browse My</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white pixel-font">Projects</h2>
              <p className="text-gray-300 mt-4">All projects from my GitHub profile</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-indigo-900/30 backdrop-blur-sm border border-gray-500/30 rounded-2xl hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : project.status === "In Development"
                              ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                              : "bg-red-500/20 text-red-300 border border-red-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">
                        <span className="text-indigo-400">#{project.id}</span> {project.name}
                      </h3>
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <FaGithub size={18} />
                        <FaExternalLinkAlt size={14} />
                      </Link>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-gray-400">Last updated: {project.lastUpdated}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900/80 to-indigo-900/80 backdrop-blur-sm border-t border-gray-500/30 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-8 mb-8">
              <Link
                href="https://github.com/mouus"
                className="p-4 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors border border-gray-600 hover:border-indigo-400"
              >
                <FaGithub size={28} className="text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/musannif-rasheed-378b152a1/"
                className="p-4 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors border border-blue-500 hover:border-blue-300"
              >
                <FaLinkedin size={28} className="text-white" />
              </Link>
            </div>
            <p className="text-gray-400">© 2024 Musannif Rasheed. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
