const LoginGreeting = function (props) {

    function GuestGreeting() {
        return (
            <>
                <h5>7.1 not logged In</h5>
                <div>Please sign up.</div>
            </>
        );
    }

    function UserGreeting() {
        return (
            <>
                <h5>7.1 logged In</h5>
                <div>Welcome back!</div>
            </>
        );
    }

    function getGreeting(isLoggedIn) {
        if (isLoggedIn) {
            return UserGreeting()
        } else {
            return GuestGreeting()
        }
    }

    return (
        <>
            {getGreeting(props.isLoggedIn)}
        </>
    )

}

export default LoginGreeting