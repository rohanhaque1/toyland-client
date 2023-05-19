import React from 'react';
import Gallery from '../Pages/Gallery';
import Banner from '../Pages/Banner';
import OurActivities from '../Pages/OurActivities';
import ShopCategory from '../Pages/ShopCategory';

const Home = () => {
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