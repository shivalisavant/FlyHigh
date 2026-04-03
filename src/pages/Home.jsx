import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesGrid from '../components/FeaturesGrid';
import PricingSection from '../components/PricingSection';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturesGrid />
            <PricingSection />
            <NewsletterSection />
        </>
    );
};

export default Home;
