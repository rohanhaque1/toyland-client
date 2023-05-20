import React from 'react';
import Gallery from '../Pages/Gallery';
import Banner from '../Pages/Banner';
import OurActivities from '../Pages/OurActivities';
import ShopCategory from '../Pages/ShopCategory';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
            <ShopCategory />
            <Gallery />
            <OurActivities />
        </div>
    );
};

export default Home;