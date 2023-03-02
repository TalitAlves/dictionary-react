import React from "react";
import Meaning from "./Meaning"

export default function Results (props){
if (props.data){
    return(
        <div>
        <div className="word-result">
            <div className="word" id="word">{props.data.word}</div>
            <span className="fonetic">({props.data.phonetic})</span>  
      </div>

        <div className="meaning">
             <div>{props.data.meanings.map(function(meanings, index){
            return <div key={index}>
                <Meaning meanings={meanings}/>
                </div>
          })}</div>

                      
        </div>
        <hr></hr>
      </div>
      
    );

} else {
    return (
    <div>
        <div className="word-result">
            <div className="word" id="word">fuck</div>
            <div className="fonetic">(fək)</div>    
      </div>

        <div className="meaning">
        <div className="partOfSpeech">verb:</div>
          <div className="definition">have sexual intercourse with</div>
          <div className="partOfSpeech">noun:</div>
          <div className="definition">slang for sexual intercourse</div>
          <div className="synonyms"></div>
            
        </div>
        <hr></hr>
    </div>
    )
}

    
}