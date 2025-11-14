// export default function IfExam02(params) {
//     let name = params.name;
//     let result ;

//     if(params.isPacked){
//         result = <li>{name} + 체크 O</li>
//     }else{
//         result = <li>{name} + 체크 X</li>
//     }
//     return(
//         <>
//             {result}
//         </>
//     )
// }

// export default function IfExam02({name, isPacked}) {
//     let result ;

//     if(isPacked){
//         result = <li>{name} + 체크 O</li>
//     }else{
//         result = <li>{name} + 체크 X</li>
//     }
//     return(
//         <>
//             {result}
//         </>
//     )
// }


// export default function IfExam02({name, isPacked}) {
//     let result ;

//     if(isPacked){
//         result = <li>{name} + 체크 O</li>
//     }else{
//         // return 이 null 이면 아무것도 반환하지 않음
//         result = null 
//     }
//     return(
//         <>
//             {result}
//         </>
//     )
// }


// export default function IfExam02({name, isPacked}) {
//     if(isPacked){
//       return   <li>{name} + 체크 O</li>
//     }else{
//       return null 
//     }   
// }

// export default function IfExam02({name, isPacked}) {
//     if(isPacked){
//       return   <li>{name} + 체크 O</li>
//     }   
// }

// && 연산(AND 연산)
// 왼쪽이 true 이면 오른쪽이 반환된다.
// 왼쪽에 숫자를 두지 말자 (왼쪽이 0 전체 결과 0)
// export default function IfExam02({name, isPacked}) {
//     return   <li>{name} {isPacked && "체크 0"} </li>
// }

// || 연산(OR 연산)
// 왼쪽이 false 이면 오른쪽이 반환된다.
// 왼쪽에 숫자를 두지 말자 (왼쪽이 0 전체 결과 0)
// export default function IfExam02({name, isPacked}) {
//     return   <li>{name} {isPacked || "체크 0"} </li>
// }

// 왼쪽 문자열 || 문자열이면 왼쪽문자열이 반환
// 왼쪽 문자열이 빈 문자열("")이면 오른쪽 문자열이 반환
// export default function IfExam02({name, isPacked}) {
//     const chk = "!"
//     return (
//         <li>{name} {chk || "체크 O"}</li>
//     )
// }

// 왼쪽 문자열 && 문자열이면 오른쪽문자열이 반환
// 왼쪽 문자열이 빈 문자열("")이면 아무것도 반환하지 않는다.
export default function IfExam02({name, isPacked}) {
    const chk = "!"
    return (
        <li>{name} {chk && "체크 O"}</li>
    )
}