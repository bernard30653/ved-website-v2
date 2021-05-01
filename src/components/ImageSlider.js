import React,{useState} from 'react'
//import Slides from './Slides';
import Photo1 from '../images/網站照片/首頁/Cover_photos/cover_photo_1.jpg';
import Photo2 from '../images/網站照片/首頁/Cover_photos/cover_photo_2.jpg';
import Photo3 from '../images/網站照片/首頁/Cover_photos/cover_photo_3.jpg';
import Photo4 from '../images/網站照片/首頁/Cover_photos/cover_photo_4.jpg';
import Photo5 from '../images/網站照片/首頁/Cover_photos/cover_photo_5.jpg';
import Photo6 from '../images/網站照片/首頁/Cover_photos/cover_photo_6.jpg';
import Photo7 from '../images/網站照片/首頁/Cover_photos/cover_photo_7.jpg';
import Photo8 from '../images/網站照片/首頁/Cover_photos/cover_photo_8.jpg';
import Photo9 from '../images/網站照片/首頁/Cover_photos/cover_photo_9.jpg';
import Photo10 from '../images/網站照片/首頁/Cover_photos/cover_photo_10.jpg';
import './ImageSlider.css';
import {Carousel} from '3d-react-carousal';
function ImageSlider() {
    
    let slides = [
        <img src={Photo1} alt="slide1" className="sliderimg"/>,
        <img src={Photo2} alt="slide2" className="sliderimg"/>,
        <img src={Photo3} alt="slide3" className="sliderimg"/>,
        <img src={Photo4} alt="slide4" className="sliderimg"/>,
        <img src={Photo5} alt="slide5" className="sliderimg"/>,
        <img src={Photo6} alt="slide6" className="sliderimg"/>,
        <img src={Photo7} alt="slide7" className="sliderimg"/>,
        <img src={Photo8} alt="slide8" className="sliderimg"/>,
        <img src={Photo9} alt="slide9" className="sliderimg"/>,
        <img src={Photo10} alt="slide10" className="sliderimg"/>
    ]
    
    return (
        <div className="carousel-outer">
            <h2 className="slider-header">媒體報導</h2>
            <Carousel slides={slides}  autoplay={true} interval={3000}/>
        </div>
    )   
}

export default ImageSlider;
