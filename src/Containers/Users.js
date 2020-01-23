import React,{Component} from 'react';
import {fetchUsers} from '../store/actions/users.actions';
import {setLoading} from '../store/actions/loader.actions';
import List from '../Components/List';
import Loader from '../Components/Loader';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
class Users extends Component {


    componentDidMount(){
      this.props.fetchUsers();
    }

    viewAlbum = (id)=>{
      this.props.history.push(`/users/${id}/albums`);      
    }
    
   render(){
        const {users, loading} = this.props;
        
        const userList = users.map((user)=><List>
            <h2>
                {user.name}
            </h2>
            <h3>
                {user.email}
            </h3>
            <Link to={`/users/${user.id}/albums`}> View Albums </Link>
            <Link to={`/users/${user.id}/posts`}> View Posts </Link>
            
            </List>
        )
       return <Loader loading={users.length}>
         <h2 className="header">Users</h2>
        {userList}
    </Loader>
   }
    

}

const mapStateToProps = ({loading, users})=>{
    return {
      loading,
      users
    }
};

  
const mapsDispatchToProps = {
    fetchUsers,
    setLoading
}

export default connect(mapStateToProps,mapsDispatchToProps)(Users);