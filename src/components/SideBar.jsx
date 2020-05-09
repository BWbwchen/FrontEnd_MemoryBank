import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span onClick={props.toggle}></span>
        <h3>Bootstrap Sidebar</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem >
            <NavLink style={{color: '#fff'}} tag={Link} to='/'>Home Page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color: '#fff'}} tag={Link} to='/MissionList'>Mission List</NavLink>
          </NavItem>
        </Nav>        
      </div>

    </div>
  );
  
export default SideBar;
