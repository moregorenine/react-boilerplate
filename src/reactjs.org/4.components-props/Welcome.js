// props 사용방법

const Welcome = function (props) {
    return (
        <article className={'mt-3'}>
            <h3>4. Components and Props</h3>
            <div>
                안녕하세요! 제 이름은 <b>{props.name}</b>입니다.
            </div>
        </article>
    )
}

Welcome.defaultProps = {
    name: 'moregorenine'
}

export default Welcome;