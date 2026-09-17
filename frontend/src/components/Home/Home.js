import React, { useEffect } from 'react';
import DotNavigation from '../Shared/DotNavigation/DotNavigation';
import Hero from './Hero/Hero';
import PracticeAreas from './PracticeAreas/PracticeAreas';
import About from './About/About';
import InsightsPreview from './InsightsPreview/InsightsPreview';
import Ourpeople from './Ourpeople/Ourpeople';
import Testimonials from './Testimonials/Testimonials';
import ContactForm from './ContactForm/ContactForm';

const Home = () => {
    return (
        <main id="home-scroll-container" className="snap-container">
            <DotNavigation />
            <Hero />
            <PracticeAreas />
            <About />
            <InsightsPreview />
            <Ourpeople />
            <Testimonials />
            <ContactForm />
        </main>
    );
};

export default Home;
