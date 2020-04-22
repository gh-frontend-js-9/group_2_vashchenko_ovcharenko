import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {getPosts} from "../../redux/actions/getPosts";
import {connect} from "react-redux";
import PagginationButton from "./parts/PagginationButtons/PagginationButtons";
import './Paggination.scss'
import {Props} from "../../models/Props";

interface currentPage {
    currentPage: number
}

class Paggination extends Component<Props,currentPage> {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:1
        }
    }


    createButton(){
        const buttons = [];
        for(let i = 1 ; i <= this.props.pages; i++) {
            buttons.push(<PagginationButton value={i} key={i} handler={() =>
            {this.setState({currentPage: i});
                this.props.getPosts(i,1);
                window.scrollTo({top:0, behavior: "smooth"});
            }}/>)
        }
        return buttons
    }

    render() {
        return (
            <div className='pag-button'>
                {this.createButton().map(button => button)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pages: state.getPostsReducer.pages,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: bindActionCreators(getPosts, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Paggination);