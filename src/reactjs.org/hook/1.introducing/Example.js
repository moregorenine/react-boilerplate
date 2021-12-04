import {useState} from "react";

const Example = () => {
    const [count, setCount] = useState(0);

    return (
        <section className={"mt-3"}>
            <h3>1. Hook 소개</h3>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        </section>
    )
}

export default Example;