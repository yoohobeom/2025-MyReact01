import { useRef, useState } from "react"

export default function UseRefTest03(params) {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)

    let countVar = 0;
    
    const statePlus = () => {
        console.log("countVar : ", countVar);
        countVar = countVar + 1;
    }
    
    const refPlus = () => {
        countRef.current = countRef.current + 1
    }

    const doRander = () => {
        setCount(count + 1)
    }

    const printResult = () => {
        console.log("ref : ", countRef.current, "var : ", countVar);
    }

    return (
        <div>
            <p>Ref : {countRef.current}</p>
            <p>Var : {countVar}</p>
            <button onClick={statePlus}>State 올리기</button>
            <button onClick={refPlus}>Ref 올리기</button>
            {/* 렌더링 시 ref 값을 기억했다가 결과로 나온다
                그러나 일반 변수는 렌더링 될때 초기화 된다.(let countVar = 0;) */}
            <button onClick={doRander}>렌더링</button>
            <button onClick={printResult}>결과 출력</button>
        </div>
    )
}