import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

// Component
import {Image} from "../base/elements/images";

// Image and style
import slide1 from '../../assets/images/slider1.jpg'
import slide2 from '../../assets/images/slider2.jpg'
import slide3 from '../../assets/images/slider3.jpg'
import './main-slider.scss'

export default class MainSlider extends Component {
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    const props = [
      {
        link: '/',
        image: slide1,
        ariaLabel: 'Slider',
        author: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
        title: 'How to Create a PayPal Donate Button for Your WordPress Site',
        content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
      },
      {
        link: '/',
        image: slide2,
        ariaLabel: 'Slider',
        author: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
        title: 'How to Create a PayPal Donate Button for Your WordPress Site',
        content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
      },
      {
        link: '/',
        image: slide3,
        ariaLabel: 'Slider',
        author: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
        title: 'How to Create a PayPal Donate Button for Your WordPress Site',
        content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
      }
    ];
  
  
    let renderSlider = props.map((props, n: number) => {
      return (
      <div key={n} className={'header-slider'}>
        <NavLink to={props.link}>
          < Image image={props.image}
                  altText={props.title}
                  ariaLabel={props.ariaLabel}
                  className={'header-slider__image'} />
          <div className={'header-slider__text'}>
            <p className={'content__subtitle'}>{props.author}</p>
            <h2 className={'content__title'}>{props.title}</h2>
            <p  className={'content__text--slider'}>{props.content}</p>
          </div>
        </NavLink>
      </div>
      );
    });
    
    return (
    <div>
      <Slider {...settings}>
        {renderSlider}
      </Slider>
    </div>
    );
  }
}
