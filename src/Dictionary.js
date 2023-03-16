import React  from "react";
import { useState } from "react";
import Dairy from "./img/Dairy.svg"
import axios from "axios";
import Result from "./Result"
import Photo from "./Photo";




export default function Dictionary(props){
let keyWord;
const [impressWord, setImpressWord] = useState(props.defaultWordPt)
const [keyWordPt, setKeyWordPt] = useState(props.defaultWordPt)
const [keyWordEn, setKeyWordEn] = useState(props.defaultWordEn)
const [data, setData] = useState("");
const [dataPT, setDataPT] = useState("");
const [loaded, setLoad] = useState(false)
const [photos, setPhoto] = useState("")
const [tittle, setTittle] = useState("Dictionary")
const [phrase, setPhrase] = useState("Find meanings and save for quick reference")
const [buttonValue, setButtonValue] = useState("Search")
const [input, setInput] = useState("Enter a word")
const [language, setLanguage] = useState("EN")
const [select, setSelect] = useState("EN")


function load(){
    setLoad(true)
    setSelect("EN")
      if(language === "EN"){
        search();
    } else if(language==="PT"){
        searchPT()   
    }
}

function handleResponse(response){  
    setData(response.data[0]);
    console.log(response)
}


function handleSubmit(event){
    event.preventDefault();
    if(language==="EN"){
    search();
} else if(language==="PT"){
    searchPT()
   setImpressWord(keyWordPt)
    
}}

function handleResponsePhotos(response){
    setPhoto(response.data.photos)
}

function handleApiPT(response){
    setDataPT(response)
    console.log(response)

}

function searchPT(){
    let apiURLPT = `https://dicio-api-ten.vercel.app/v2/${keyWordPt}`;
    axios.get(apiURLPT).then(handleApiPT)

    let apiKey="40430ba55fc1o6890ct12a8363f6d64d";
    let apiPhotos= `https://api.shecodes.io/images/v1/search?query=${keyWordPt}&key=${apiKey}`;
    axios.get(apiPhotos).then(handleResponsePhotos); 

}


function search(){
    let apiURL= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWordEn}`;
    axios.get(apiURL).then(handleResponse)
   

    let apiKey="40430ba55fc1o6890ct12a8363f6d64d";
    let apiPhotos= `https://api.shecodes.io/images/v1/search?query=${keyWordEn}&key=${apiKey}`;
    axios.get(apiPhotos).then(handleResponsePhotos);   
}


function handleLanguage(){
    if (language === "EN"){
        setKeyWordEn(keyWord)
    } if (language==="PT"){
        setKeyWordPt(keyWord)
    }
}


function handleWord(event){
    keyWord = event.target.value
      handleLanguage()
    
}

function handleSelect(event){
    let option = event.target.value
    if(option==="PT"){
        setLanguage("PT")
        handleTextPT()

    }else if( option==="EN"){
        setLanguage("EN")
        handleTextEN()
    }
}
   

function handleTextPT(){
    setTittle("Dicionário")
    setPhrase("Encontre definições e salve para futuras referência")
    setButtonValue("Pesquisar")
    setInput("Digite uma palavra")
    setLanguage("PT")
    searchPT()
      
}

function handleTextEN(){
    setTittle("Dictionary")
    setPhrase("Find meanings and save for quick reference")
    setButtonValue("Search")
    setInput("Enter a word")
    setLanguage("EN")
    search()
       
}

if(loaded){
    
    return (
        <div className="container">
            
        <div className="search-engine">
        <div className="select-language">
        <span className="select-tittle"> Language: </span>
        <select className="custom-select" onChange={handleSelect}>
            <option value="EN">{select}</option>
            <option value="PT">PT</option>
            
        </select>
        </div>
            <h1>{tittle}</h1>   
            <img className="book-lover" src={Dairy} alt="woman-reading-books"/>
            <p>{phrase}</p>

            <form autoFocus="on" onSubmit={handleSubmit}>
                <input className="search-input" type="text"onChange={handleWord}  placeholder={input}/>
                <div id="button">
                <input className="button" type="submit" value={buttonValue}/>
                </div>  
            </form>
            
        </div>
        
        <div className="results">
        <Result data={data} dataPT={dataPT} language={language} keyWord={keyWord} keyWordPt={keyWordPt} impressWord={impressWord}/>
        <Photo photos={photos} language={language}/>
        </div>
        </div>
        
    )
} else{
    load();
    return ("")
}} 

