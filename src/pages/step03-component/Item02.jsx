// export default function Item02(props) {
//     return(
//         <ul>
//             <li>과목 : {props.title}</li>
//             <li>내용 : {props.content}</li>
//         </ul>
//     )
// }

export default function Item02({title, content}) {
    return(
        <ul>
            <li>과목 : {title}</li>
            <li>내용 : {content}</li>
        </ul>
    )
}