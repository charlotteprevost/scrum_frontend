import React, { Component } from 'react';
import { Form, Label, Button, Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
      this.setState({
          [e.currentTarget.name]: e.currentTarget.value
      })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const loginResponse = await fetch('http://localhost:9000/auth', {
            method: 'POST',
            credentials: 'include',                                 // Sends session cookie with request
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const parsedResponse = await loginResponse.json();
      
          console.log(`parsedResponse: `, parsedResponse);   

          if (parsedResponse.data === 'login successful'){
            console.log(`Login Successful.`);      
            this.props.history.push('/movies');                     // Automatically passed to all components as a prop
          }
    }
    
    

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit} style={{width: '400px'}}>
                    <Label>Username</Label>
                    <Form.Input type="text" name="username" onChange={this.handleChange}/>
                    <Label>Password</Label>
                    <Form.Input type="password" name="password" onChange={this.handleChange}/>
                    <Button type="submit" color="blue">Login</Button>
                </Form>
                <p>Not a member? <br/> Register <Link to="/register">here</Link>.</p>
            </div>
        )
    }
}
export default Login;
