import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function RegistrationPage() {
  
  //useState to update States for Registration
  const[firstName, setFirstName] = useState("");
  const[middleName, setMiddleName] = useState("");
  const[lastName, setLastName] = useState("");
  const[dob, setDOB] = useState("");
  const[phoneNumber, setPhoneNum] = useState("");
  const[emailAddress, setEmailAddress] = useState("");
  const[accountNumber, setAcctNum] = useState("");
  const[busAddress, setBusAddress] = useState("");

  const[userName, setUserName]= useState("");
  const[password, setPassword] = useState("");

  //Error Check and Validation
  const[submitted, setSubmitted] = useState(false);
  const[error, setError] = useState(false);

  //Handle form field changes
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };
  const handleMiddleName = (e) => {
    setMiddleName(e.target.value);
    setSubmitted(false);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };
  const handleDOB = (e) => {
    setDOB(e.target.value);
    setSubmitted(false);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNum(e.target.value);
    setSubmitted(false);
  };
  const handleEmailAddress = (e) => {
    setEmailAddress(e.target.value);
    setSubmitted(false);
  };
  const handleAccountNumber = (e) => {
    setAcctNum(e.target.value);
    setSubmitted(false);
  };
  const handleBusinessAddress = (e) => {
    setBusAddress(e.target.value);
    setSubmitted(false);
  };
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
    if(firstName === '' || lastName === '' || dob === '' || 
        phoneNumber === '' || emailAddress === '' ||
        accountNumber === '' || busAddress === '' || 
        userName === '' || password === ''){
      //note middle initial is not required to submit
      setError(true);
      console.log("ERROR Please fill in all registration fields");
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
      <h1>User {firstName} successfully registered!!</h1>
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
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  
  
  return (
    <div className="layout registration-layout">
      <h1 className="title">Basic Registration Page</h1>
      <p className="title">Create an Account / Register</p>

      {/* refactor to a popup */}
      <div className="messages">
        {errorPopup()}
        {successPopup()}
      </div>

      <div className="registration-container">
        <form className="regForm">
          <p className="title">Personal Information</p>

          <label htmlFor="firstName" className="regLabel">First Name</label>
          <input id="firstName" name="firstName" value={firstName} onChange={handleFirstName} type="text"></input>
          
          <label htmlFor="middleName" className="regLabel">Middle Initial (Optional)</label>
          <input id="middleName" name="middleName" value={middleName} onChange={handleMiddleName} type="text" maxLength="10"></input>

          <label htmlFor="lastName" className="regLabel">Last Name</label>
          <input id="lastName" name="lastName" value={lastName} onChange={handleLastName} type="text"></input>

          <label htmlFor="dob" className="regLabel">Date of Birth</label>
          <input id="dob" name="dob" value={dob} onChange={handleDOB} type="date"></input>

          <p className="title">Contact Information</p>

          <label htmlFor="phoneNumber" className="regLabel">Phone Number</label>
          <input id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>

          <label htmlFor="emailAddress" className="regLabel">Email Address</label>
          <input id="emailAddress" name="emailAddress" value={emailAddress} onChange={handleEmailAddress} type="email"></input>

          <label htmlFor="accountNumber" className="regLabel">Account Number</label>
          <input id="accountNumber" name="accountNumber" value={accountNumber} onChange={handleAccountNumber} type="text" maxLength="10"></input>

          <label htmlFor="busAddress" className="regLabel">Business Address</label>
          <input id="busAddress" name="busAddress" value={busAddress} onChange={handleBusinessAddress} type="text"></input>

          <span className="separator"></span>

          <p>Fill in fields to create an account</p>
          <label htmlFor="userName" className="regLabel">Username</label>
          <input id="userName" name="userName" value={userName} onChange={handleUserName}></input>

          <label htmlFor="password" className="regLabel">Password</label>
          <input id="password" name="password" value={password} onChange={handlePassword} type="password"></input>

          <span className="separator"></span>

          <Button onClick={handleFormSubmission} type="submit">Submit</Button>

        </form>
      </div>
      
      


    </div>
  );
}