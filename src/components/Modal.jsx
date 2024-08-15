// src/components/Modal.js
import React, { forwardRef, useState } from 'react';

import { Datepicker } from 'flowbite-react';


const CheckboxOptions = () => {
    return (
        <>
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li><a>Male</a></li>
            <li><a>Female</a></li>
            <li><a>Other</a></li>
            </ul>

            <input type="text" placeholder="Country" className="input w-full max-w-xs" />
        </>
    )
};

const BookOptions = () => {
    return (
        <>
            <p>Number of Books Read in a year</p>
            <input type="text" placeholder="Books" className="input input-bordered w-full max-w-xs" />
        </>
    )
};

const RelationshipOptions = () => {
    return (
        <>
            <p>Number of times you call mom in a year</p>
            <input type="text" placeholder="Books" className="input input-bordered w-full max-w-xs border" />
        </>
    )
};



const Modal = forwardRef(({ id }, ref) => {
    

    const [display, setDisplay] = useState(null)

    const [valid, setValid] = useState(false)

    const changeDisplay = (newDisplay) => {
        setDisplay(null)
        if (newDisplay == "checkbox"){
            setDisplay(CheckboxOptions)
        }
        else if (newDisplay == "book"){
            setDisplay(BookOptions)
        }
        else if (newDisplay == "relationship") {
            setDisplay(RelationshipOptions)
        }
    };

  return (
    <dialog ref={ref} id={id} className="modal items-center">
      <div className="modal-box h-3/4">

        <Datepicker/>
        
        <div className="flex space-x-4 m-8">
            <svg onMouseEnter={() => changeDisplay("checkbox")} className="flex-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            <svg onMouseEnter={() => changeDisplay("book")} className="flex-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            <svg onMouseEnter={() => changeDisplay("relationship")} className="flex-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
            <svg onMouseEnter={() => changeDisplay(null)} className="flex-1 w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
        </div>
        

        <div class={`rounded p-4 border animate-fadeIn ${valid ? 'border-green-500' : 'border-red-500'}`}>
            {display}
        </div>
        

      </div>


      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>

    </dialog>
  );
});

export default Modal;