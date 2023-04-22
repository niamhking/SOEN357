import React, { useState } from "react"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import "./SignUp.css"
import { Link } from "react-router-dom"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create an Account</h1>
        <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">
          <Link to="/">Sign Up</Link>
        </button>
        <p className="alternative-link">
          Already have an account? <Link to="/signin" class="alternative-link-click">Login here!</Link>
        </p>
      </form>
      <Link to="/">
        <p className="back-link">Go back to Homepage</p>
      </Link>
    </div>
  )
}

export default SignUp
