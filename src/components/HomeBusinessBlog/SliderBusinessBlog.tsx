import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

// Component
import {Image} from "../Shared/elements/images";

// Image and style
import sliderImg from '../../assets/images/BottomSlider.png';
import '../Index/slider.scss'

export default class SliderBusinessBlog extends Component {
  render() {
   const settings = {
      dots: false,
      arrows: true,
      autoplay: true,
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
        link: '/read',
        image: sliderImg,
        ariaLabel: 'UI design article',
        title: 'UI design',
      },
      {
        link: '/read',
        image: sliderImg,
        ariaLabel: 'UI design category',
        title: 'UI design',
      },
      {
        link: '/read',
        image: sliderImg,
        ariaLabel: 'SEO category',
        title: 'SEO',
      },
      {
        link: '/read',
        image: sliderImg,
        ariaLabel: 'Popular article',
        title: 'Popular',
      },
      {
        link: '/read',
        image: sliderImg,
        ariaLabel: 'Essentials',
        title: 'Essentials',
      },
      {
        link: '/read',
        image: sliderImg,
        ariaLabel: 'GeekHub',
        title: 'GeekHub',
      },
      {
        link: '/read',
        image: sliderImg,
        ariaLabel: 'Projects',
        title: 'Project',
      },
      {
        link: '/read',
        image: sliderImg,
        ariaLabel: 'Route on Post page',
        title: 'NEW page',
      },
      {
        link: '/',
        image: sliderImg,
        ariaLabel: 'HomeGrid page',
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
