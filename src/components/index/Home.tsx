import React from 'react';
import {NavLink} from 'react-router-dom';

// Component
import MainSlider from "./MainSlider";
import {Card} from '../base/Card';

// Images and style
import PrimaryCard from '../../assets/images/PrimaryCard.png'
import SecondaryCard from '../../assets/images/SecondaryCard.png'

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
  
  const cardItemsBoottom = [
    {
      class: 'card__box',
      bgImage: SecondaryCard,
      link: '/new',
      subTitleClass: 'content__subtitle--card-small',
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
      subTitle: 'BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS',
      titleClass: 'content__title--card',
      title: '10 Best WordPress Event Management Plugins (Calendars, Ticketing, RSVPs)',
      contentClass: 'content__text--card',
      content: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    }
  ];
  
  
  return (
    <main className={'main'}>
      <MainSlider />
    </main>
  );
}

export default Home;
