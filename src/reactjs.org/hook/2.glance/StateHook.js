import {useState} from "react";

function StateHook() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)} className={"btn btn-primary"}>
                    Click me
                </button>
            </div>
        </>
    )
}

export default StateHook;