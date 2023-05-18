import React from 'react';
import Gallery from '../Pages/Gallery';
import Banner from '../Pages/Banner';
import OurActivities from '../Pages/OurActivities';

const Home = () => {
    return (
        <div>
            <Banner />
            <OurActivities />
            <Gallery />
        </div>
    );
};

export default Home;