import React from 'react';

import Navbar from '../../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer';
import WhatsappAPK from '../../Component/whatsapp/Whatsapp';
import Telegram from '../../Component/Telegram/Telegram';





const Main = () => {
    return (
        <div>
           
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <WhatsappAPK></WhatsappAPK>
            <Telegram></Telegram>
         
        </div>
    );
};

export default Main;