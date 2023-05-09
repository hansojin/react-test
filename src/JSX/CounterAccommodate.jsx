import React, { useState, useEffect } from "react";
import Counter from "./Counter";

const MAX_CAPACITY = 10;

function CounterAccommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = Counter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>IN</button>
            <button onClick={decreaseCount}>OUT</button>

            {isFull && <p style={{ color: "red" }}>IT'S FULL</p>}
        </div>
    );
}

export default CounterAccommodate;