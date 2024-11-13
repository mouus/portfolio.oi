'use client'
import ParticlesComponent from '@/libs/config/particles';
import Typewriter from 'typewriter-effect';
import '../libs/styles.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='text-center mt-16 md:mt-32'>
        <ParticlesComponent id='particles' />
        <p className='text-sm font-semibold'>Hey, I&apos;m</p>
        <div className='text-2xl md:text-4xl font-bold text-slate-900 mt-2'>
          <Typewriter
            options={{
              strings: ['Musannif Rasheed', 'Full Stack', 'Developer'],
              autoStart: true,
              loop: true,
            }}
          />
          <div className='flex gap-5 mt-5 justify-center'>
            <Link href={'https://github.com/mouus'}><FaGithub size={20} /></Link>
            <Link href={'https://www.linkedin.com/in/ahmed-rasheed-378b152a1/'}><FaLinkedin size={20} /></Link>
          </div>
        </div>
      </div>

      <div id='about' className='bg-slate-950 mt-16 lg:p-10'>
        <div className='flex flex-col mt-2 lg:mt-8 lg:ml-24'>
          <div className='text-center lg:text-left'>
            <p className='text-white text-xs pt-4 lg:ml-14'>Get To Know More</p>
            <h1 className='text-white text-3xl md:text-5xl mt-2 font-bold'>About Me</h1>
          </div>
          <div className='flex px-4 flex-col md:flex-row gap-5 mt-8 lg:mt-4 justify-center'>
            <div className='p-6 md:p-8 px-8 md:px-12 rounded-xl border-2 border-white text-white text-center'>
              <div className='justify-center flex flex-row mb-1'>
                <AiFillSafetyCertificate />
              </div>
              <h1 className='font-bold mb-2'>Experience</h1>
              <p className='text-sm'>3+ Years</p>
              <p className='text-sm'>Full Stack Development</p>
            </div>
            <div className='p-6 md:p-8 px-8 md:px-12 rounded-xl border-2 border-white text-white text-center'>
              <div className='justify-center flex flex-row mb-1'>
                <PiCertificateFill />
              </div>
              <h1 className='font-bold mb-2'>Education</h1>
              <p className='text-sm'>Studying for an</p>
              <p className='text-sm'>undergraduate degree</p>
            </div>
          </div>
          <div className='mt-6 p-4 md:p-6 text-center lg:text-left'>
            <p className='text-white'>
              Hey, my name is Musannif Rasheed, a 27-year-old accomplished full-stack developer with nearly four years of experience.
              I have worked in various developer roles and am currently an indie hacker, focused on launching my own SaaS product.
              My journey in programming is driven by passion and self-discipline. As Steve Jobs once said,
              &quot;The only way to do great work is to love what you do.&quot; I embody this philosophy, consistently delivering high-quality,
              innovative solutions. With a strong foundation in both front-end and back-end development,
              I am dedicated to pushing the boundaries of technology and making a significant impact in the industry.
            </p>
          </div>
        </div>
      </div>

      <div id='experience' className='bg-slate-950 lg:p-10 px-5 lg:px-0'>
        <div className='flex flex-col lg:mt-8 lg:ml-24'>
          <div className='text-center lg:text-left'>
            <p className='text-white text-xs pt-4 lg:ml-14'>Explore My</p>
            <h1 className='text-white text-3xl md:text-5xl mt-2 font-bold'>Experience</h1>
          </div>
          <div className='flex flex-col md:flex-row mt-6 gap-5 justify-center'>
            <div className='text-white border-2 md:ml-6 border-white py-5 md:py-8 lg:py-11 md:px-8 lg:px-10 rounded-lg'>
              <div className='text-center'>
                <h1 className='text-lg font-bold text-slate-200'>Frontend Development</h1>
              </div>
              <div className='mt-6 grid grid-cols-2 gap-4'>
                <div className='pl-2'>
                  {/* Column 1 */}
                  <div className='flex gap-2'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>HTML</h3>
                      <p className='text-xs text-gray-100'>Experienced</p>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-1'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>CSS</h3>
                      <p className='text-xs text-gray-100'>Experienced</p>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-1'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>JavaScript</h3>
                      <p className='text-xs text-gray-100'>Intermediate</p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Column 2 */}
                  <div className='flex gap-2'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>Bootstrap</h3>
                      <p className='text-xs text-gray-100'>Intermediate</p>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-1'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>Tailwind CSS</h3>
                      <p className='text-xs text-gray-100'>Intermediate</p>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-1'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>Material UI</h3>
                      <p className='text-xs text-gray-100'>Basic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-white border-2 md:mr-6 border-white py-5 md:py-8 lg:py-11 md:px-8 lg:px-10 rounded-lg'>
              <div className='text-center'>
                <h1 className='text-lg font-bold text-slate-200'>Backend Development</h1>
              </div>
              <div className='mt-6 grid grid-cols-2 gap-4'>
                <div className='pl-2'>
                  {/* Column 1 */}
                  <div className='flex gap-2'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>PostgreSQL</h3>
                      <p className='text-xs text-gray-100'>Basic</p>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-1'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>Node.js</h3>
                      <p className='text-xs text-gray-100'>Intermediate</p>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-1'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>Git</h3>
                      <p className='text-xs text-gray-100'>Intermediate</p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Column 2 */}
                  <div className='flex gap-2 '>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>Express.js</h3>
                      <p className='text-xs text-gray-100'>Basic</p>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-1'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>Supabase</h3>
                      <p className='text-xs text-gray-100'>Intermediate</p>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-1'>
                    <IoMdCheckmarkCircle className='text-white mt-1' />
                    <div>
                      <h3 className='font-semibold text-md'>Firebase</h3>
                      <p className='text-xs text-gray-100'>Basic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='projects' className='bg-slate-950 lg:p-10 px-5 lg:px-0'>
        <div className='flex flex-col lg:mt-8 lg:ml-24'>
          <div className='text-center lg:text-left'>
            <p className='text-white text-xs pt-4 lg:ml-14'>Browse My</p>
            <h1 className='text-white text-3xl md:text-5xl mt-2 font-bold'>Projects</h1>
          </div>
          <div className='flex flex-col mt-6 gap-10'>
            {/* Project 1 */}
            <div className='flex flex-col md:flex-row items-center md:items-start'>
              <Image
                src={'/img/star.png'}
                width={400}
                height={500}
                className='rounded-xl'
              />
              <div className='mt-4 md:mt-0 md:ml-4 text-white'>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                  <h2 className='text-md font-semibold'>
                    <span className='text-xl'>1#</span> Star-shipment
                  </h2>
                  <Link href={'https://github.com/mouus/star-shipment'}>
                    <div className='flex gap-2 items-center'>
                      <FaGithub size={18} />
                      <p className='text-xs text-blue-500'>browse on github</p>
                    </div>
                  </Link>
                </div>
                <p className='max-w-lg mt-2'>
                  Star-shipment is an ongoing web platform built with Next.js and
                  Tailwind CSS, connecting buyers with suppliers. The project is
                  currently under development for a client, with a scalable backend to
                  be implemented using Supabase.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className='flex flex-col md:flex-row items-center md:items-start'>
              <div className='text-white order-2 md:order-1 md:mr-4'>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                  <h2 className='text-md font-semibold'>
                    <span className='text-xl'>2#</span> Sithaana-hardware
                  </h2>
                  <Link href={'https://github.com/mouus/sithaana'}>
                    <div className='flex gap-2 items-center'>
                      <FaGithub size={18} />
                      <p className='text-xs text-blue-500'>browse on github</p>
                    </div>
                  </Link>
                </div>
                <p className='max-w-lg mt-2'>
                  Sithaana-hardware is a hardware-centric platform built using Next.js,
                  Tailwind CSS, and Supabase for the backend. It includes an admin
                  dashboard for efficient management. Currently an ongoing project
                  under development.
                </p>
              </div>
              <Image
                src={'/img/sithaana.png'}
                width={400}
                height={500}
                className='rounded-xl order-1 md:order-2'
              />
            </div>
            {/* Project 3 */}
            <div className='flex flex-col md:flex-row items-center md:items-start'>
              <Image
                src={'/img/zaff.png'}
                width={400}
                height={500}
                className='rounded-xl'
              />
              <div className='mt-4 md:mt-0 md:ml-4 text-white'>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                  <h2 className='text-md font-semibold'>
                    <span className='text-xl'>3#</span> Zaff-profile
                  </h2>
                  <Link href={'https://github.com/mouus/zaff-profile'}>
                    <div className='flex gap-2 items-center'>
                      <FaGithub size={18} />
                      <p className='text-xs text-blue-500'>browse on github</p>
                    </div>
                  </Link>
                </div>
                <p className='max-w-lg mt-2'>
                Developed a frontend website for a client using Next.js and TailwindCSS. 
                This project showcased my ability to deliver responsive and modern designs 
                tailored to client needs.
                </p>
              </div>
            </div>
            {/* Project 4 */}
            <div className='flex flex-col md:flex-row items-center md:items-start'>
              <div className='text-white'>
                <div className='flex flex-col md:flex-row items-center gap-3'>
                  <h2 className='text-md font-semibold'>
                    <span className='text-xl'>4#</span> One-bloodbank
                  </h2>
                  <Link href={'https://github.com/mouus/onebloodbank'}>
                    <div className='flex gap-2 items-center'>
                      <FaGithub size={18} />
                      <p className='text-xs text-blue-500'>browse on github</p>
                    </div>
                  </Link>
                </div>
                <p className='max-w-lg mt-2'>
                  One-blood bank is a React Native app developed to connect blood
                  donors and recipients in the Maldives, addressing the challenge of
                  finding blood. The project was paused as the client shifted focus to
                  other ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
