import React from 'react';
import Header from '../components/Header';
import Hope from '../components/Hope';
import Bird from '../components/Bird';
import Akardion from '../components/Akardion';
import Footer from '../components/Footer';

const MainPage = () => {
    return (
        <div className="main-page-container">
            <Header />
            <Hope />
            <Bird />
            <Akardion />
            <Footer />
        </div>
    );
};

export default MainPage;