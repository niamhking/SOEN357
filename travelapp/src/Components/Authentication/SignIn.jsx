import React, { useState } from "react"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import "./SignIn.css"
import { Link, useNavigate } from "react-router-dom"
import styles from "./SignIn.css"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

  const signIn = e => {
    if (!email || !password) {
      setErrorMsg("Fill in all the fields")
      return
    }
    e.preventDefault()
    setErrorMsg("")
    setSubmitButtonDisabled(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(async res => {
        setSubmitButtonDisabled(false)
        navigate("/")
      })
      .catch(err => {
        setSubmitButtonDisabled(false)
        console.log(err)
        alert(err.message)
      })
  }

  return (
    <div className="sign-in-container">
      <div className={styles.footer}>
        <p className={styles.error}>{errorMsg}</p>
        <form onSubmit={signIn}>
          <h1>Log In</h1>
          <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}></input>
          <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}></input>
          <button type="submit" disabled={submitButtonDisabled} onClick={signIn}>
            Sign In
          </button>
          <p className="alternative-link">
            Don't have an account? <Link to="/signup" class="alternative-link-click">Sign up here!</Link>
          </p>
        </form>
        <Link to="/">
          <p className="back-link">Go back to Homepage</p>
        </Link>
      </div>
    </div>
  )
}

export default SignIn
