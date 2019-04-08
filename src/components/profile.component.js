import React, { Component } from 'react';
import ProfileEdit   from './profile-edit.component'


class Profile extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            userId: '',
            company: '',
            editProfile: false
        }
    }

    handleOpenEdit = () => {
      this.setState({editProfile: true})
    }

    handleCloseEdit = (params) => {
      this.setState({editProfile: false})
    }
    
    

    render(){
        return(
            <div>
                <small onClick={this.openEdit}>Edit</small>
                <p>Profile Component</p>
                {this.state.editProfile ? <ProfileEdit /> : null}
            </div>        
        )
    }
}
export default Profile;