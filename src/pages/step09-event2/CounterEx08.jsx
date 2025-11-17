import { Button } from "@mui/material";
import { useState } from "react";

export default function CounterEx08(params) {
    const [isPinned, setIsPinned] = useState(false);

    const toglePinned = () => {
        // 토클 : 참, 거짓 이 이벤트 일어날때 마다 반대로
        setIsPinned(!isPinned);
    }

    // function toglePinned2() {
    //     return setIsPinned(!isPinned);
    // }

    return (
        <>
            <Button variant="outlined" onClick={toglePinned}>
                체크유무 {isPinned && 'v'}
            </Button>
        </>
    )
}