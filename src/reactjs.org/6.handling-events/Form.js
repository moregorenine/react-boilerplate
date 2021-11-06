const Form = () => {
    function handleSubmit(e) {
        e.preventDefault()
        alert('You clicked submit.')
    }

    return (
        <section className={'mt-3'}>
            {/*7. Conditional Rendering*/}
            {/*8. Lists and Keys*/}
            {/*9. Forms*/}
            {/*10. Lifting State Up*/}
            {/*11. Composition vs Inheritance*/}
            {/*12. Thinking In React*/}
            <h3>6. Handling Events</h3>
            <h5>6.1 Form</h5>
            <form onSubmit={handleSubmit}>
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </form>
        </section>
    )

}

export default Form