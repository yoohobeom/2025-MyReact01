export default function Footer({isDark, setIsDark}) {
    const handleToggleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <footer className="footer"
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black'
        }}>
            <button className="button" onClick={handleToggleTheme}>Mode Change</button>
        </footer>
    )
}