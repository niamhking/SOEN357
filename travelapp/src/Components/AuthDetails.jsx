import React, { useEffect, useState } from "react"
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("successfully signed out")
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      {authUser ? (
        <>
          <p style={{ color: "white" }}>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p style={{ color: "white" }}>Signed Out</p>
      )}
    </div>
  )
}

export default AuthDetails
