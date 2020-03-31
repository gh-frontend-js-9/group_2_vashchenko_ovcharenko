import React from 'react';

// Component
import {Card} from "../Card/Card";
import {Title} from "../Shared/elements/title";
import {Content} from "../Shared/elements/content";

// Images and style
import BottomCard from '../../assets/images/BottomCard.png';

const responseText = '   <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, <a href="">WP Page Builder</a>. If you’re tired of the same old page builder plugins, this is one you should try out.</p>  <h2>What’s Special About WP Page Builder?</h2>  <p>Wondering what makes WP Page Builder so special? I would say, what doesn’t? It’s developed by the team over at Themeum, who has been creating <a href="">WordPress themes</a> since 2013. As mentioned above, the plugin is a full pack of essential site building elements with all modern the modern functionality you’ve come to expect from a page builder plugin. Let’s have a look below at all of the juicy features WP Page Builder includes.</p>  <img src="https://ghblogs.herokuapp.com/images/mountains.jpg" alt="Mountains"/>  <h2>Here are some of the amazing add-ons included:</h2>\n' +
'      <ul>\n' +
'        <li><strong>Form:</strong> Create web forms effortlessly. It gives you a convenient way to style your forms as you desire. The Form add-on itself is capable of setting up any kind of form without needing to install any plugin. Moreover, you can manage form plugins and enable reCAPTCHA with just a simple click. There is also an add-on for Contact Form 7 if you prefer.</li>\n' +
'        <li><strong>Carousel:</strong> It’s hard to find an advanced add-on like a carousel in a free page builder plugin, but WP Page Builder lets you create stunning hero sliders without having to pay for it.</li>\n' +
'        <li><strong>Post Grid:</strong> Display blog posts in grids defining the number of posts and styling the look.</li>\n' +
'        <li><strong>Feature Box:</strong> Use the Feature Box add-on to display the features of products on your website.</li>\n' +
'        <li><strong>Accordion:</strong> Need any collapse text content on your site? Use WP Page Builder’s Accordion add-on and modify the style the way you want.</li>\n' +
'      </ul>\n' +
'      <figure>\n' +
'        <img src="https://ghblogs.herokuapp.com/images/mountains.jpg" alt="Mountains"/>\n' +
'        <figcaption>“WP Page Builder offers a lot of ready-to-use design blocks to make your site development process a lot faster and easier“</figcaption>\n' +
'      </figure>';

function createMarkup() {
  return {__html: responseText};
}

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


function Post() {
  
  return (
  <main className={'main'}>
    <div>
      <Title link={'/post'} class={'content__title--card'} title={'POST TITLE PLACE  this.props.title'}/>
  
      <Content
      class={'content__text--card'}
      content={'Need slice text to 400 charts  this.props.content'} />
  
      <Content
      class={'content__subtitle--card-small'}
      content={`By  this.props.author  in this.props.category[0]  process`} />
  
    </div>
    <div>
      <Content content={responseText}/>
    </div>
    
    <div>
      <div className="card__home-wrapper--main-bottom">
        <Card items={cardItemsBottom}/>
      </div>
    </div>
    
    <div>
      <div>
        <div>
          <h3>Comments</h3>
          <button>Leave a Comment</button>
        </div>
        <p><b>Comment policy:</b> We love comments and appreciate the time that readers spend to share ideas and give feedback. However, all comments are manually moderated and those deemed to be spam or solely promotional will be deleted.</p>
      </div>
      
      <div>
      
      </div>
    </div>
  </main>
  );
}

export default Post;
