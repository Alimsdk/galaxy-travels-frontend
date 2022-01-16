import React from 'react';
import Banner from '../Banner/Banner';
import BookTickets from '../BookTickets/BookTickets';
import Packages from '../Packages/Packages';
import Qualities from '../Qualities/Qualities';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookTickets></BookTickets>
            <Services></Services>
            <Packages></Packages>
            <Qualities></Qualities>
        </div>
    );
};

export default Home;