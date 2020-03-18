import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import MainSlider from "./MainSlider";
import {Card} from '../base/Card';

// Images and style
import PrimaryCard from '../../assets/images/PrimaryCard.png'
import SecondaryCard from '../../assets/images/SecondaryCard.png'
import './main-card.scss'

function Home() {
  
  const cardItemsPopular = [
    {
      class: 'box card__main',
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
      class: 'box card__main',
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
  const cardItemsFreelance = [
    {
      class: 'box card__main',
      bgImage: PrimaryCard,
      link: '/new',
      subTitleClass: 'content__subtitle',
      subTitle: 'BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS',
      titleClass: 'content__title--card',
      title: '10 Best WordPress Event Management Plugins (Calendars, Ticketing, RSVPs)',
      contentClass: 'content__text--card',
      content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/new',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'FREELANCING',
      titleClass: 'content__title--card-small',
      title: 'The 53 Best Tools for Freelancers'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/new',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'FREELANCING',
      titleClass: 'content__title--card-small',
      title: 'Why and How to Use Lossy Compression'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/new',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'DESIGN PROCESS',
      titleClass: 'content__title--card-small',
      title: '11 WordPress Instagram Plugins for Displaying'
    },
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/new',
      subTitleClass: 'content__subtitle--card-small',
      subTitle: 'INSPIRATION',
      titleClass: 'content__title--card-small',
      title: 'Kinsta Kingpin: Interview with James Laws'
    }
  ];
  
  
  return (
    <main className={'main'}>
      <MainSlider />
      
      <div className={'card__header'}>
        <h2 className={'card__header--title'}>Popular</h2>
        <NavLink to={'/popular'} className={'card__header--view'}>View all</NavLink>
      </div>
      <div className="card__home-wrapper">
        <Card items={cardItemsPopular}/>
      </div>
      
      
      <div className={'card__header'}>
        <h2 className={'card__header--title'}>Essentials</h2>
        <NavLink to={'/read'} className={'card__header--view'}>View all</NavLink>
      </div>
      <div className="card__home-wrapper">
        <Card items={cardItemsEssentials}/>
      </div>
      
      
      <div className={'card__header'}>
        <h2 className={'card__header--title'}>Freelance</h2>
        <NavLink to={'/new'} className={'card__header--view'}>View all</NavLink>
      </div>
      <div className="card__home-wrapper">
        <Card items={cardItemsFreelance}/>
      </div>
    </main>
  );
}

export default Home;
