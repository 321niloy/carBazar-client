import React from 'react';
import Slider from '../Component/slider/Slider';
import Banner from '../Component/banner/Banner';
import Contact from '../Component/Contact';
import Topsells from '../Component/Topsells';
import Testimonial from '../Component/Testimonial/Testimonial';
import Feedback from '../Component/feddandrating/FeedRating';



const Home = () => {
    return (
        <>
            <div className='lg:flex '>
            <div className='lg:w-1/2 md:w-full  w-fit'><Banner></Banner></div>
            <div className='lg:w-1/3 md:w-full'><Slider></Slider></div>
            
            </div>
            <div><Topsells></Topsells></div>
            <div><Testimonial></Testimonial></div>
            <div><Feedback></Feedback></div>
            <div><Contact></Contact></div>
        </>
    );
};

export default Home;