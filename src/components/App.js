import React, {Component, useState} from "react";

import '../styles/App.css';


 

const App = () => {

  let genders = ['female', 'male', 'other']

  const [errorMessage, setError] = useState('')

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [gender, setGender] = useState('male')

  const [phone, setPhone] = useState('')

  const [password, setPassword] = useState('')

  const handleName = (e) => {

      setName(e.target.value)

  }

  const handleEmail = (e) => {

      setEmail(e.target.value)

  }

  const handlePhone = (e) => {

    setPhone(e.target.value)

  }

  const handlePassword = (e) => {

     setPassword(e.target.value)

  }

  const handleClick = (e) => {

      e.preventDefault();

      if(name === '' || email === '' || phone === '' || password === '') {

         setError('All fields are mandatory')

         return

      }

        var regEx = /^[a-z0-9' ']+$/i;

        if(name.charAt(0) === ' ' ) {

          setError('Name is not alphanumeric')

          return

        }

        if(!regEx.test(name)) {

            setError('Name is not alphanumeric')

            return

        }

   

        if(!email.includes('@')) {

            setError('Email must contain @')

            return

        }

       

        if(isNaN(phone)) {

          setError('Phone Number must contain only numbers')

          return

        }

        if(password.length < 6) {

          setError('Password must contain atleast 6 letters')

          return

        }

      else {

        let info = email;

        info = info.slice(0, info.indexOf("@"));

        console.log(info);

        setError("Hello " + info);

      }

  }

  return (

    <div id="main">

       <form>

         <p>{errorMessage}</p>

          <label>Name : </label>

          <input data-testid = 'name' type='text' onChange={(e) => handleName(e)}></input>

          <br/><br/>

          <label>Email : </label>

          <input data-testid = 'email' type='email' onChange={(e) => handleEmail(e)}></input>

          <br/>

          <br/>

          <label>Gender : </label>

          <select data-testid = 'gender' value={gender} onChange={(e) => setGender(e.target.value)}>

           {genders.map((gender) => (

              <option key={gender} value={gender}>{gender}</option>

           )

           )}

          </select>

          <br/>

          <br/>

          <label>Phone No. : </label>

          <input data-testid = 'phoneNumber' type='phone' onChange={(e) => handlePhone(e)}></input>

          <br/>

          <br/>

          <label>Password : </label>

          <input data-testid = 'password' type='password' onChange={(e) => handlePassword(e)}></input>

          <br/>

          <br/>

          <button  data-testid = 'submit' onClick={(e) => handleClick(e)}>Submit</button>

       </form>

    </div>

  )

}



 

export default App;
