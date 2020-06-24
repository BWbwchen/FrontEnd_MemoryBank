import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container, ListGroup, ListGroupItem} from 'reactstrap';
import { Helmet } from 'react-helmet';
import './setting.css';


export default class Setting extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            name: "John Doe",
            email:"john.doe@mail.com",
            notice: "On"
        };
    }

    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleMailChange = evt => {
        this.setState({ email: evt.target.value});
    };

    handleChange = evt => {
        this.setState({notice: event.target.value});
      }

      SaveChange = evt =>{
          alert("已更新!")
      }
    render(){
        return(
            <div className="container home">
                <div className="text-center my-2" >設定</div>
                <Helmet bodyAttributes={{style: 'background-color :#414141'}}/>
                <ListGroup className="list-group-flush" style={{color:'black'}}>
                    <ListGroupItem className="my-2">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                        <p className="word">&nbsp;&nbsp;我</p>
                        <input type="text" className="change" value={this.state.name} onChange={this.handleNameChange}/>

                    </ListGroupItem>
                    <ListGroupItem className="my-2">
                        <i className="fa fa-gear " aria-hidden="true"></i>
                        <p className="word">&nbsp;&nbsp;通知</p>
                        <select className="change" value={this.state.notice} onChange={this.handleChange}>
                            <option value="On">On</option>
                            <option value="Off">Off</option>
                        </select>
                    </ListGroupItem>
                    <ListGroupItem className="my-2">
                        <i className="fa fa-bell" style={{fontSize:'13.72px'}}aria-hidden="true"></i>
                        <p className="word">&nbsp;&nbsp;一般</p>
                        </ListGroupItem>
                    <ListGroupItem className="my-2">
                        <i className="fa fa-user " aria-hidden="true"></i>
                        <p className="word">&nbsp;&nbsp;帳號</p>
                        <input type="text" className="change" value={this.state.email} onChange={this.handleMailChange} />
                    </ListGroupItem>
                </ListGroup>
                <div className="d-flex my-2 mx-auto btn" style={{padding:'0', border:'none'}} > 
                <Button style={{border:'none',margin:'0', padding:'0'}} block onClick={this.SaveChange} >
                    Save
                </Button>
            </div>
            </div>
        )
    }
}