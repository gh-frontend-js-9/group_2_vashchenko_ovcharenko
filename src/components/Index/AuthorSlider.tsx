import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

// Component
import {Image} from "../Shared/elements/images";

// Image and style
import './slider.scss'
import './AuthorSlider.scss'

import {Props} from "../../models/Props";



class AuthorSlider extends Component<Props> {
    render() {
        let items = this.props.items;

        const settings = {
            dots: false,
            arrow: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1.75,
            slidesToScroll: 2,
            initialSlide: -0.12
        };
        
        let renderSlider = items.map((item, n: number) => {
            return (
                    <div key={n} className={'bottom-slider'}>
                        < Image image={item.image}
                                altText={item.title}
                                ariaLabel={item.ariaLabel}
                                class='bottom-slider-author'/>
                        <NavLink to={item.link}>
                            <h3 className={'bottom-slider__title'}>{item.title}</h3>
                        </NavLink>
                    </div>
            );
        });

        return (
            <div className={'slider__wrapper'}>
                <Slider {...settings}>
                    {renderSlider}
                </Slider>
            </div>
        );
    }
}
export default AuthorSlider;
