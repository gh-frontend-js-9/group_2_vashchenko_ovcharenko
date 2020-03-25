import React from 'react';

export const Image = (props) => <img src={props.image}
                                          className={props.class}
                                          alt={props.altText}
                                          aria-label={props.ariaLabel}/>;
