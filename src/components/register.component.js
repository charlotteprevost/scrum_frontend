import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';


class Register extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            company: '',
            password: '',
            passwordRepeat: ''
        }
    }

    updateRegister = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    
    handleRegister = async (user, e) => {
        e.preventDefault();
        console.log('user in Register: \n', user);

        try {
            const createdUser = await fetch('http://localhost:9000/api/v1/movies', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await createdUser.json();
            await console.log("parsedResponse: ", parsedResponse);

        } catch (error) {
            console.error('error', error)
        }

    }
    

    render(){
        return(
            <div>
            <h4>Register</h4>
            <Segment>
              <Form onSubmit={this.handleRegister.bind(null, this.state)}>
                <Label htmlFor='name=name'>Name:</Label>
                <Form.Input type='text' name='name' value={this.state.name} onChange={this.updateRegister}/>
                <Label>Email:</Label>
                <Form.Input type='text' name='email' value={this.state.email} onChange={this.updateRegister}/>
                <Label>Company:</Label>
                <Form.Input type='text' name='company' value={this.state.company} onChange={this.updateRegister}/>
                <Label>Password:</Label>
                <Form.Input type='password' name='password' value={this.state.password} onChange={this.updateRegister}/>
                <Label>Retype Password:</Label>
                <Form.Input type='password' name='passwordRepeat' value={this.state.passwordRepeat} onChange={this.updateRegister}/>

                {(this.state.password === this.state.passwordRepeat) ? 
                    <div><Button color='green' type='Submit'>Register</Button></div>
                    : <div><small>passwords don't match :/</small><br/><Button disabled color='green' type='Submit'>Register</Button></div>}
    
              </Form>
            </Segment>
          </div>
            )
    }
}
export default Register;
