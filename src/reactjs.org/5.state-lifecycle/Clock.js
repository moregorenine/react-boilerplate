import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <article className={'mt-3'}>
                {/*5. State and Lifecycle*/}
                {/*6. Handling Events*/}
                {/*7. Conditional Rendering*/}
                {/*8. Lists and Keys*/}
                {/*9. Forms*/}
                {/*10. Lifting State Up*/}
                {/*11. Composition vs Inheritance*/}
                {/*12. Thinking In React*/}
                <h3>5. State and Lifecycle</h3>
                <div>It is {this.state.date.toLocaleTimeString()}</div>
            </article>
        )
    }
}

export default Clock;