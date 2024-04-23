import React from 'react'
import { useState } from 'react'
import 'bulma/css/bulma.css';

export default function App() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

      //checks that email is valid
      let emailTest = /\S+@\S+\.\S+/.test(email);
      // checks that passwords match
    let passwordTest = password === confirmPassword;

      //handles any changes the inputs and saves it to state
    const handleChange = (setState) => (event) => {
      setState(event.target.value);
      console.log(event.target.value)
  };

      //handles submission
    const submit = () => { 
      passwordTest && emailTest ? console.log("logged in!") : console.log("passwords do not match or email is invalid");
  }
   
  return(
    <section className="hero is-primary is-fullheight">
     <div className="hero-body">
       <div className="container">
         <div className="columns is-centered">
          <form action=""
                className="box">
           <div className="field">
             <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleChange(setEmail)}
                />

              <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange(setPassword)}
                />

              <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleChange(setConfirmPassword)}
                />
            <div className="has-text-centered">
              <button
                  className="button is-success" 
                  onClick={submit}>Create Account
                </button>
            </div>    
              </div>
            </form>
          </div>
        </div>
      </div>        
    </section>  
  )
}