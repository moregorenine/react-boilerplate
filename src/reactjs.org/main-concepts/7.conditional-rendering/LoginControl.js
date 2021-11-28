import React from "react";
import LoginGreeting from "./LoginGreeting";
import {LoginButton, LogoutButton} from "./LoginButton"

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false}
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn
        let button
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }

        return (
            <section className={'mt-4'}>
                <h3>7. 조건부 렌더링</h3>
                <LoginGreeting isLoggedIn={isLoggedIn}/>
                {button}
            </section>
        )
    }
}

export default LoginControl;