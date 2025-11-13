export default function Book(props) {
    return(
        <div>
            {/* `문자열 ${변수}` */}
            <p>{`이 책의 이름은 ${props.name} 입니다.`}</p>
            <p>{`이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`}</p>
        </div>
    )
}