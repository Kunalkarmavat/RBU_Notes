import React from 'react'
import noteimg from "../assets/noteimg.svg";


function Hero() {
    return (
        <div className='w-5/6 m-auto md:flex justify-between items-center mt-20  '>
            <div className='md:w-1/2 space-y-4 '>
                <p className='text-1xl uppercase ' >Note on the way  ____________________</p>

                <p className='text-5xl font-bold uppercase leading-14' >Score better in your class with our notes </p>

                <h6 className='pb-6 w-3/4'>RBU Note is a free web application that provides notes of rbu teacher at one place, You can access notes any where without download the notes .</h6>


                <button className=' px-18 py-4 bg-blue-500 text-amber-50  rounded '>LETS CHECK</button>
            </div>
            <div className='w-110 '>
                <img src={noteimg} alt="Logo" className='w-full' />

            </div>
        </div>

    )
}

export default Hero


