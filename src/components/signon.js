import React, {useState} from "react";
import { Button, Modal} from "react-bootstrap";

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

  const[show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();//remove default js
    if(userName === '' || password === ''){
      setError(true);
      handleShow();
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
      <Modal style={{display: error ? '' : 'none'}} show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Error Message</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="error">Please enter all mandatory fields - Try Again</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
            <label className="regLabel" htmlFor="username">Username</label>
            <input id="username" value={userName} onChange={handleUserName}></input>

            <label className="regLabel" htmlFor="password">Password</label>
            <input id="password" name="password" value={password} onChange={handlePassword}></input>

            <span className="separator"></span>

            <Button onClick={handleFormSubmission} type="submit">Submit</Button>

        </form>
      </div>
    </div>
  );
}