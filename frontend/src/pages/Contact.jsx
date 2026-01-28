import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("Mammuu");
  const ToggleName = ()=>{
    setName(name==="Mamatha"?"mammuu":"Mamatha")
  }

  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={ToggleName}>Toggle</button>
      <Service name = {props.name}/>
    </div>
  );
};

export default Contact;