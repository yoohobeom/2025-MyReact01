import { Button } from "@mui/material";
import { useState } from "react";

export default function CounterEx02() {
    // 리엑트에서 화면이 병경 (재 랜더링)하기 위해서는 상태값이 변경되었다고
    // 리엑트에게 알려줘야 한다. (상태 관리 => useState)
    console.log("hi")
    // const [변수, set변수] = useState(초기값)
    const [cnt, setCnt] = useState(5);

    // function increment() {
    //     setCnt(cnt + 1);
    // }
    
    // function decrement() {
    //     setCnt(cnt - 1);
    // }

    const increment = () => setCnt(cnt + 1);
    const decrement = () => setCnt(cnt - 1);

    return (
        <>
            <h2>Count : {cnt}</h2>
            <Button variant="outlined" onClick={increment}> + </Button>
            <Button variant="outlined" onClick={decrement}> - </Button>
        </>
    )
}