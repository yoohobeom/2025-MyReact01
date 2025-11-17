import { Button } from "@mui/material";

export default function CounterEx01() {
    // 리엑트에서 화면이 병경 (재 랜더링)하기 위해서는 상태값이 변경되었다고
    // 리엑트에게 알려줘야 한다. (상태 관리 => useState)
    console.log("hi")
    let cnt = 5;

    function increment() {
        cnt = cnt + 1;
        // 카운트 값은 변경되지만 화면이 변경되지 않는다.
        console.log("cnt : ", cnt);
    }
    
    function decrement() {
        cnt = cnt - 1;
        console.log("cnt : ", cnt);
    }

    return (
        <>
            <h2>Count : {cnt}</h2>
            <Button variant="outlined" onClick={increment}> + </Button>
            <Button variant="outlined" onClick={decrement}> - </Button>
        </>
    )
}