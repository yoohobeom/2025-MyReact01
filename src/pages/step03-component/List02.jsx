import Item02 from "./Item02";

export default function List02(props) {
    return(
        <>
            <div>
                <h3>강의 목록</h3>
                <Item02 title="HTML&CSS" content="웹페이지만드는 지식을 배운다." />
                <Item02 title="JAVA" content="java 언어를 배운다." />
                <Item02 title="REACT" content="React 언어를 배운다." />
            </div>
        </>
    )
}