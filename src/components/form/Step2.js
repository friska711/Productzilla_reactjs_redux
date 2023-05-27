import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../store/formSlice';
import { Link, useNavigate } from 'react-router-dom';

const Step2 = () => {
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      birthDate,
      birthPlace,
      address,
    };

    dispatch(setFormData(updatedFormData));
    navigate('/step3');
  };

  return (
    <div className="container">
      <h2>Step 2</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          placeholder="Birth Date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Birth Place"
          value={birthPlace}
          onChange={(e) => setBirthPlace(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
      <Link to="/step1" className="link-button">Back</Link>
    </div>
  );
};

export default Step2;
