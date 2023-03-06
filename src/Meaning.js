import React from "react";

export default function Meaning(props){
     return(
        <div>
            <div className="partOfSpeech">{props.meanings.partOfSpeech}:</div>
            <div>{props.meanings.definitions?.map(function(definitions,index){
                return(
                    <div key={index}>
                        <div className="definition">{definitions.definition}</div>
                        <div className="example">{definitions.example}</div>
                    </div>
                )
            })}
             </div> 
             <ul className="synonyms">{props.meanings.synonyms?.map(function(synonyms,index){
                return(
                    <li key={index}>{synonyms}</li>
                )
             })}</ul>
             
                  
            </div>
          
    )
}   