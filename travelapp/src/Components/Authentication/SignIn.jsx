import React, { useState } from "react"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import "./SignIn.css"
import { Link } from "react-router-dom"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In</h1>
        <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}></input>
        <button type="submit">
          <Link to="/">Sign In</Link>
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign up here!</Link>
        </p>
      </form>
    </div>
  )
}

export default SignIn
