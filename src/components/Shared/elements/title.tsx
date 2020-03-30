import React from 'react';
import {NavLink} from "react-router-dom";

export const Title = (props) => <NavLink to={props.link} className={props.class}><h3> {props.title} </h3></NavLink>;
