import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name: 'SJ',
        comment: 'hello world',
    },
    {
        name: 'KJH',
        comment: 'nevertheless',
    },
    {
        name: 'choi',
        comment: 'gabojago'
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment}></Comment>
                )
            })}
        </div>
    );
}

export default CommentList;