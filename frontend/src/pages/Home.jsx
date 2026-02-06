import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const Navigate = useNavigate();
  const handleClick =()=>{
    Navigate('/about');

  }
  return (
    <div>
        
      <h1>Name : {props.name}</h1>
      <button onClick={handleClick}>Go to about page</button>
      
      

    </div>
  )
}

export default Home
