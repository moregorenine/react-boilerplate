const Form = function () {
    function handleSubmit(e) {
        e.preventDefault()
        alert('You clicked submit.')
    }

    return (
        <section className={'mt-3'}>
            <h3>6. 이벤트 처리하기</h3>
            <h5>6.1 Form</h5>
            <form onSubmit={handleSubmit}>
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </form>
        </section>
    )

}

export default Form