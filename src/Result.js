import React from "react";
import Meaning from "./Meaning"


export default function Results (props){
if (props.data){
    return(
        <div>
        <div className="word-result">
            <div className="word" id="word">{props.data.word}</div>
            
            <div className="phonetics">
             <span >{props.data.phonetics?.map(function(phonetics, index){
                if(phonetics.text){return(
                    
                    <div key={index} id="phonetics">
                    <span className="phonetic-audio"><a href={phonetics.audio} target="_blank" rel="noreferrer"> Listen</a></span>   
                    <span className="phonetic-text">{phonetics.text} </span>
                    </div>
                )} else{return null}
            })}</span>
             </div>
      </div>
     
        <div className="meaning">
            <div>{props.data.meanings.map(function(meanings, index){
            return (<div key={index}>
                <Meaning meanings={meanings}/>
                </div>)
          })}</div>

                      
        </div>
        </div>
      
    );

} else {
    return ("")
}

    
}