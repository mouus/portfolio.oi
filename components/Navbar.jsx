import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between max-w-screen-lg mx-auto p-4'>
        <div>
            <h1 className='text-lg font-semibold'>Portfolio</h1>
        </div>
        <div className='gap-5 flex text-sm text-slate-500' >
            <Link className='hover:text-slate-950' href={'#about'}>About</Link>
            <Link className='hover:text-slate-950' href={'#experience'}>Experience</Link>
            <Link className='hover:text-slate-950' href={'#projects'}>Projects</Link>
            <Link className='hover:text-slate-950' href={'#contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar