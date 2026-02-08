import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ImageCreate = () => {
    const navigate = useNavigate();
    const [caption, setCaption] = useState('')

    async function submitHandler(e) {
        e.preventDefault()
        const formData = new FormData(e.target);
        const response = await axios.post('http://localhost:8000/image/create', formData);
        setCaption('')
        e.target.reset()
        navigate('/allImage');
    }

    return (  
        <div className='min-h-screen bg-white flex justify-center items-center py-10'>
            <div className='w-96 bg-white border-2 border-black rounded-lg p-8 shadow-lg'>
                <h1 className='text-2xl font-bold text-black text-center mb-6'>Add New Image</h1>
                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-5'>
                    <div>
                        <label className='block text-black font-medium mb-2'>Choose Image</label>
                        <input 
                            type="file" 
                            name='image' 
                            accept='image/*' 
                            required 
                            className='w-full py-3 px-4 border-2 border-black rounded-md bg-white text-black cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-black file:text-white file:cursor-pointer' 
                        />
                    </div>
                    <div>
                        <label className='block text-black font-medium mb-2'>Caption</label>
                        <input 
                            type="text" 
                            name='caption'
                            placeholder='Say something about the image...' 
                            required  
                            value={caption} 
                            onChange={(e) => setCaption(e.target.value)} 
                            className='w-full py-3 px-4 border-2 border-black rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black' 
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors cursor-pointer mt-2'
                    >
                        Upload Image
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ImageCreate