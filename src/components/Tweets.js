import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
    const tweets = [{name : 'Franklin',ability:'Driving'},
    {name:'Michael',ability:'Bullet Time'},
    
    {name : 'Trevor',ability : 'Invincibility'}
]

    return (

        <section>
     {tweets.map(tweet => (
         <Tweet name = {tweet.name} ability = {tweet.ability}   />
     ))}
    </section>
        )
    }

export default Tweets;