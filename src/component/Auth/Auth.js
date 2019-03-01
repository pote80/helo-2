import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'

 class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }


    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    async register() {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            let res = await axios.post('/auth/register', user)
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        } catch (err) {
            console.log(err)
            alert(`Username taken`)
        }
    }

    login = async () => {
        let user = {
          username: this.state.username,
          password: this.state.password
        }
        try {
          let res = await axios.post('/auth/login', user)
          this.props.updateUser(res.data)
          this.props.history.push('/dashboard')
        } catch (err) {
          console.log(err)
          alert(`Incorrect Username or Password`)
        }
      }

    render() {
        return (
            <div>
                <div><label> Username: <input value={this.state.username} onChange={this.handleUsernameChange} /></label></div>
                <div><label> Password: <input value={this.state.password} onChange={this.handlePasswordChange} type='password' /></label></div>
                <div><button onClick={() => this.login()}>Login</button><button onClick={() => this.register()}>Register</button></div>
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        id: reduxState.id,
    }
}
const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)