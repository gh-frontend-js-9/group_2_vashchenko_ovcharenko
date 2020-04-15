import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import SliderBusinessBlog from "./SliderBusinessBlog";
import {Card} from '../Card/CardOnGrid/Card';

// Images and style
import PrimaryCard from '../../assets/images/PrimaryCard.png';
import SecondaryCard from '../../assets/images/SecondaryCard.png';
import BottomCard from '../../assets/images/BottomCard.png';
import RandomCard from '../../assets/images/RandomCard.png';

function BusinessBlog() {
  
  const cardItemsPopular = [
    {
      class: 'card__main',
      bgImage: PrimaryCard,
      link: '/popular',
      subTitleClass: 'content__subtitle',
      subTitle: 'BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS',
      titleClass: 'content__title--card',
      title: 'How to Boost Conversions on Your WooCommerce Product Pages',
      contentClass: 'content__text--card',
      content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/popular',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'FREELANCING',
      titleClass: 'content__title--card-small',
      title: '7 Best WordPress Caching Plugins for 2018'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/popular',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'RESOURCE',
      titleClass: 'content__title--card-small',
      title: 'Kinsta Kingpin: Interview with Kevin Muldoon'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/popular',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'DESIGN PROCESS',
      titleClass: 'content__title--card-small',
      title: '8 Ways To Leverage LinkedIn for Marketing'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/popular',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'INSPIRATION',
      titleClass: 'content__title--card-small',
      title: 'Working Remotely – Everything You Need'
    }
  ];
  
  const cardItemsEssentials = [
    {
      class: 'card__main--reverse',
      bgImage: PrimaryCard,
      link: '/read',
      subTitleClass: 'content__subtitle',
      subTitle: 'BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS',
      titleClass: 'content__title--card',
      title: 'How to Quickly Fix WordPress Mixed Content Warnings (HTTPS/SSL)',
      contentClass: 'content__text--card',
      content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/read',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'FREELANCING',
      titleClass: 'content__title--card-small',
      title: '10 WordPress Lead Generation Plugins'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/read',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'FREELANCING',
      titleClass: 'content__title--card-small',
      title: 'RIP HHVM – We’ve Had a Good Run'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/read',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'DESIGN PROCESS',
      titleClass: 'content__title--card-small',
      title: 'How to Add a Stripe Donate Button'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/read',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'INSPIRATION',
      titleClass: 'content__title--card-small',
      title: 'How to Set up Sucuri Firewall (WAF)'
    }
  ];
  const cardItemsRandom = [
    {
      class: 'card__random',
      bgImage: RandomCard,
      link: '/read',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'BY TOMAS LAURINAVICIUS IN TUTORIALS',
      titleClass: 'content__title--card',
      title: 'Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)',
      contentClass: 'content__text--card',
      content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    },
  ];
  
  const cardItemsBottom = [
    {
      class: 'card__box--main-bottom',
      bgImage: BottomCard,
      link: '/Post',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'BY TOMAS LAURINAVICIUS IN RESOURCE',
      titleClass: 'content__title--card',
      title: 'Website Downtime: Applicable Tips on How to Prevent It',
      contentClass: 'content__text--card',
      content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    },
    {
      class: 'card__box--main-bottom',
      bgImage: BottomCard,
      link: '/Post',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'BY TOMAS LAURINAVICIUS IN ANNOUNCEMENTS',
      titleClass: 'content__title--card',
      title: 'How to Fix Error 404 Not Found on Your WordPress Site',
      contentClass: 'content__text--card',
      content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    }
  ];
  
  
  return (
  <main className={'main'}>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Reading lists</h2>
      <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
    </div>
    
    <SliderBusinessBlog />
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Popular</h2>
      <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
    </div>
    <div className="card__home-wrapper--main">
      <Card items={cardItemsPopular}/>
    </div>
  
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Random</h2>
    </div>
    <div className="card__home-wrapper--random">
      <Card items={cardItemsRandom}/>
    </div>
    
    <div className={'card__header'}>
      <h2 className={'card__header--title'}>Essentials</h2>
      <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
    </div>
    <div className="card__home-wrapper--main">
      <Card items={cardItemsEssentials}/>
    </div>
    
    <div className="card__home-wrapper--main-bottom">
      <Card items={cardItemsBottom}/>
    </div>
  </main>
  );
}

export default BusinessBlog;
