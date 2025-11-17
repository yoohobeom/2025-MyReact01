import { useState } from "react"

// 부모로부터 onChange 함수(반드시 콜백함수)를 props로 전달 받음
export default function Profile2({onChange}) {
    const [status, setStatus] = useState("Away")
    return (
        <div>
            <h3>자식 컴포넌트</h3>
            {/* 콜백함수를 호출 함으로써 부모 상태를 간접적으로 변경할 수 있다.(리 랜더링) */}
            <button onClick={() => onChange('자식이 변경한 상태')}>부모 상태 바꾸기</button>
            <hr />
            <p>Status : {status}</p>
            <button onClick={() => setStatus("Away")}>Set Away</button>
            <button onClick={() => setStatus("Avaliable")}>Set Avaliable</button>
        </div>
    )
}