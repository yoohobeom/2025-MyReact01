import React from "react";

function Child({onClick}) {
    // 원래는 이벤트 처리를하는 함수를 만들어서 사용해야 하지만
    // 부모한테 받아서 실행
    console.log("자식~~클릭")
    return (
        <div>
            <button onClick={onClick}>자식 버튼</button>
        </div>
    )
}

// export default Child

// Reactmemo 는 React에서 컴포넌트의 불필요한 렌더링을 막아주는 최적화 도구
export default React.memo(Child)