const MyName = function (props) {
    return (
        <div>
            안녕하세요! 제 이름은 <b>{props.name}</b>입니다.
        </div>
    )
}

MyName.defaultProps = {
    name: 'moregorenine'
}

export default MyName;