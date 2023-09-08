import { useState } from "react";
import { Link } from 'react-scroll'
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'

export const NavBar = () =>
{
    const [ click, setClick ] = useState( false )
    const handleClick = () => setClick( !click )

    const content = <>
        <div className='lg:hidden block absolute mt-12 w-full left-0 right-0 bg-primaryLight transition'>
            <ul className='text-center text-xl p-20'>
                <Link spy={ true } smooth={ true } to='Home'>
                    <li className='my-4 py-4 border-b border-slate-600 hover:bg-primary hover:rounded'>Home</li>
                </Link>
                <Link spy={ true } smooth={ true } to='About'>
                    <li className='my-4 py-4 border-b border-slate-600 hover:bg-primary  hover:rounded'>About</li>
                </Link>
                <Link spy={ true } smooth={ true } to='Work'>
                    <li className='my-4 py-4 border-b border-slate-600 hover:bg-primary hover:rounded'>Work</li>
                </Link>
                <Link spy={ true } smooth={ true } to='Contact'>
                    <li className='my-4 py-4 border-b border-slate-600 hover:bg-primary  hover:rounded'>Contact Me</li>
                </Link>
            </ul>
        </div>
    </>

    return (
        <nav className="pt-5 pb-5">
            <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20'>
                <div className='flex items-center flex-'>
                    <span className='text-2xl font-semibold' >Juan José</span>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                            <Link spy={ true } smooth={ true } to='Home'>
                                <li className='transition border-b-2 border-slate-900 hover:border-white cursor-pointer '>Home</li>
                            </Link>
                            <Link spy={ true } smooth={ true } to='About'>
                                <li className=' transition border-b-2 border-slate-900 hover:border-white cursor-pointer '>About</li>
                            </Link>
                            <Link spy={ true } smooth={ true } to='Work'>
                                <li className='transition border-b-2 border-slate-900 hover:border-white cursor-pointer '>Work</li>
                            </Link>
                            <Link spy={ true } smooth={ true } to='Contact'>
                                <li className='transition border-b-2 border-slate-900 hover:border-white cursor-pointer '>Contact Me</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    { click && content }
                </div>
                <button className="block sm:hidden transition" onClick={ handleClick }>
                    { click ? <FaTimes /> : <GiHamburgerMenu /> }
                </button>
            </div>
        </nav>
    )
}
