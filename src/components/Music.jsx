import React from 'react';
import { FaRegGrinHearts } from "react-icons/fa";
function Music (){
    return (
        <div className='h-24 min-w-64 w-fit bg-white pl-2 py-2 flex gap-3 rounded-md'>
            <div className="img h-20 w-20 bg-red-600 rounded-full overflow-hidden">
                <img className="object-cover h-full w-full " src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='flex flex-col items-center justify-center '>
                <h1 className='font-semibold uppercase text-lg'>moye moye </h1>
                <p className='capitalize text-sm text-gray-500' >Siddhu moosebala </p>
            </div>
            <div className='text-lg h-fit'>
            <FaRegGrinHearts />
            </div>
        </div>
    )
}

export default Music;