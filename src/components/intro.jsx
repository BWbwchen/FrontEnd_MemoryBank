import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Button, Container} from 'reactstrap';
import { Helmet } from 'react-helmet';

function validate(user=[], password=[]) {
    return {
      user: user.length === 0,
      password: password.length === 0,
    };
  }
  
export default class Intro extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            user:"",
            password:"",
        };
    }

    handleChange = evt => {
        this.setState({ user: evt.target.value });
    };    
    
    handlePasswordChange = evt => {
        this.setState({ password: evt.target.value });
    };
    
    render(){
        const errors = validate(this.state.user, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);

        return(

            <div className="text-center container">
                <Helmet bodyAttributes={{style: 'background-color :#414141'}}/>
                <div className="container my-4">
                    <h1  style={{overflow:'hidden', fontFamily:'Love Ya Like A Sister, cursive' ,fontSize:'70px'}}> Memory  </h1>
                    <h1  style={{overflow:'hidden', fontFamily:'Love Ya Like A Sister, cursive' ,fontSize:'70px'}}> Bank  </h1>
                </div>
               <Container className="py-2 my-2" style={{ width:'75%',color: 'black', background:'#F0F0F0', textAlign:'center',borderRadius:'5px'}}>
                <h2>登入</h2>
                <input
                type="text" placeholder="UserName or Email" value={this.state.user} style={{borderRadius:'5px',display:'block',width:'50%',fontSize:'20px', margin:'1rem auto'}}
                onChange={this.handleChange}
                />
                <input
                type="password" placeholder="Password" value={this.state.password} style={{borderRadius:'5px',display:'block',width:'50%',fontSize:'20px', margin:'1rem auto'}}
                onChange={this.handlePasswordChange}
                />
            <Link className="d-flex my-2 mx-auto btn" style={{padding:'0', border:'none'}} to="/Home"> 
                <Button  disabled={isDisabled} style={{backgroundColor: '#FF6347',border:'none',margin:'0', padding:'0'}} block >
                    確認
                </Button>
            </Link>
            </Container>
                <Link to="/Create">Create Account</Link>
            </div>
        )
    }
}