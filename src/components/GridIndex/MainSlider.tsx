import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import Slider from "react-slick";

// Image and style
import './slider.scss'

export default class MainSlider extends Component<any> {
  render() {
    let items = this.props.items;
    
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    let renderSlider = items.map((items, n: number) => {
      return (
      <div key={n} className={'header-slider'}>
        <NavLink to={items.link}>
          < div style={ {backgroundImage:`url(${items.image})`} } className={'header-slider__image'} >
            <div className={'header-slider__text'}>
              <p className={'content__subtitle'}>{items.author}</p>
              <h2 className={'content__title'}>{items.title}</h2>
              <p  className={'content__text--slider'}>{items.content}</p>
            </div>
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
