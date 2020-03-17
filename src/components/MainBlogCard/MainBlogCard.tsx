import React, {Component} from 'react';
import './MainBlogCard.scss'
import CardContent from "../CardBox/parts/СardContent/CardContent";
import CardBox from "../CardBox/CardBox";
import CardTitle from "../CardBox/parts/CardTitle/CardTitle";
import CardAuthor from "../CardBox/parts/CardAuthor/CardAuthor";
import CardDescription from "../CardBox/parts/CardDescription/CardDescription";

class MainBlogCard extends Component {
    render() {
        return (
            <CardBox className='card-wrapper'>
                <CardContent className='entire-content'>
                    <CardAuthor className='card-author'>
                        BY  TOMAS LAURINAVICIUS  IN  DESIGN PROCESS
                    </CardAuthor>
                    <CardTitle className='card-title'>
                        How to Boost Conversions on Your WooCommerce Product Pages
                    </CardTitle>
                    <CardDescription className='card-description'>
                        User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.
                    </CardDescription>
                </CardContent>
            </CardBox>
        );
    }
}

export default MainBlogCard;
