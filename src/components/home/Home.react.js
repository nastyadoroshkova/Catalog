import React from 'react';
import {addUser, removeAllUser} from '../../actionCreators/user';
import {connect} from 'react-redux';

let id = 0;

const Home = props => {
    const {users, addUser, removeAllUser} = props;

    return (
      <div>
        Home
        <button onClick={() => addUser(id++, `User ${id}`)}>Add User</button>
        <button onClick={removeAllUser}>Remove all user</button>
        { 
          users.map((user)=>{
            return(
              <p>{user.name}</p>
            );
          })
        }
      </div>
    );
}
const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = {
  addUser,
  removeAllUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);