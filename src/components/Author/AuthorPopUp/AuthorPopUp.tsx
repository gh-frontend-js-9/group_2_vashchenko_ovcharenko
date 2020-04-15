import React, {Component} from 'react';
import './AuthorPopUp.scss'
import PopUp from "./PopUp/PopUp";
import {items} from "../../../mock-data/data";

interface popUp {
    isOpen: boolean
}

class AuthorPopUp extends Component<any,popUp> {
    render() {
        return (
            <div className='pop-up-wrapper'>
                {
                    items.map(title => {
                    return (
                    <>
                        <div className='pop-up-tag-block'>
                           <PopUp title={title}/>
                        </div>
                    </>
                    )
                 })
                }
            </div>
        );
    }
}

export default AuthorPopUp;