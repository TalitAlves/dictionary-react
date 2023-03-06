import React from "react";

export default function Photo(props){
    if(props.photos){
       return(
        <div className="photos">
            {props.photos.map(function(photos,index){
                if(index<3){
             return( 
                <div key={index}>
                    <img alt={photos.alt} src={photos.src.original} />
                    </div>
            )} else{return null}})}
        </div>
    )
    }else{return null}
}