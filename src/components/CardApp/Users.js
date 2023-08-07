import React, { Component } from 'react';
import Cardapp from './Cardapp';

class Users extends Component {
  render() {
    const {users} = this.props;



    return (
      <>
      {
          users.map(user =>{
            return(
                <Cardapp
                    key={user.id}
                    name={user.name}
                    salary={user.salary}
                    department={user.department}
                />
            )
        
        })
      }
      </>
    )
  }
}

export default Users