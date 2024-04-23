// import React from 'react'
// import { useState } from 'react'
// import './register.css'
// import 'bulma/css/bulma.min.css';

// export default function Register() {
//     const [email, setEmail] = React.useState('')
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//       //checks that email is valid
//     let emailTest = /\S+@\S+\.\S+/.test(email);
//       // checks that passwords match
//     let passwordTest = password === confirmPassword;

//       //handles any changes the inputs and saves it to state
//     const handleChange = (setState) => (event) => {
//       setState(event.target.value);
//       console.log(event.target.value)
//   };

//       //handles submission
//     const submit = () => { 
//       passwordTest && emailTest ? console.log("logged in!") : console.log("passwords do not match or email is invalid");
//   }
   
//   return(
//     <main>
//     <div className="full-background-primary">
//       <section className="section">   
//        <div className="container register-container has-text-centered">
//         <h1 className="title is-4 has-text-black has-text-weight-normal">Register</h1>
//       <input
//         className={emailTest ? "input" : "input is-danger"}
//         type="text"
//         placeholder="Email Address"
//         value={email}
//         onChange={handleChange(setEmail)}
//           />

//       <input
//         className="input is-primary"
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={handleChange(setPassword)}
//           />

//       <input
//         className={passwordTest ? "input" : "input is-danger"}
//         type="password"
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChange={handleChange(setConfirmPassword)}
//           />
//       <button
//         className="button is-success" 
//         onClick={submit}>Create Account
//           </button>              
//        </div>
//       </section>
//     </div>
//     </main>
//   )
// }
