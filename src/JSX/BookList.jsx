import React from "react";
import Book from "./Book";

function BookList(props){
    return(
        <div>
            <h3>NOW {new Date().toLocaleString()}</h3>
            <Book name="firstPython" numOfPage={300}></Book>
            <Book name="firstAWS" numOfPage={400}></Book>
            <Book name="firstReact" numOfPage={500}></Book>
        </div>
    );
}

export default BookList;