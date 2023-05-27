import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const formData = useSelector((state) => state.formData);

  return (
    <div className="container">
      <div className="welcome-container">
        <h2 className="welcome-message">Welcome</h2>
        <div className="user-data">
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>Bootcamp: {formData.bootcamp}</p>
          <p>Birth Date: {formData.birthDate}</p>
          <p>Birth Place: {formData.birthPlace}</p>
          <p>Address: {formData.address}</p>
        </div>
        <Link to="/step3" className="link-button">Back</Link>
      </div>
    </div>
  );
};

export default Welcome;
