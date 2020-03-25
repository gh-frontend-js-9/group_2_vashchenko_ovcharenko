import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

// Component
import {Image} from "../Shared/elements/images";

// Image and style
import sliderImg from '../../assets/images/BottomSlider.png';
import './slider.scss'

export default class BottomSlider extends Component {
  render() {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5.5,
      slidesToScroll: 2,
      initialSlide: -0.5,
      responsive: [
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
          breakpoint: 600,
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
    const props = [
      {
        link: '/Post',
        image: sliderImg,
        ariaLabel: 'UI design article',
        title: 'UI design',
      },
      {
        link: '/Post',
        image: sliderImg,
        ariaLabel: 'UI design category',
        title: 'UI design',
      },
      {
        link: '/Post',
        image: sliderImg,
        ariaLabel: 'SEO category',
        title: 'SEO',
      },
      {
        link: '/Post',
        image: sliderImg,
        ariaLabel: 'Popular article',
        title: 'Popular',
      },
      {
        link: '/Post',
        image: sliderImg,
        ariaLabel: 'Essentials',
        title: 'Essentials',
      },
      {
        link: '/Post',
        image: sliderImg,
        ariaLabel: 'GeekHub',
        title: 'GeekHub',
      },
      {
        link: '/Post',
        image: sliderImg,
        ariaLabel: 'Projects',
        title: 'Project',
      },
      {
        link: '/Post',
        image: sliderImg,
        ariaLabel: 'Route on Post page',
        title: 'NEW page',
      },
      {
        link: '/',
        image: sliderImg,
        ariaLabel: 'Home page',
        title: 'Go home',
      },
    ];
  
  
    let renderSlider = props.map((props, n: number) => {
      return (
      <div key={n} className={'bottom-slider'}>
        <NavLink to={props.link}>
          < Image image={props.image}
                  altText={props.title}
                  ariaLabel={props.ariaLabel}
                  class={'bottom-slider__image'} />
          <h3 className={'bottom-slider__title'}>{props.title}</h3>
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
