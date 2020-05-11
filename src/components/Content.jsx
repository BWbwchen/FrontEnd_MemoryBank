import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container,Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import Home from 'components/Home.jsx';
import MissionList from 'components/MissionList.jsx';


export default class Content extends React.Component {
    static propTypes = {
        toggle: PropTypes.func,
        isOpen: PropTypes.bool,
        Pagefunc: PropTypes.func,
        page: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render(){
        const{ toggle, isOpen, page, Pagefunc} = this.props;
        return(
            <Container fluid className={classNames('content', {'is-open': isOpen})}>
                <div className="d-flex"> 
                    <div><Button onClick={toggle}/></div>
                    <div className="mx-auto">{page}</div>
                </div>
                <Route exact path="/" render={() => (
                            <Home page={this.ChangeTopic('首頁')} />
                        )} />
                <Route exact path="/MissionList" render={() => (
                            <MissionList page={this.ChangeTopic('每日任務列表')}/>
                        )} />
            </Container>
        )
    }

    ChangeTopic(unit) {
        if (this.props.page !== unit) {
            this.props.Pagefunc(unit);
        }
    }
}
