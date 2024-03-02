// src/components/Container.js
import React from 'react';
import { Link } from 'react-router-dom';

function Container() {
    return (
        <section className="flex flex-col text-center items-center justify-center lg:text-left lg:items-start lg:p-[10rem]">
            <div className="lg:w-[20rem] m-auto mt-[3rem] p-[2rem] lg:p-0 lg:m-0">
                <h1 className="mt-20 lg:mt-0 text-white text-[2em] lg:text-[4em] font-bold">International Network </h1>
                <h4 className="text-white mb-10">We know how large objects will act,
                    but things on a small scale.</h4>
            </div>
            <div className="w-[10rem] lg:w-auto flex flex-col gap-3 mb-[2rem] lg:flex-row">
                {/* Use Link for navigation to /signup */}
                <Link to="/signup" className="btn bg-[#021C4E] hover:bg-blue-700 text-white py-3 px-6 rounded-full">Sign up</Link>
                <button type="button" className="btn border border-white hover:bg-gray-200 text-white py-3 px-6 rounded-full">Log in</button>
            </div>
        </section>
    );
}

export default Container;
