import React, { useRef } from 'react';
import Modal from './components/Modal';
import DarkMode from './components/DarkMode';




const App = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
      console.log("Modal opened");
    } else {
      console.log("Modal ref is null");
    }
  };

  return (
    <>

      <svg onClick={openModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
      </svg>

      <Modal ref={modalRef} id="my_modal_2" />


      
      

      <DarkMode/>
      
    </>
  );
};

export default App;