import React from "react";

export default function Meaning(props){
     return(
        <div>
            <div className="partOfSpeech">{props.meanings.partOfSpeech}:</div>
            <div className="definition">{props.meanings.definition}</div>
            <div className="synonyms">{props.meanings.synonyms?.map(function(synonyms, index){
                if(index<3){
                  return(<div key={index}>
                            <li>{synonyms};</li>
                        </div>)
                } else{
                    return ("")
                }
                                 
            })}</div>
            </div>
          
    )
}   