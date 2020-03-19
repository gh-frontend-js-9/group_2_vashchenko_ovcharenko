import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

// Component
import {Image} from "../base/elements/images";

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
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const props = [
      {
        link: '/new',
        image: sliderImg,
        ariaLabel: 'UI design article',
        title: 'UI design',
      },
      {
        link: '/new',
        image: sliderImg,
        ariaLabel: 'UI design category',
        title: 'UI design',
      },
      {
        link: '/new',
        image: sliderImg,
        ariaLabel: 'SEO category',
        title: 'SEO',
      },
      {
        link: '/new',
        image: sliderImg,
        ariaLabel: 'Popular article',
        title: 'Popular',
      },
      {
        link: '/new',
        image: sliderImg,
        ariaLabel: 'Essentials',
        title: 'Essentials',
      },
      {
        link: '/new',
        image: sliderImg,
        ariaLabel: 'GeekHub',
        title: 'GeekHub',
      },
      {
        link: '/new',
        image: sliderImg,
        ariaLabel: 'Projects',
        title: 'Project',
      },
      {
        link: '/new',
        image: sliderImg,
        ariaLabel: 'Route on New page',
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
