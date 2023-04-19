import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./Journaling.css"

const Journaling = () =>  {

    // function to create journaling notepad
    const [note, setNote] = useState("");

    const handleNoteChange = (event) => {
      setNote(event.target.value);
    };
  
    const handleSaveNote = () => {
      // handle saving note here
      console.log("Note saved: ", note);
    };


    return (
    <section className="mainSection">
         <div class="navbar-brand-centred navbar" href="#!">
            Journi
        </div>

        <div className='Navbar'>
            <nav class="navbar navbar-expand-lg --bs-border-color-translucent">
                <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!"></a>
                <div class="links">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item">
                        <a class="nav-link" href="#!">
                        Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">
                        Activities
                        </a>
                    </li>
                    <li class="nav-item">
                        <Link to="/diary" class="nav-link">
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
        <div className='title-journaling'>
            <div className="title-writing">
                Journaling
            </div>

        </div>
        <div className='square-box'>
            <textarea
            className="notepad"
            value={note}
            onChange={handleNoteChange}
            placeholder="Write your thoughts here..."
            />

            <div className='upload-container'>
                <input type="file" id="file-input"/>
                <label for="file-input" class="upload-button">
                    Upload!
                </label>
            </div>

        </div>
        <div className="button-container">
        <button className="save-button" onClick={handleSaveNote}>
          Save
        </button>
            <div className='cancel-button'>
                Cancel
            </div>
        </div>

    </section>
    )
  }

export default Journaling