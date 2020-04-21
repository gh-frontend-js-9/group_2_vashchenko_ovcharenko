import React, {Component} from 'react';
import ReadingListsTitle from "./parts/ReadingListsTitle/ReadingListsTitle";
import './ReadingLists.scss'
import ReadingListsBlock from "./parts/ReadingListsBlock/ReadingListsBlock";
import CardImg from "../Card/CardBox/parts/CardImg/CardImg";
import CardTitle from "../Card/CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../Card/CardBox/parts/CardDescription/CardDescription";
import {readingListCardLeft} from "./ReadingListsCONST";

class ReadingLists extends Component {
    render() {
        return (
            <div>
                <ReadingListsTitle className='reading-list-wrap'>
                   <div className='reading-list-title'>
                     All reading lists
                   </div>
                   <div className='reading-list-subtitle'>
                     Get in-depth insights on web design, freelancing, content management, and more with these series of related reads.
                   </div>
                </ReadingListsTitle>
                    <div className='reading-list__all-column'>
                        <div className='reading-list__left-column'>
                            <div className='reading-list-block__wrapper'>
                                <ReadingListsBlock item={readingListCardLeft}/>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ReadingLists;