import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between py-4 px-10 md:px-20 bg-black items-center'>
            <div className='text-2xl md:text-3xl font-bold text-white cursor-pointer' onClick={() => navigate('/')}>
                Image Collections
            </div>
            <nav className='flex list-none gap-6 md:gap-9'>
                <li 
                    onClick={() => navigate('/create')} 
                    className='text-white cursor-pointer hover:text-gray-300 transition-colors font-medium'
                >
                    Create
                </li>
                <li 
                    onClick={() => navigate('/allImage')} 
                    className='text-white cursor-pointer hover:text-gray-300 transition-colors font-medium'
                >
                    Gallery
                </li>
            </nav>
        </div>
    )
}

export default Navbar