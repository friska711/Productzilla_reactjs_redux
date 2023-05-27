import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../store/formSlice';
import { Link, useNavigate } from 'react-router-dom';

const Step3 = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      password,
      confirmPassword,
    };

    dispatch(setFormData(updatedFormData));
    navigate('/welcome');
  };

  return (
    <div className="container">
      <h2>Step 3</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/step2" className="link-button">Back</Link>
    </div>
  );
};

export default Step3;
