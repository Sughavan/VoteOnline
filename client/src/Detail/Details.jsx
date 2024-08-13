import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    address: '',
    phoneNumber: '',
    aadhar: '',
    voterId: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [age, setAge] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
  
    const isValid = Object.keys(formData).every(key => 
      key === 'middleName' || formData[key].trim() !== ''
    );

 
    if (formData.dob) {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }

      setAge(calculatedAge);
      if (calculatedAge >= 18) {
        setIsFormValid(isValid);
      } else {
        setIsFormValid(false);
      }
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age >= 18) {
      navigate('/Vote', { state: formData });
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className='form'>
      <h1>Details</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <label htmlFor="firstName" className='label'>First Name</label>
        <input type="text" id="firstName" name="firstName" className='input' value={formData.firstName} onChange={handleChange} required />
        <br />

        <label htmlFor="middleName" className='label'>Middle Name (Optional)</label>
        <input type="text" id="middleName" name="middleName" className='input' value={formData.middleName} onChange={handleChange} />
        <br />

        <label htmlFor="lastName" className='label'>Last Name</label>
        <input type="text" id="lastName" name="lastName" className='input' value={formData.lastName} onChange={handleChange} required />
        <br />

        <div className='dob'>
          <label htmlFor="dob" className='label'>Date of Birth</label>
          <input type="date" id="dob" name="dob" className='input' value={formData.dob} onChange={handleChange} required />
        </div>

        <div className='address'>
          <label htmlFor="address" className='label'>Address</label>
          <input type="text" id="address" name="address" className='input' value={formData.address} onChange={handleChange} required />
        </div>

        <div className='phone-number'>
          <label htmlFor="phoneNumber" className='label'>Number</label>
          <input type="number" id="phoneNumber" name="phoneNumber" className='input' value={formData.phoneNumber} onChange={handleChange} inputMode="numeric" required />
        </div>

        <div className='aadhar'>
          <label htmlFor="aadhar" className='label'>Aadhar number</label>
          <input type="number" id="aadhar" name="aadhar" className='input' value={formData.aadhar} onChange={handleChange} inputMode="numeric" required />
        </div>

        <div className='vote-id'>
          <label htmlFor="voterId" className='label'>Voter's Id</label>
          <input type="text" id="voterId" name="voterId" className='input' value={formData.voterId} onChange={handleChange} required />
        </div>

        <button type='submit' className='button' disabled={!isFormValid}>Submit</button>
      </form>
      {showPopup && (
        <div className="popup">
          <p>You are not allowed to vote as you are under 18 years old.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Details;
