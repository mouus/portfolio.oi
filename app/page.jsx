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

export default function Home() {
  return (
    <main className=''>
      <div className='text-center mt-32'>
          <ParticlesComponent id='particles'/>
        <p className=' text-sm font-semibold'>Hey, i'm</p>
        <div className='text-4xl font-bold text-slate-900 mt-2'>  
            <Typewriter
                  options={{
                    strings: ['Musannif Rasheed','Full Stack', 'Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <div className='flex gap-5 mt-5 justify-center'>
                  <Link href={'#'}><FaGithub size={20} /></Link>
                  <Link href={'#'}> <FaLinkedin  size={20}/></Link> 
                </div>
        </div>
      </div>
      <div  id='about' className='flex bg-slate-950  mt-16 lg:p-10 '>
                 <div  className='flex flex-col mt-2 lg:mt-8 lg:ml-24'>
                    <div className='text-center lg:text-left'>
                      <p className='text-white text-xs pt-4 lg:ml-14'>Get To Know More</p>
                      <h1 className='text-white text-5xl mt-2 font-bold'>About Me</h1>
                    </div>
                    <div className='flex flex-row gap-5 mt-8 lg:mt-4 justify-center'>
                      <div className= 'p-8 px-12 rounded-xl border-2 border-white text-white text-center'>
                          <div className='justify-center flex flex-row mb-1'>
                            <AiFillSafetyCertificate /> 
                          </div>
                          <h1 className='font-bold mb-2'>Experience</h1>
                          <p className='text-sm'>3+ Years</p>
                          <p className='text-sm'>Full Stack Development</p>
                      </div>
                      <div className= 'p-8 lg:mr-24 px-12 rounded-xl border-2 border-white text-white text-center'>
                          <div className='justify-center flex flex-row mb-1'>
                            <PiCertificateFill />
                          </div>
                          <h1 className='font-bold mb-2'>Education</h1>
                          <p className='text-sm'>Studying for an</p>
                          <p className='text-sm'>undergraduate degree</p>
                      </div>
                    </div>
                    <div className='lg:ml-32 lg:mr-14 mt-6 p-6 text-center lg:text-left '>
                      <p className='text-white '>
                        Hey, my name is Musannif Rasheed, a 27-year-old accomplished fullstack developer with nearly four years of experience.
                        I have worked in various developer roles and am currently an indie hacker, focused on launching my own SaaS product. 
                        My journey in programming is driven by passion and self-discipline. As Steve Jobs once said, 
                        "The only way to do great work is to love what you do." I embody this philosophy, consistently delivering high-quality,
                        innovative solutions. With a strong foundation in both front-end and back-end development, 
                        I am dedicated to pushing the boundaries of technology and making a significant impact in the industry
                      </p>
                    </div> 
                 </div> 
      </div>
      <div  id='experience' className=' bg-slate-950 lg:p-10 px-5 lg:px-0'>
                 <div className='flex flex-col lg:mt-8 lg:ml-24'>
                    <div className='text-center lg:text-left'>
                      <p className='text-white text-xs pt-4 lg:ml-14'>Explore My</p>
                      <h1 className='text-white text-5xl mt-2 font-bold'>Experience</h1>
                    </div>
                    <div className='flex flex-col lg:flex-row mt-6 gap-5 justify-center'>
                        <div className='text-white border-2 lg:ml-6 border-white py-5 lg:py-11 lg:px-10 rounded-lg'>
                          <div className='text-center'>
                            <h1 className='text-lg font-bold text-slate-200'>Frontend Development</h1>
                          </div>
                          <div>
                            <div className='flex justify-center lg:gap-10 gap-40 mt-6'>
                              <div>
                                <div className='flex gap-2'>
                                  <IoMdCheckmarkCircle className='text-white mt-1' />
                                  <div>
                                    <h3 className='font-semibold text-md'>Html</h3>
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
                                    <h3 className='font-semibold text-md'>Javascript</h3>
                                    <p className='text-xs text-gray-100'>Intermediate</p>
                                  </div>
                                </div>
                              </div>
                              <div>
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
                                    <h3 className='font-semibold text-emerald-50'>Tailwind CSS</h3>
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
                        </div>
                        <div className='text-white lg:mr-24 border-2 border-white py-5 lg:py-11 lg:px-10 rounded-lg'>
                          <div className='text-center'>
                            <h1 className='text-lg font-bold text-slate-200'>Backend Development</h1>
                          </div>
                          <div>
                            <div className='flex justify-center lg:gap-10 gap-40 mt-6'>
                              <div>
                                <div className='flex gap-2'>
                                  <IoMdCheckmarkCircle className='text-white mt-1' />
                                  <div>
                                    <h3 className='font-semibold text-md'>PostgresSQL</h3>
                                    <p className='text-xs text-gray-100'>Basic</p>
                                  </div>
                                </div>
                                <div className='flex gap-2 mt-1'>
                                  <IoMdCheckmarkCircle className='text-white mt-1' />
                                  <div>
                                    <h3 className='font-semibold text-md'>Nodejs</h3>
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
                                <div className='flex gap-2'>
                                  <IoMdCheckmarkCircle className='text-white mt-1' />
                                  <div>
                                    <h3 className='font-semibold text-md'>Express Js</h3>
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
      </div>
      <div  id='projects' className='bg-slate-950 lg:p-10 px-5 lg:px-0'>
                 <div  className='flex flex-col lg:mt-8 lg:ml-24'>
                    <div className='text-center lg:text-left'>
                      <p className='text-white text-xs pt-4 lg:ml-14'>Browse My</p>
                      <h1 className='text-white text-5xl mt-2 font-bold'>Projects</h1>
                    </div>
                    <div className='flex mt-6 gap-5 justify-center'>
                       <h1 className='text-white lg:mr-24'>Working In Progress...</h1>
                    </div>
                 </div> 
      </div>
    </main>
  );
}
