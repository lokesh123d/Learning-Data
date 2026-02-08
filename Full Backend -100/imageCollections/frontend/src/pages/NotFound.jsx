import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  
  return (
    <div className='min-h-screen bg-white flex flex-col justify-center items-center'>
      <h1 className='text-9xl font-bold text-black'>404</h1>
      <p className='text-2xl text-gray-600 mt-4'>Page Not Found</p>
      <button 
        onClick={() => navigate('/allImage')}
        className='mt-8 px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors cursor-pointer'
      >
        Go to Gallery
      </button>
    </div>
  )
}

export default NotFound