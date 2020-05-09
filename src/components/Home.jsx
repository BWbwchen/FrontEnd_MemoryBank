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
import classNames from 'classnames'
import { instanceOf } from 'prop-types';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>

     </Container>
)
