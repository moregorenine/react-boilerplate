import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            btnColor: 'btn-primary'
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState(preState => ({
    //         isToggleOn: !preState.isToggleOn
    //     }))
    // }

    handleClick = () => {
        this.setState(preState => ({
            isToggleOn: !preState.isToggleOn,
            btnColor: preState.btnColor === 'btn-primary' ? 'btn-danger' : 'btn-primary'
        }))
    }

    render() {
        return (
            <>
                <h5>6.2 Toggle</h5>
                <button onClick={this.handleClick} className={"btn " + this.state.btnColor}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </>
        )
    }
}

export default Toggle