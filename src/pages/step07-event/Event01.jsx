export default function Event01(porps) {
    // 사용자 정의 함수(이벤트 핸들러)
    function handleClick() {
        alert('버튼1 클릭');
    }

    return (
        <>
            {/* 이벤트 핸들러 호출 */}
            <button onClick={handleClick}>눌러주세요-1</button>
            <button onClick={function() {
                alert('버튼2 클릭');
            }}>눌러주세요-2</button>
            <button onClick={() => {
                alert('버튼3 클릭');
            }}>눌러주세요-3</button>
        </>
    )
}