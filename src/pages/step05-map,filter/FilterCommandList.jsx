import Comment from "../step03-component/Comment";

export default function FilterCommandList(props) {
    const comments = [    
    {
        name : "홍길동",
        comment : "방가 방가",
        isAdmin : false
    },
    {
        name : "둘리",
        comment : "호이~ 호이~",
        isAdmin : true
    },
    {
        name : "도우너",
        comment : "칸따피야",
        isAdmin : false
    },
    {
        name : "희동이",
        comment : "응~애",
        isAdmin : true
    },
]
    // filter : 조건에 맞는 항목만 추출
    // const filtered = comments.filter(k => k.isAdmin);
    // return (
    //     <div>
    //         {
    //             filtered.map((k, idx) => {
    //                 return(
    //                     <Comment key={idx} name={k.name} comment={k.comment} />
    //                 );
    //             })
    //         }
    //     </div>
    // )
    return (
        <div>
            {
                comments
                .filter(k => k.isAdmin)
                .map((k, idx) => {
                    return(
                        <Comment key={idx} name={k.name} comment={k.comment} />
                    );
                })
            }
        </div>
    )
}