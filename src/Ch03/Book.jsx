import React from "react";

function Book(props){
    return(
        <div>
            <h1>{`title : ${props.name}`}</h1>
            <h2>{`page : ${props.numOfPage}`}</h2>
        </div>
    );
}

export default Book;