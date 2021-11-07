import React from "react";
import Greeting from "./Greeting";
import {LoginButton, LogoutButton} from "./Button"

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
            <section className={'mt-3'}>
                {/*8. Lists and Keys*/}
                {/*9. Forms*/}
                {/*10. Lifting State Up*/}
                {/*11. Composition vs Inheritance*/}
                {/*12. Thinking In React*/}
                <h3>7. 조건부 렌더링</h3>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </section>
        )
    }
}

export default LoginControl;