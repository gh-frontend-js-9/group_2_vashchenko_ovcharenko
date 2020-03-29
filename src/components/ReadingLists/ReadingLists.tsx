import React, {Component} from 'react';
import ReadingListsTitle from "./parts/ReadingListsTitle/ReadingListsTitle";
import './ReadingLists.scss'
import ReadingListsBlock from "./parts/ReadingListsBlock/ReadingListsBlock";
import CardImg from "../Card/CardBox/parts/CardImg/CardImg";
import CardTitle from "../Card/CardBox/parts/CardTitle/CardTitle";
import CardDescription from "../Card/CardBox/parts/CardDescription/CardDescription";
class ReadingLists extends Component {
    render() {
        return (
            <div>
                <ReadingListsTitle className={'reading-list-wrap'}>
                   <div className={'reading-list-title'}>
                     All reading lists
                   </div>
                   <div className={'reading-list-subtitle'}>
                     Get in-depth insights on web design, freelancing, content management, and more with these series of related reads.
                   </div>
                </ReadingListsTitle>
                <div className={'reading-list-title-cards'}>
                            Home  —  Reading lists
                </div>
                <div className={'reading-list-flex'}>
                    <ReadingListsBlock className={'reading-list-position'}>
                        <CardImg className={'reading-lists-card'}/>
                        <div className={'reading-list-position-text'}>
                            <CardTitle className={'reading-lists-card-title'}>
                                UI design
                            </CardTitle>
                            <CardDescription className={'reading-lists-card-description'}>
                                Every website is a user interface. Learn to build yours right.
                            </CardDescription>
                        </div>
                        <CardImg className={'reading-lists-card'}/>
                        <div className={'reading-list-position-text'}>
                            <CardTitle className={'reading-lists-card-title'}>
                                UI design
                            </CardTitle>
                            <CardDescription className={'reading-lists-card-description'}>
                                Every website is a user interface. Learn to build yours right.
                            </CardDescription>
                        </div>
                        <CardImg className={'reading-lists-card'}/>
                        <div className={'reading-list-position-text'}>
                            <CardTitle className={'reading-lists-card-title'}>
                                UI design
                            </CardTitle>
                            <CardDescription className={'reading-lists-card-description'}>
                                Every website is a user interface. Learn to build yours right.
                            </CardDescription>
                        </div>
                        <CardImg className={'reading-lists-card'}/>
                        <div className={'reading-list-position-text'}>
                            <CardTitle className={'reading-lists-card-title'}>
                                UI design
                            </CardTitle>
                            <CardDescription className={'reading-lists-card-description'}>
                                Every website is a user interface. Learn to build yours right.
                            </CardDescription>
                        </div>
                        <CardImg className={'reading-lists-card'}/>
                        <div className={'reading-list-position-text'}>
                            <CardTitle className={'reading-lists-card-title'}>
                                UI design
                            </CardTitle>
                            <CardDescription className={'reading-lists-card-description'}>
                                Every website is a user interface. Learn to build yours right.
                            </CardDescription>
                        </div>
                        <CardImg className={'reading-lists-card'}/>
                        <div className={'reading-list-position-text'}>
                            <CardTitle className={'reading-lists-card-title'}>
                                UI design
                            </CardTitle>
                            <CardDescription className={'reading-lists-card-description'}>
                                Every website is a user interface. Learn to build yours right.
                            </CardDescription>
                        </div>
                        <CardImg className={'reading-lists-card'}/>
                        <div className={'reading-list-position-text'}>
                            <CardTitle className={'reading-lists-card-title'}>
                                UI design
                            </CardTitle>
                            <CardDescription className={'reading-lists-card-description'}>
                                Every website is a user interface. Learn to build yours right.
                            </CardDescription>
                        </div>
                        <CardImg className={'reading-lists-card'}/>
                        <div className={'reading-list-position-text'}>
                            <CardTitle className={'reading-lists-card-title'}>
                                UI design
                            </CardTitle>
                            <CardDescription className={'reading-lists-card-description'}>
                                Every website is a user interface. Learn to build yours right.
                            </CardDescription>
                        </div>
                    </ReadingListsBlock>
                </div>
            </div>
        );
    }
}

export default ReadingLists;