import React from "react";
import { useState } from "react";
import Dairy from "./img/Dairy.svg"
import axios from "axios";
import Result from "./Result"
import Photo from "./Photo";


export default function Dictionary(props){
const [searchedWord, setSearchedWord] = useState(props.defaultWord);
const [data, setData] = useState("");
const [loaded, setLoad] = useState(false)
const [photos, setPhoto] = useState("")



function load(){
    setLoad(true)
    search()
}

function handleResponse(response){  
    setData(response.data[0]);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleResponsePhotos(response){
    console.log(response);
    setPhoto(response.data.photos)
}

function search(){
    let apiURL= `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(apiURL).then(handleResponse);

    let apiKey="40430ba55fc1o6890ct12a8363f6d64d";
    let apiPhotos= `https://api.shecodes.io/images/v1/search?query=${searchedWord}&key=${apiKey}`;
    axios.get(apiPhotos).then(handleResponsePhotos);
}

function handleWord(event){
    setSearchedWord(event.target.value);
     
}

if(loaded){
    return (

        <div className="container">
        <div className="language">
        

        </div>
        <div className="search-engine">
        <button className="btn btn-primary">English</button>
        <button className="btn btn-primary">Portugues</button>

            <h1>Dictionary</h1>
            <img className="book-lover" src={Dairy} alt="woman-reading-books"/>
            <p>Find meningns and save for quick reference</p>

            <form autoFocus="on" onSubmit={handleSubmit}>
                <input className="search-input" type="text"onChange={handleWord}  placeholder="Enter a word"/>
                <div id="button">
                <input className="button" type="submit" value="Search"/>
                </div>  
            </form>
            
        </div>
        
        <div className="results">
        <Result data={data} />
        <Photo photos={photos}/>
        </div>
        </div>
        
    )
} else{
    load();
    return ("")
}} 

