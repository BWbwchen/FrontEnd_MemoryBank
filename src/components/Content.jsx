import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container,Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import Home from 'components/Home.jsx';
import MissionList from 'components/MissionList.jsx';
import Review from 'components/Review.jsx';
import Challenge from 'components/Challenge/Challenge.jsx';
import Intro from 'components/intro.jsx';
import Create from 'components/Create.jsx';
import Rule from 'components/Rule.jsx';
import Visa from 'components/visa.jsx';
import TopicSelect from 'components/TopicSelect.jsx'
import Date from 'components/Date.jsx'
import ChallengeResult from 'components/ChallengeResult.jsx'
import Setting from 'components/setting.jsx'
import "./Content.css"

export default class Content extends React.Component {
    static propTypes = {
        toggle: PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    render(){
        const{ toggle} = this.props;
        const style = {
            paddingRight: '0px',
            paddingLeft: '0px'
          };
        return(
            <div className={`content_ ${this.props.page}`}>
                <div className="d-flex sidebar-icon"> 
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
                <Route exact path="/MissionList" render={() => (
                            <MissionList />
                        )} />
                <Route exact path="/Reviewing" render={() => (
                            <Review />
                        )} />
                <Route exact path="/Challenging" render={() => (
                            <Challenge />
                        )} />
                <Route exact path="/ChallengeResult" render={() => (
                            <ChallengeResult />
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
                <Route exact path="/Setting" render={() => (
                    <Setting/>
                )} />
                <Route exact path="/date" render={() => (
                    <Date/>
                )} />
            </div>
        )
    }
}
