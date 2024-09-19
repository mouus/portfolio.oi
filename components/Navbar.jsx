'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className='bg-white/35 shadow-md'>
      <div className='flex items-center justify-between max-w-screen-lg mx-auto p-4'>
        <div>
          <h1 className='text-lg font-semibold'>My Portfolio</h1>
        </div>
        {/* Desktop Menu */}
        <div className='hidden md:flex gap-5 text-sm text-slate-500'>
          <Link className='hover:text-slate-950' href={'#about'}>About</Link>
          <Link className='hover:text-slate-950' href={'#experience'}>Experience</Link>
          <Link className='hover:text-slate-950' href={'#projects'}>Projects</Link>
          <Link className='hover:text-slate-950' href={'#contact'}>Contact</Link>
        </div>
        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setNavOpen(!navOpen)} className='text-slate-500 focus:outline-none'>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {navOpen && (
        <div className='md:hidden bg-white'>
          <div className='flex flex-col items-center gap-5 text-sm text-slate-500 py-4'>
            <Link className='hover:text-slate-950' href={'#about'} onClick={() => setNavOpen(false)}>About</Link>
            <Link className='hover:text-slate-950' href={'#experience'} onClick={() => setNavOpen(false)}>Experience</Link>
            <Link className='hover:text-slate-950' href={'#projects'} onClick={() => setNavOpen(false)}>Projects</Link>
            <Link className='hover:text-slate-950' href={'#contact'} onClick={() => setNavOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
