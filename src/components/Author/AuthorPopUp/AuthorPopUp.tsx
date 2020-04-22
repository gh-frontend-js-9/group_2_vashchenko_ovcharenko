import React, {Component} from 'react';
import './AuthorPopUp.scss'
import PopUp from "./PopUp/PopUp";
import {items} from "../../../mock-data/data";
import {Props} from "../../../models/Props";

interface popUp {
    isOpen: boolean
}

class AuthorPopUp extends Component<Props,popUp> {
    render() {
        return (
            <div className='pop-up-wrapper'>
                {
                    items.map((title,index) => {
                    return (
                    <>
                        <div className='pop-up-tag-block'>
                           <PopUp title={title} key={index}/>
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