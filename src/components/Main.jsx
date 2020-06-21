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
            page:'',
        };
        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }

    render(){
        return (
            <Router>
                <div className="main">
                    <SideBar className="sidebar" handle_P={this.handlePage} toggle={this.handleNavbarToggle} isOpen={this.state.navbarToggle} />
                    <Content handle_P={this.handlePage} page={this.state.page} toggle={this.handleNavbarToggle}/>
                </div>
            </Router>
            );
    }
    handlePage(page_name){
        this.setState(() => ({
            page: page_name
        }));
    }
    handleNavbarToggle() {
        this.setState((prevState, props) => ({
            navbarToggle: !prevState.navbarToggle
        }));
    }

}

