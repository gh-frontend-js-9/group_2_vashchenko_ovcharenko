import React, {Component} from 'react';
import './PopUp.scss'
import {Props} from "../../../../models/Props";

interface State {
    isOpen: boolean
}

class PopUp extends Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }
    render() {
        let {title} = this.props
        return (
            <>
            { this.state.isOpen && (
            <div className={'pop-up'}>
               <span className='pop-up_title'>{title.title}</span>
                <i className="fas fa-times cancel-pop-up"
                    onClick={() => this.setState({isOpen: !this.state.isOpen})}
                />
            </div>)
            }
            </>
        );
    }
}

export default PopUp;