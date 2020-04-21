import React, {Component} from 'react';
import CardImg from "../../../Card/CardBox/parts/CardImg/CardImg";
import CardTitle from "../../../Card/CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../../../Card/CardBox/parts/CardDescription/CardDescription";

class ReadingListsBlock extends Component<any,any> {
    render() {
        let {item} = this.props;
        return (
                <div className='reading__wrapper'>
                    { item.map(items => {
                        return(
                            <div className='reading-list-block__wrapper'>
                                <CardImg className='reading-lists-card'/>
                                <div className='reading-list-position-text'>
                                    <CardTitle className='reading-lists-card-title'>
                                        {items.title}
                                    </CardTitle>
                                    <CardDescription className='reading-lists-card-description'>
                                        {items.content}
                                    </CardDescription>
                                </div>
                            </div>
                        )
                    })

                    }
                </div>
        );
    }
}

export default ReadingListsBlock;