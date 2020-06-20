import React from "react";

import "./Create.css";
import { 
    Container,
    Button 
} from "reactstrap";
import {Helmet} from "react-helmet";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



function validate(email=[], password=[], password_c=[], name=[]) {

  if(password_c.length === 0 || password !=password_c){
    var notpass = true
  }else{
    notpass = false
  }
  return {
    name: name.length === 0,
    email: email.length === 0,
    password_c: notpass,
    password: password.length === 0,
  };
}

export default class Create extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "",
        email: "",
        password: "",
        password_c:"",
        warn:"",
        touched: {
            name: false,
            email: false,
            password: false,
            password_c: false
        }
    };
  }


  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handlepasswordcChange = evt => {
    this.setState({ password_c: evt.target.value });
    if(evt.target.value !=this.state.password){
      this.state.warn = "Passwords don't match";
    }else{
      this.state.warn = "";
    }
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };


  render() {
    const errors = validate(this.state.email, this.state.password, this.state.password_c, this.state.name);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = field => {
      var hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };

    return (

        <form > 
            <Helmet bodyAttributes={{style: 'background-color :#F0F0F0'}}/>

            <Container className="box search">
                <div style={{position:"fixed"}}>
                    <Link  to="/intro"> 
                        <Button cmeolor="link" style={{color: 'black',background:'white',border:'none'}}>
                        <i className="fa fa-arrow-left"></i>
                        </Button>
                    </Link>
                </div>
                <h2 className="title">創建帳號</h2>
                <input
                className={shouldMarkError("name") ? "error" : ""}
                type="text" placeholder="Full name" value={this.state.name}
                onChange={this.handleNameChange}
                onBlur={this.handleBlur("name")}
                />
                <input
                className={shouldMarkError("email") ? "error" : ""}
                type="text" placeholder="Email" value={this.state.email}
                onChange={this.handleEmailChange}
                onBlur={this.handleBlur("email")}
                />
                <input
                className={shouldMarkError("password") ? "error" : ""}
                type="password" placeholder="Password" value={this.state.password}
                onChange={this.handlePasswordChange}
                onBlur={this.handleBlur("password")}
                />
                <input
                className={shouldMarkError("password_c") ? "error" : ""}
                type="password" placeholder="Confirm password" value={this.state.password_c}
                onChange={this.handlepasswordcChange}
                onBlur={this.handleBlur("password_c")}
                />
                <p style={{color:'red',textAlign:'left'}}>{this.state.warn}</p>
                <p className="remarks">By creating an account you agree to our Terms of Service and Privacy Policy</p>
            </Container>
            <Link className="d-flex my-2 mx-auto btn" to="/Rule"> 
                <Button disabled={isDisabled} style={{backgroundColor: '#FF6347',border:'none'}} block >
                    下一步
                </Button>
            </Link>

        </form>
    );
  }
}

