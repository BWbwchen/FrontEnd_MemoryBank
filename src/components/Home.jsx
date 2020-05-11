import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    Container,
    Button,
    NavItem,
    NavLink
} from 'reactstrap';

import './Home.css';


export default class Home extends React.Component {

    render(){
        return(
            <div>
                <img className="image" src={`images/woman.png`}/>
                <div className="container info " style={{margin:'0 0 2rem 0'}}>
                    <div style={{fontWeight:'700','font-size':'1.5rem'}}>Me</div>
                    <div>NTHU Student</div>
                </div>
                    <div className="info">Hi! My name is John, I'm a creative geek from San Francisco, CA. Contact me at john@mail.com</div>
            </div>
        )
    }
}
