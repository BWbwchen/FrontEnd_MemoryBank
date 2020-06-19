import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container,Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import Home from 'components/Home.jsx';
import Intro from 'components/intro.jsx';
import Create from 'components/Create.jsx';
import Rule from 'components/Rule.jsx';
import Visa from 'components/visa.jsx';
import TopicSelect from 'components/TopicSelect.jsx'
import Date from 'components/Date.jsx'

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
        return(
            <Container className={classNames('content', {'is-open': isOpen})}>
                <div className="d-flex "> 
                    <div style={{position:"fixed"}}>
                        <Button color="link" style={{color: '#FF6347'}} onClick={toggle}>
                        <i className="fa fa-align-left" aria-hidden="true"></i>
                        </Button>
                    </div>
                </div>
                <Route exact path="/" render={() => (
                            <Home/>
                        )} />
                <Route exact path="/intro" render={() => (
                            <Intro/>
                        )} />
                <Route exact path="/Create" render={() => (
                    <Create/>
                        )} />
                <Route exact path="/Rule" render={() => (
                    <Rule/>
                        )} />
                <Route exact path="/visa" render={() => (
                    <Visa/>
                )} />
                <Route exact path="/topicselect" render={() => (
                    <TopicSelect/>
                )} />
                <Route exact path="/date" render={() => (
                    <Date/>
                )} />
            </Container>
        )
    }
}
