import React from 'react'

const Signup = () => {
    const [userData,setUserdata]=useState({
        email:"",
        password:""
    })
  return (
    <div>
        <form>
            <label>Email :</label>
            <input type="email"
            value={userData.email}
            onChange={handleChange}
            placeholder='Enter the email'/>
          <br></br>
          <br> </br>
            <label>Password :</label>
            <input type="password" 
            value={userData.password}
            onChange={handleChange}
            placeholder='enter password'/>
            <br></br>
            <br></br>
            <button>login</button>
            </form>  
    </div>
  )
}

export default Signup;