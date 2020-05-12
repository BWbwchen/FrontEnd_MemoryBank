import React, {useState} from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import SideBar from 'components/SideBar.jsx';
import Content from 'components/Content.jsx';
import './Main.css';


export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navbarToggle: false,
        };
        this.handleNavbarToggle = this.handleNavbarToggle.bind(this,false);
    }

    render(){
        return (
            <Router>
                <div className="main">
                    <SideBar toggle={this.handleNavbarToggle} isOpen={this.state.navbarToggle}/>
                    <Content toggle={this.handleNavbarToggle} isOpen={this.state.navbarToggle}/>
                </div>
            </Router>
            );
    }

    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

}

