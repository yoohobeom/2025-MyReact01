import { useState } from "react"
import Child from "./Child";

export default function UseCallBackTest01(params) {
    // useCallBack 은 리 렌더링 간에 함수 정의를 캐싱해주는 ReactHook
    // const scheFn = useCallback(fn, dependncies)

    // 자식 컴포넌트에 넘어가는 함수에 useCallback 사용
    // 부모 컴포넌트가 렌더링 해도 자식 컴포넌트는 렌더링 하지 않음

    // 부모가 리 렌더링되면 자식도 리 렌더링된다.
    const [cnt, setCnt] = useState(0);

    const handleClick = () => {
        console.log("클릭 !")
        setCnt(cnt+1);
    }
    console.log("부모화면")

    return (
        <div>
            <h2> useCallback 없음</h2>
            <p>카운트 : {cnt}</p>
            <button onClick={() => setCnt(cnt + 1)}>부모 카운트 증가</button>
            <Child onClick={handleClick} />
        </div>
    )
}