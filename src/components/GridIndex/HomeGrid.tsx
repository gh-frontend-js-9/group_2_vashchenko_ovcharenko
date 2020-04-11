import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import MainSlider from "./MainSlider";
import BottomSlider from "./BottomSlider";
import {Card} from '../Card/CardOnGrid/Card';
import {MainCard} from "../Card/CardOnGrid/MainCard";

// Images and style

// Import Temp Data from CONST
import * as card from './CardDataCONST';
import * as SliderImg from './SliderCONST';

function HomeGrid() {
  
  return (
  <>
    <MainSlider items={SliderImg.Main}/>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Popular</h2>
      <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
    </div>
    <div className="card__home-wrapper--main">
      <MainCard items={card.Popular}/>
    </div>
    
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Essentials</h2>
      <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
    </div>
    <div className="card__home-wrapper--main">
      <MainCard items={card.Essentials}/>
    </div>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Freelance</h2>
      <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
    </div>
    <div className="card__home-wrapper--main">
      <MainCard items={card.Freelance}/>
    </div>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Reading lists</h2>
      <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
    </div>
    
    <BottomSlider items={SliderImg.Bottom}/>
    
    <div className="card__home-wrapper--main-bottom">
      <Card items={card.Bottom}/>
    </div>
  </>
  );
}

export default HomeGrid;
