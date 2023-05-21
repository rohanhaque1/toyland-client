import React from 'react';
import Gallery from '../Pages/Gallery';
import Banner from '../Pages/Banner';
import OurActivities from '../Pages/OurActivities';
import ShopCategory from '../Pages/ShopCategory';
import useTitle from '../../hooks/useTitle';
import Review from '../Pages/Review';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner />
            <ShopCategory />
            <Gallery />
            <OurActivities />
            <Review />
        </div>
    );
};

export default Home;