import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'reactstrap';
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
import SideBtn from 'components/ShowSideBtn.jsx'
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
            <div className={`content_ `}>

                <Route exact path="/" render={() => (
                            <Intro IdFunc={this.props.IdFunc} />
                        )} />
                <Route exact path="/home" render={() => (
                            <div>
                                <SideBtn toggle={toggle}/>
                                <Home UserId={this.props.UserId} />
                            </div>
                        )} />
                <Route exact path="/MissionList" render={() => (
                            <div>
                                <SideBtn toggle={toggle}/>
                                <MissionList />
                            </div>
                        )} />
                <Route exact path="/Reviewing" render={() => (
                            <div>
                                <SideBtn toggle={toggle}/>
                                <Review />
                            </div>
                        )} />
                <Route exact path="/Challenging" render={() => (
                            <div>
                               <SideBtn toggle={toggle}/>
                                <Challenge />
                            </div>
                        )} />
                <Route exact path="/ChallengeResult" render={() => (
                            <div>
                                <SideBtn toggle={toggle}/>
                                <ChallengeResult />
                            </div>
                        )} />
                <Route exact path="/Create" render={() => (
                    <Create />
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
                    <div>
                        <SideBtn toggle={toggle}/>
                        <Setting/>
                    </div>
                )} />
                <Route exact path="/date" render={() => (
                    <Date IdFunc={this.props.IdFunc}/>
                )} />

            </div>
        )
    }
}
