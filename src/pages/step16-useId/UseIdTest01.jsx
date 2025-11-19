// useId는 클라이언트와 서버 렌더링 환경에서 고유한 ID를 생성
// 이 ID는 컴포넌트 간 중복되지 않으며, 접근성을 위해 label과 input 쌍을 연결할때 사용

import { useId, useRef } from "react"

export default function UseIdTest01(params) {
    const id = useId();
    const inputRef = useRef(null);
    return (
        <div>
            <h4>연결 하지 않았을 때</h4>
            <p>
                <label>이름 : </label>
                <input ref={inputRef} />
            </p>
            <h4>연결 했을 때</h4>
            <p>
                <label htmlFor={id}>이름 : </label>
                <input id={id} ref={inputRef} />
            </p>
            <p>
                <label>이름 :
                    <input ref={inputRef} />
                 </label>
            </p>
            <hr />
        </div>
    )
}