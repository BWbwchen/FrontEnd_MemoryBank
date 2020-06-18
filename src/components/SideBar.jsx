import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3>Bootstrap Sidebar</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to='/' style={{color: '#fff'}}>首頁</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink tag={Link} to='/intro' style={{color: '#fff'}}>錢包</NavLink>
          </NavItem>          
        </Nav>        
      </div>
    </div>
  );
  
export default SideBar;
