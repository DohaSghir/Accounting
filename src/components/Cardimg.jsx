
import * as React from 'react';

export default function Cardimg(props) {

    return (
        <div className=' card lg:w-[20rem] shadow-lg border border-[#021C4E]  bg-white rounded-[30px] w-[15rem]	' >
            {/*gradient */}
            {/*profile */}

            <div className='flex flex-col items-center p-6 text-center' >
                <img className='h-[150px] w-[150px] rounded-[50%] border border-[#021C4E]  mt-[-75px] p-[5px] bg-white ' src={props.img} alt="" srcset="" />
                <p className='text-black font-bold mb-[10px]' >{props.name}</p>
            <p className='text-black font-thin mb-[10px]' >{props.info} </p>
                <a className=' hover:opacity-90 text-sky-700	 underline' href= {props.email}>Contact Me</a> 
            </div>


        </div>
    );
}


