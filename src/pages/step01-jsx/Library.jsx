import Book from "./Book";

export default function Library(props) {
    return(
        <>
            {/* 외부 컴포넌트 합성, Book 컴포넌트에 파라미터 전달 -> 속성으로 전달 */}
            <Book name="혼자서하는 스프링" numOfPage="300"/>
            <Book name="혼자서하는 머신러닝" numOfPage="700"/>
            <Book name="혼자서하는 리엑트" numOfPage="250"/>
        </>
    )
}