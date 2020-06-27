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
            userId:"",
        };
        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handleUserid = this.handleUserid.bind(this);
    }

    render(){
        return (
            <Router>
                <div className="main">
                    <SideBar className="sidebar" toggle={this.handleNavbarToggle} isOpen={this.state.navbarToggle} />
                    <Content toggle={this.handleNavbarToggle} IdFunc={this.handleUserid} UserId={this.state.userId}/>
                </div>
            </Router>
            );
    }
    
    handleUserid(Id){
        console.log('get UserId')
        this.setState(() => ({
            userId: Id
        }));
    }
    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

}

