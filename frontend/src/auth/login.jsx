import React from 'react'

const Login = () => {
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
            <label>Password :</label>
            <input type="password" />
            value={userData.password}
            onChange={handleChange}
            <button>login</button>
            </form>  
    </div>
  )
}

export default Login