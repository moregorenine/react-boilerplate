export const LoginButton = (props) => {
    return (
        <button onClick={props.onClick} className={"btn btn-primary"}>
            Login
        </button>
    );
}

export  const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick} className={"btn btn-danger"}>
            Logout
        </button>
    );
}
