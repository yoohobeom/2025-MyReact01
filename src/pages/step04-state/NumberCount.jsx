export default function NumberCount(props) {
    // 자바스크립트 영역
    let cnt = 5;
    
    let increment = () => {
        cnt++;
        console.log(cnt);
    }

    let decrement = () => {
        cnt--;
        console.log(cnt);
    }

    return (
        <>
            <button onClick={increment}> + </button>
            <span>{cnt}</span>
            <button onClick={decrement}> - </button>

            {/* 
                버튼을 누르면 실제 cnt 값은 증가 감소한다.
                그러나 브라우저에 있는 값은 변하지 않는다.(React의 특징)
                React는 한번 화면이 렌더링 되면 다시 렌더링 될 때 까지 화면변화가 없다.
                React에게 현재 상태가 변경되었다고 지시하면 다시 렌더링을 하고
                그때 변경된 값으로 적용한다.
                React에게 현재 상태가 변경되었다고 지시하는 것 => 상태관리(state)
            */}
        </>
    )
}