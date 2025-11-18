import { useMemo, useState } from "react"

export default function UseMemoTest01(params) {
    // useMemo는 재렌더링 사이에 계산 결과를 캐싱(기억 = 메모리제이션)할 수 있게 해주는 ReactHook
    // 값을 다시 계산하지 말고, 이전에 계산해 둔 값을 재사용하자 (불필요한 재 계산을 막아주는 Hook)
    // const cacheValue = useMemo(calculateValue, dependencies)
    // const cacheValue = useMemo(() => {
    //      return 계산할_내용 ; 
    // }, [의존성 배열])

    // 계속 바뀌지 않는 계산 결과를 만들 때 (무거운 계산(반복문, 정렬, 필터링 등))
    // 부모에서 props로 전달할 복잡한 값 (자식 컴포넌트가 불필요하게 리렌더링 되는것을 방지)

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    function heavyWork() {
        console.log("무거운 계산 실행 중...")
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        return sum;
    }
    // const result = heavyWork() // 렌더링 될때 마다 실행됨
    // 위 코드 대신 useMemo 사용하자
    // 처음 렌더링할때만 heavyWork 실행하고, 값 저장(메모제이션)

    // 의존성 배열이 비어 있어 최초 1번만 실행
    // const result = useMemo(() => heavyWork(), [])

    // 의존성 배열이 필요한 경우 의존성 배열이 변경되면 렌더링 된다.
    // const result = useMemo(() => heavyWork(), [count])
    // 즉, 아래는 count가 변경되면 렌더링 된다.
    const result = useMemo(() => heavyWork(), [count])

    return (
        <div>
            <p>결과1 : {result}</p>
            <p>결과2 : {count}</p>
            <p>결과3 : {text}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input onChange={(e) => setText(e.target.value)} />
        </div>
    )
}