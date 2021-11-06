import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(preState => ({
            isToggleOn: !preState.isToggleOn
        }))
    }

    render() {
        return (
            <section>
                <h5>6.2 Toggle</h5>
                <button onClick={this.handleClick} className={"btn btn-primary"}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </section>
        )
    }
}

export default Toggle