import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="firstPython" numOfPage={300}></Book>
            <Book name="firstAWS" numOfPage={400}></Book>
            <Book name="firstReact" numOfPage={500}></Book>
        </div>
    );
}

export default Library;