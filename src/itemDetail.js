import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import './App.css';

function ItemDetail({match}) {

    

    useEffect (() => {
        fetchItem();
        console.log(match);
    },[]);

    const [item,setItem] = useState({
        images : {}
    });

    const fetchItem = async () => {
        const fetchdata = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await fetchdata.json();
        console.log(item.data);
        setItem(item.data.item);
    }


   
     
    



  return (
    <div>
       <h1>{item.name}</h1>
       <img src={item.images.icon} alt="" />
    </div>
  );
}

export default ItemDetail;
