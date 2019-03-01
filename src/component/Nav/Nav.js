import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Nav = (props) => {
  console.log(props)
  if (props.location.pathname !== '/') {
    return (
      <div>
      <img src={props.img} alt="profile" />
      <p>{props.username}</p>
      <div>
        <Link to='/dashboard'><button>Home</button></Link>
        <Link to='/new'><button>New Post</button></Link>
        <Link to='/'><button>Logout</button></Link>
      </div>
      </div>
      
      ); 
    } else {
      
      return (null)
}
}

const mapStateToProps = reduxState => {
  return reduxState
}




export default connect(mapStateToProps)(withRouter(Nav));
