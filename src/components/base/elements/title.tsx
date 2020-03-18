import React from 'react';
import {NavLink} from "react-router-dom";

export const Title = (props) => <NavLink to={props.link} className={props.class}> {props.title} </NavLink>;
