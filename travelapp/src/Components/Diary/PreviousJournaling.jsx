import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./PreviousJournaling.css"
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"

const PreviousJournaling = () => {
  const [entries, setEntries] = useState([])
  const [note, setNote] = useState("")

  const entriesCollectionRef = collection(db, "diary")

  // fetch the notes from the database
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(entriesCollectionRef)
      setEntries(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      setNote(data.docs.map(doc => ({ ...doc.data(), note: doc.note })))
    }
    fetchData()
  }, [])

  return (
    <section className="mainSection">
      <div class="navbar-brand-centred navbar" href="#!">
        Journi
      </div>

      <div className="Navbar">
        <nav class="navbar navbar-expand-lg --bs-border-color-translucent">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!"></a>
            <div class="links">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                  <Link to="/"class="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Activities
                  </a>
                </li>
                <li class="nav-item">
                  <Link to="/diarylist" class="nav-link">
                    Diary
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/timeline" class="nav-link">
                    Timeline
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* if the user has not entered any memories, it is going to be displaying a blank box  */}
      {/* if the user has already entered elements in their diary, it is going to display multiple boxes */}
      {entries.length > 0 ? (
        <div className="entries-container">
          {entries.map(entry => (
            <div key={entry.id} className="entry-box">
              <p>{entry.note}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="default-element">There is currently nothing in the journal!</div>
      )}
      {/* This is a button to open the page to add a new note in the diary */}
      <Link to="/diary" class="add-entry">
        Create New Entry
      </Link>
    </section>
  )
}

export default PreviousJournaling
