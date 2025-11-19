// useReducer : react에 복잡한 상태관리를 더 체계적으로 예측 가능하게 처리하기 위한 상태관리 Hook
//              useState의 대체제이며, 상태관리 변화의 로직이 복합할때 사용하면
//              더 명확하고 깔끔하게 관리 할 수 있다.

// import { useState } from "react"

// 형식)  const [state, dispatch] = useReducer(reducer, initialState);
//        state : 현재 상태 (useState 처럼 사용) 
//     dispatch : 상태를 변경하는 요청(함수)
//      reducer : 상태(state)를 어떻게 변경할지 결정하는 함수
// initialState : 초기 상태값
//       action : 상태 변경을 요청하는 객체 ({type, payload})
//                type : 무엇을 할지(동작이름),  payload : 무엇을 가지고 할지(상태를 바꾸기위한 데이터)

// export default function UseReducerTest01(params) {
//     const [count, setCount] = useState(5)
//     const handleIncrement = () => {
//         setCount(count + 1)
//     }
    
//     const handleDecrement = () => {
//         setCount(count - 1)
//     }
    
//     const handelReset = () => {
//         setCount(5)
//     }
//     return (
//         <div>
//             <h2>Count : {count}</h2>
//             <button onClick={handleIncrement}> + </button>
//             <button onClick={handleDecrement}> - </button>
//             <button onClick={handelReset}> reset </button>
//         </div>
//     )
// }

function calc(state, action) {
    
}

export default function UseReducerTest01(params) {
    // 초기값 0
    const initialState = {count:0}
    return (
        <div>
            <h2>Count :</h2>
            <button> + </button>
            <button> - </button>
            <button> reset </button>
        </div>
    )
}