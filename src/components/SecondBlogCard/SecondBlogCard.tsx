import React, {Component} from 'react';
import CardBox from "../CardBox/CardBox";
import CardContent from "../СardContent/CardContent";
import CardAuthor from "../CardAuthor/CardAuthor";
import CardTitle from "../CardTitle/CardTitle";
import CardDescription from "../CardDescription/CardDescription";

class SecondBlogCard extends Component {
    render() {
        return (
                <CardBox className='second-card-wrapper'>
                    <CardContent className='entire-content'>
                        <CardTitle className='second-card-title'>
                            FREELANCING
                        </CardTitle>
                        <CardDescription className='second-card-description'>
                            7 Best WordPress Caching Plugins for 2018
                        </CardDescription>
                    </CardContent>
                </CardBox>
        );
    }
}

export default SecondBlogCard;