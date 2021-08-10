import React from "react";


const Video = (props) => (
    <section>
      <h1>Counter {props.nr} </h1>
      
      
      <button onClick = {props.setToggle} >Toggle</button>
      
      
    </section>
)

export default Video;

