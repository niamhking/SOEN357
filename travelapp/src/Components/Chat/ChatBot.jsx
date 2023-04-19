import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import "./ChatBot.css"; // Importing styling
import { Container, Form } from 'react-bootstrap'; // Import necessary components
import pin from ".././../images/paperclip.png";
import { Link } from "react-router-dom";
const ChatBot = () => {
  // Get the current date and time
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const period = currentHour >= 12 ? 'PM' : 'AM';
  const formattedHour = currentHour % 12 || 12; // Convert to 12-hour format
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const [input, setInput] = useState(''); // State to store user input

  // Function to handle sending user input and receiving responses
  const sendMessage = async () => {
    if (input.trim() !== '') { // Don't send empty messages
      try {
        setIsTyping(true); // Set isTyping to true
        // Add user input to chat messages
        setMessages([...messages, { sender: 'user', text: input, typing: true }]);
        // Make API call to backend service with user input
        const response = await axios.post('/api/chat', { input }); // Assuming your backend service is located at '/api/chat'
        // Add chat bot response to chat messages
        setMessages([...messages, { sender: 'chatbot', text: response.data.response, typing: false }]);
        setInput(''); // Clear input after sending
        setIsTyping(false); // Set isTyping back to false
      } catch (error) {
        console.error(error); // Handle API call error
      }
    }
  };
  

  // Function to handle user input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Function to handle sending user input when Enter key is pressed
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
    <br></br>
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
                    <Link to="/" class="nav-link">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
              
                </li>
                <li class="nav-item">
                  <Link to="/diary" class="nav-link">
                    Diary
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/timeline" class="nav-link">
                    Connect
                  </Link>
                </li> 
                <li class="nav-item">
                  <Link to="/ChatBot" class="nav-link">
                    Support
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
</div>
    <Container>
      {/* The main container for the chat */}
      <div className="container-m">
        {/* The Left bar section */}
        <div className="chat-list-m" style={{color: 'white'}}>
          Frequently Asked:
        <button
                  className="button-m form-control mt-2"
                  type="button"
                  value="Activity Recommendations"
                  onClick={handleInputChange}
                >
                  Activity Recommendations
        </button>
        <button
                  className="button-m form-control mt-2"
                  type="button"
                  value="Budgetting"
                  onClick={handleInputChange}
                >
                 Budgetting
        </button>
        <button
                  className="button-m form-control mt-2"
                  type="button"
                  value="Event planing"
                  onClick={handleInputChange}
                  
                >
                  Event planing
        </button>
        <button
                  className="button-m form-control mt-2"
                  type="button"
                  value="Airline Credit"
                  onClick={handleInputChange}
                >
                  Airline Credit
        </button>
          <div >
          {/* Maps through all the users in the 'users_information' array, 
              except the current user, and renders a 'user-tab' div for each */}
         </div>
        </div>

        {/* A divider between the chat list and messages section*/} 
        <div className="divider-m"></div>

        {/* The messages section */}
        <div className="text-m">
  
          
            {/* Renders all the messages in the 'messages' array, with the sender's 
                messages having a green background and the receiver's messages having 
                a grey background */}
            <div style={{ overflowY: "scroll", height: "400px", color: 'white' }} >
                 <h2>Today</h2>
                 <h3>Virtual Agent</h3>
                
                
                <p>
                Hey, Welcome to journi, your ultimate travel planning companion.;)
                </p>
                <p>
                I'm here to help you plan your dream trip and discover amazing activities and experiences. How can I assist you today?
                </p>
                <div>
               {/* Render the current time in an h1 tag */}
                   <h4>{formattedHour}:{currentMinute} {period}</h4>
                </div>
             
              
               <div>
               {messages.map((message, index) => (
                <div 
                key={index}
                className='message-m sent-m'>
                  <p>
                   {message.text}
                  </p>
                 </div>
                ))}
              </div>
            </div>

            {/* A form for sending a message */}
            <Form>
           
            <div className="textarea-message form-group">  
                <textarea
                  type="text"
                  className="textarea-message"
                  rows={1}
                  value={input} 
                  onChange={handleInputChange} 
                  onKeyPress={handleKeyPress}
                  placeholder="Type a question and I'll look for an answer"
                ></textarea>
              </div>
          
      

              <div className="containRequest right-side">
                <label for="file-upload">
              <img src={pin} ></img>
              <input
                className="file-m"
                id="file-upload"
                type="file"
               
              ></input>
              </label>
                <button
                  className="button-m form-control mt-2"
                  type="button"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>

              
            </Form>

            {/* An input field for uploading a file */}
           
          </div>
          </div>
      </Container>
    </>
  );
};

export default ChatBot;
