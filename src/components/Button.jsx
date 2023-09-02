
import React from "react";

const Button=()=>{

    function myFunction(){
        alert("Clicked");
    }     
        return (

            <div>
            <button onClick={myFunction} >click here</button>
            </div>
        )
}

export default Button;


