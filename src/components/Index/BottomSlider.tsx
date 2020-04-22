import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

// Component
import {Image} from "../Shared/elements/images";

// Image and style
import './slider.scss'
import {Props} from "../../models/Props";



export default class BottomSlider extends Component<Props> {
  render() {
    let items = this.props.items;

    const settings = {
      dots: false,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5.5,
      slidesToScroll: 2,
      initialSlide: -0.5,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };



    let renderSlider = items.map((item, n: number) => {
      return (
          <div key={n} className={'bottom-slider'}>
            <NavLink to={item.link}>
            < Image image={item.image}
                    altText={item.title}
                    ariaLabel={item.ariaLabel}
                    class={'bottom-slider__image'} />
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
