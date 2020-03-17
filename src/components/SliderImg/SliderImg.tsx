import React, { Component } from "react";
import Slider from "react-slick";
import './SliderImg.scss'
import SliderImgCard from "./SliderImgCard/SliderImgCard";
export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1360,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };
        return (
            <div className={'card-slider-wrapper'}>
                <div className='card-slider-img-title'>
                <div className='title-responsive'>Responsive</div>
                <div className={'view-all'}>View all</div>
                </div>

                <Slider {...settings}>
                    <div>
                        <SliderImgCard/>
                        <div className='card-slider-title'>UI design</div>
                    </div>
                    <div>
                        <SliderImgCard/>
                        <div className='card-slider-title'>UI design</div>
                    </div>
                    <div>
                        <SliderImgCard/>
                        <div className='card-slider-title'>UI design</div>
                    </div>
                    <div>
                        <SliderImgCard/>
                        <div className='card-slider-title'>UI design</div>
                    </div>
                    <div>
                        <SliderImgCard/>
                        <div className='card-slider-title'>UI design</div>
                    </div>
                    <div>
                        <SliderImgCard/>
                        <div className='card-slider-title'>UI design</div>
                    </div>
                    <div>
                        <SliderImgCard/>
                        <div className='card-slider-title'>UI design</div>
                    </div>
                    <div>
                        <SliderImgCard/>
                        <div className='card-slider-title'>UI design</div>
                    </div>
                </Slider>
            </div>
        );
    }
}


