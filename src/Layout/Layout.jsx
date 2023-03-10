import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom"
import Popup from "../pages/Popup/Popup";


const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <Popup/>
        </>
    );
};

export default Layout;