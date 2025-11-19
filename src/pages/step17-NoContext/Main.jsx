export default function Main({isDark}) {
    return (
        <header className="content"
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black'
        }}>
            <p>props를 사용한 예제</p>
            <p>모두 부자 되세요</p>
        </header>
    )
}