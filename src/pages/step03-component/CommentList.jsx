import Comment from "./Comment";

// 원래는 Spring-DB에서 정보를 가져와서 사용
const comments = [
    {
        name : "홍길동",
        comment : "방가 방가"
    },
    {
        name : "둘리",
        comment : "호이~ 호이~"
    },
    {
        name : "도우너",
        comment : "칸따피야"
    },
    {
        name : "희동이",
        comment : "응~애"
    },

];
// 부모 컴포넌트
// 부모가 먼저 렌더링 -> 그안에서 자식이 렌더링 된다.
export default function CommentList(props) {
    return(
        <div>
            {
                // 각 항목을 구분하는 key 속성이 필요하다.
                comments.map((k, idx) => {
                    return(
                        <Comment key={idx} name={k.name} comment={k.comment} />
                    );
                })
            }
        </div>
    )
}