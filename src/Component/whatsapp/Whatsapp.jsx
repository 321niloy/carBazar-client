
import React from 'react';
import whatsapp from '../../../public/image/whats-appgif.gif'; // Assuming you have an image for WhatsApp
export default function WhatsappAPK() {
  return (
    <>
      <div className="fixed bottom-24 right-10 w-14 border-green-400 rounded-full z-50">
        <a href="https://wa.me/88001951600545" target="_blank" rel="noopener noreferrer">
          <img className="border-green-400 rounded-full" src={whatsapp} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}