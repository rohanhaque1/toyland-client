import React from 'react';
import Header from '../HeaderAndFooter/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../HeaderAndFooter/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;