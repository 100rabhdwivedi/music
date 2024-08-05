import React from 'react';

function Nav(){
    return (
        <div className='h-20 w-full flex items-center justify-between px-12'>
            <h1 className='uppercase font-bold' >Saurabh</h1>
            <button className='px-4 py-2 bg-[#ff5400] rounded-md text-white'>Favourites: <span className='bg-[#de3604]'>11</span></button>
        </div>
    );
}

export default Nav;