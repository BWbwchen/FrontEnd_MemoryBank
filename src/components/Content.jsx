import React from 'react';
import classNames from 'classnames';
import { Container,Button, Navb } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
        <div> 
            <Button  onClick={props.toggle}/>
        </div>
        <Switch>
            <Route exact path="/" component={() => "Home_Page" } />
            <Route exact path="/MissionList" component={() => "Mission_List" } />
        </Switch>
    </Container>
)
