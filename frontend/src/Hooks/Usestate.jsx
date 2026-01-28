import react, { useState } from 'react'
const UseState = () => {
    const [name,setName]=useState("");

    return (
        <div>
            <from >
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter the name'/>
                <button type= 'submit'>submit</button>
            </from>
        </div>
    )
}
export default UseState