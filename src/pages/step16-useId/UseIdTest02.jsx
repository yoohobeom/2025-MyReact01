// useId는 클라이언트와 서버 렌더링 환경에서 고유한 ID를 생성
// 이 ID는 컴포넌트 간 중복되지 않으며, 접근성을 위해 label과 input 쌍을 연결할때 사용

import { useId } from "react"

export default function UseIdTest02(params) {
    const id = useId();
    return (
        <div>
            <h4>여러개 사용할 때</h4>
            <p>
                <label htmlFor={id+'-fristName'}>Frist Name : </label>
                <input id={id+'-fristName'} />
            </p>
            <hr />
            <p>
                <label htmlFor={`${id}-lastName`}>Last Name : </label>
                <input id={`${id}-lastName`} />
            </p>
        </div>
    )
}