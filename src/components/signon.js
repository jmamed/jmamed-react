import React, {useState} from "react";
import { Button } from "react-bootstrap";

export default function SignOnPage() {

  //useState to update States for Sign On
  const[userName, setUserName]= useState("");
  const[password, setPassword] = useState("");

  //Error Check and Validation
  const[submitted, setSubmitted] = useState(false);
  const[error, setError] = useState(false);


  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();//remove default js
    if(userName === '' || password === ''){
      setError(true);
      console.log("ERROR Please fill in fields");
    }
    else{
      setSubmitted(true);
      setError(false);
      console.log("SUCCESS");
    }
  };

  //Show popup modal Success
  const successPopup = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>Success</h1>
      </div>
    );
  };
  
  //Show popup modal error if error
  const errorPopup = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Error</h1>
      </div>
  )};

  return (
    <div className="layout">
      <h1 className="title">Basic Sign On Page</h1>
      <div className="registration-container">
      {/* refactor to a popup */}
      <div className="messages">
        {errorPopup()}
        {successPopup()}
      </div>
        <form className="regForm">
            <label className="regLabel">Username</label>
            <input id="busAddress" value={userName} onChange={handleUserName}></input>

            <label className="regLabel">Password</label>
            <input id="busAddress" value={password} onChange={handlePassword}></input>

            <span className="separator"></span>

            <Button onClick={handleFormSubmission} type="submit">Submit</Button>

        </form>
      </div>
    </div>
  );
}