import React from "react";
import Meaning from "./Meaning"
import { useEffect, useState } from "react";


export default function Results (props){
    const [loadResults, setLoadResults] = useState(true)

console.log(props.error)
if  (loadResults && props.data && props.language ==="EN"){
     return(
        <div>
            <div className="word-result">
                <div className="word" id="word">{props.data.word}</div>
                <div className="phonetics">
                    <span >{props.data.phonetics?.map(function(phonetics, index){
                            if(phonetics.text){return(
                            <div key={index} id="phonetics">
                                <span className="phonetic-audio"><a href={phonetics.audio} target="_blank   " rel="noreferrer"> Listen</a></span>   
                                <span className="phonetic-text">{phonetics.text} </span>
                            </div>
                            )} else{return null}
                            })}
                    </span>
                </div>
            </div>
     
            <div className="meaning">
                <div>{props.data.meanings.map(function(meanings, index){
                    return (
                        <div key={index}>
                            <Meaning meanings={meanings}/>
                        </div>)
            })}</div>                      
        </div>
    </div>
      
    );

} if ( loadResults && props.dataPT && props.language==="PT"){  
    return( (<div>
        
            <div className="word-result">
                <div className="word" id="word">{props.keyWordPt}</div>         
            </div>
     
            <div className="meaning">
                <div className="partOfSpeech">{props.dataPT.partOfSpeech}</div>
                <div>{props.dataPT.meanings.map(function(meanings, index){
                    return(<div key={index} className="definition">{meanings}</div>)
                })}</div>
                                       
            </div>
        </div>))
} else if(props.data && props.errorData){
    setLoadResults(false)
    console.log(props.errorData.code)
    console.log("hello from error")
      
    return(
        <div className="word" id="word">"sorry"</div>
    
    )
}}