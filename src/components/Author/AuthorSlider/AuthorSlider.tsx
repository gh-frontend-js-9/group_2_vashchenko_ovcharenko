import React, {Component} from 'react';
import Slider from "react-slick";
import SliderImgCard from "../../SliderImg/SliderImgCard/SliderImgCard";
import './AuthorSlider.scss'
import '../../SliderImg/SliderImg.scss'
class AuthorSlider extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 1,
        };
        return (
            <Slider {...settings}>
                <div>
                    <SliderImgCard/>
                    <div className='card-slider-title'>UI design</div>
                </div>
                <div>
                    <SliderImgCard/>
                    <div className='card-slider-title'>UI design</div>
                </div>
            </Slider>
        );
    }
}

export default AuthorSlider;