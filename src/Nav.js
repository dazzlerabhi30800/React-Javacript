import React,{useContext} from "react";
import {MovieContext} from "./MovieContext";
import "./nav1.css";


const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);

    return (
        <div className = "container">
           <h3>Dazzler Abhi</h3>
           <p>List of Movies : {movies.length}</p>
        </div>
    );
}


export default Nav;