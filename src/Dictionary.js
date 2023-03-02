import React from "react";
import { useState } from "react";
import Dairy from "./img/Dairy.svg"
import axios from "axios";
import Result from "./Result"


export default function Dictionary(props){
const [searchedWord, setSearchedWord] = useState("");
const [data, setData] = useState("");



function handleResponse(response){  
    console.log(response);
    setData(response.data);
}

function handleSearch(event){
    event.preventDefault();
    let apiKey = "40430ba55fc1o6890ct12a8363f6d64d";
    let apiURL= `https://api.shecodes.io/dictionary/v1/define?word=${searchedWord}&key=${apiKey}`;

    axios.get(apiURL).then(handleResponse);
}


function handleWord(event){
    setSearchedWord(event.target.value);
     
}

    return (

        <div className="container">
        <div className="search-engine">
            <h1>Dictionary</h1>
            <img className="book-lover" src={Dairy} alt="woman-reading-books"/>
            <p>Find meningns and save for quick reference</p>

            <form autoFocus="on" onSubmit={handleSearch}>
                <input className="search-input" type="text"onChange={handleWord}  placeholder="Enter a word"/>
                <div>
                <input className="button" type="submit" value="Search"/>
                </div>  
            </form>
        </div>
        <div className="results">
        <Result data={data} />
        </div>
        </div>
    )
}