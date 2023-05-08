import React, {useState} from "react";

function ConfirmButton(props){
    const [isConfirmed,setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((previsConfirmed)=>!previsConfirmed);
    }

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed?"chekced!":"check?"}
        </button>
    );

}

export default ConfirmButton;