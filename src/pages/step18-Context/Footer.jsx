// import { ThemeContext } from "@emotion/react";
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext";

export default function Footer() {
    // Provider 에서 전달한 값을 가져오자
    const {isDark, setIsDark} = useContext(ThemeContext);
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