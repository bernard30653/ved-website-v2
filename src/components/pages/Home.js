import React from 'react';
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/首頁/Cover_photos/cover_photo_test.jpg';
import './Home.css';
import ImageSlider from '../ImageSlider';
import Donate from '../Donate';
import Stats from '../Stats';
import Cards from '../Cards';
import News from '../News';
function Home() {
    return (
        <div>
            <BackgroundImage text={"Welcome to VED"} image={coverPhoto}/>
            <ImageSlider/>
            <Donate />
            <Stats/>
            <Cards/>
        </div>
    )
}

export default Home;
