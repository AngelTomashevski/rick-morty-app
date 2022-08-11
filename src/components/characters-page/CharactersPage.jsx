import React, { useState,useEffect,useRef } from 'react'
import Footer from '../footer/Footer';
import Card from '../card/Card';
import ErrorComponent from '../error-component/ErrorComponent';
import "./CharactersPage.scss"
import SearchBar from '../search-bar/SearchBar';
import useFetch from '../../hooks/useFetch';
import { apiUrl } from '../../constants';
import LoadingMsg from '../loading-msg/LoadingMsg';


const CharactersPage = () => {
    const [term, setTerm] = useState("");
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);
    const {data:charachters, isLoading}= useFetch(apiUrl,`character/?name=${search}`);


   

    useEffect(() => {
        inputRef.current.focus();
      }, [search]);
    

      const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(term);
        setTerm("");
      };
    
      const handleChange = (e) => {
        setTerm(e.target.value);
      };
  return (
    <div>
   <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} term={term} inputRef={inputRef} />
     <div className="cards-container">
     {isLoading && <LoadingMsg />}
    
     {charachters?.results === undefined && !isLoading && <ErrorComponent />} 
     {charachters?.results?.map((charachter) => {
       return (
         <Card
           key={charachter.id}
           image={charachter.image}
           name={charachter.name}
           status={charachter.status}
           location={charachter.location.name}
           species={charachter.species}
           charId={charachter.id}
         />
       );
     })}
   </div>
   {charachters?.info === undefined ? "" : <Footer info={charachters?.info} />}
   </div>
  )
}

export default CharactersPage