import React, {Component} from 'react';
import CardBox from "../CardBox/CardBox";
import CardContent from "../CardBox/parts/СardContent/CardContent";
import CardAuthor from "../CardBox/parts/CardAuthor/CardAuthor";
import CardTitle from "../CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../CardBox/parts/CardDescription/CardDescription";

class SecondBlogCard extends Component<any,any> {
    render() {
        let {sec} = this.props;
        return (
                <CardBox className='second-card-wrapper'>
                    <CardContent className='entire-content'>
                        <CardTitle className='second-card-title'>
                            {sec.tags}
                        </CardTitle>
                        <CardDescription className='second-card-description'>
                            {sec.title}
                        </CardDescription>
                    </CardContent>
                </CardBox>
        );
    }
}

export default SecondBlogCard;