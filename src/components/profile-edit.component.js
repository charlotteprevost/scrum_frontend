import React, { Component } from 'react';
import { Header, Segment, Form, Divider, Button } from 'semantic-ui-react';

class ProfileEdit extends Component {
    render(){
        return(
            <div>
                <Segment>
                    <Header>Profile Edit Component</Header>
                    <Form onSubmit={this.props.updateProfile.bind(null, this.state)}>
                        <Divider horizontal></Divider>

                        <Button onClick={this.handleClick} color="green" type="Submit">
   
                        </Button>
                    </Form>
                </Segment>
            </div>        
        )
    }
}
export default ProfileEdit;
