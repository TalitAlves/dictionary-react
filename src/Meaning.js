import React from "react";

export default function Meaning(props){
     return(
        <div>
            <div className="partOfSpeech">{props.meanings.partOfSpeech}:</div>
            <div className="definition">{props.meanings.definition}</div>
            </div>
          
    )
}   