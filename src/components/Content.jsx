import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container,Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import Home from 'components/Home.jsx';
import MissionList from 'components/MissionList.jsx';
import Review from 'components/Review.jsx';
import "./Content.css"

export default class Content extends React.Component {
    static propTypes = {
        toggle: PropTypes.func,
        isOpen: PropTypes.bool,
    };

    constructor(props) {
        super(props);
    }

    render(){
        const{ toggle, isOpen} = this.props;
        const style = {
            paddingRight: '0px',
            paddingLeft: '0px'
          };
        return(
            <Container fluid className={classNames('content_', {'is-open': isOpen})} style={style}>
                <div className="d-flex"> 
                    <div style={{position:"fixed"}} className="sidebar-icon">
                        <Button color="link" style={{color: '#FF6347'}} onClick={toggle}>
                        <i className="fa fa-align-left" aria-hidden="true"></i>
                        </Button>
                    </div>
                </div>
                <Route exact path="/" render={() => (
                            <Home/>
                        )} />
                <Route exact path="/MissionList" render={() => (
                            <MissionList/>
                        )} />
                <Route exact path="/Reviewing" render={() => (
                            <Review />
                        )} />
            </Container>
        )
    }
}
