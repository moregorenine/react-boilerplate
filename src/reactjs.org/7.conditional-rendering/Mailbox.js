const Mailbox = (props) => {
    const unreadMessages = props.unreadMessages;
    return (
        <>
            {/*8. Lists and Keys*/}
            {/*9. Forms*/}
            {/*10. Lifting State Up*/}
            {/*11. Composition vs Inheritance*/}
            {/*12. Thinking In React*/}
            <h5 className={'mt-2'}>7.2 논리 && 연산자로 If를 인라인으로 표현하기</h5>
            {unreadMessages.length > 0 &&
                <div>
                    You have {unreadMessages.length} unread messages.
                </div>
            }
        </>
    )

}

export default Mailbox;