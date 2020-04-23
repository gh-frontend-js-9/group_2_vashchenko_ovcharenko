import React, {Component} from 'react';
import ReadingListsTitle from "./parts/ReadingListsTitle/ReadingListsTitle";
import ReadingListsBlock from "./parts/ReadingListsBlock/ReadingListsBlock";
import {readingListCardLeft} from "./ReadingListsCONST";

import './ReadingLists.scss'

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