import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const ShowImage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        axios.get('http://localhost:8000/image/all')
            .then((res) => {
                setPosts(res.data.allImages);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/image/delete/${id}`)
            .then(() => {
                setPosts(posts.filter(post => post._id !== id));
            })
            .catch((err) => console.log(err));
    };



    if (loading) {
        return (
            <div className='min-h-screen bg-white flex justify-center items-center'>
                <p className='text-black text-xl'>Loading...</p>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-white py-10 px-5'>
            <h1 className='text-4xl font-bold text-center text-black mb-10'>Image Gallery</h1>
            
            {posts.length === 0 ? (
                <p className='text-center text-gray-500 text-lg'>No images found. Create one!</p>
            ) : (
                <div className='flex justify-center items-stretch gap-6 flex-wrap'>
                    {posts.map((post) => (
                        <div key={post._id} className='w-80 bg-white border-2 border-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                            <img 
                                src={post.image} 
                                alt={post.caption} 
                                className='w-full h-56 object-cover'
                            />
                            <div className='p-4'>
                                <h3 className='text-lg font-semibold text-black text-center'>
                                    {post.caption}
                                </h3>
                                <button 
                                    onClick={() => handleEdit(post._id)}
                                    className='mt-4 w-full py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors cursor-pointer'
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => handleDelete(post._id)}
                                    className='mt-4 w-full py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors cursor-pointer'
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ShowImage