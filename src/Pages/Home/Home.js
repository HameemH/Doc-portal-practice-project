import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Info from './Info/Info';
import Makeappointment from './Makeappointment';
import Services from './Services/Services';
import Review from './Reviews';
import Contact from './Contact';
import Footer from '../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <Makeappointment></Makeappointment>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;