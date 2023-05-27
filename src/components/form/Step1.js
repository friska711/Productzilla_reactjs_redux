import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../store/formSlice';
import { Link, useNavigate } from 'react-router-dom';

const Step1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bootcamp, setBootcamp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      bootcamp,
    };

    dispatch(setFormData(formData));
    navigate('/step2');
  };

  return (
    <div className="container">
      <h2>Step 1</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>
          <label>
            <input
              type="radio"
              value="UI/UX"
              checked={bootcamp === 'UI/UX'}
              onChange={() => setBootcamp('UI/UX')}
            />
            UI/UX
          </label> <br/>
          <label>
            <input
              type="radio"
              value="Backend Engineer"
              checked={bootcamp === 'Backend Engineer'}
              onChange={() => setBootcamp('Backend Engineer')}
            />
            Backend Engineer
          </label> <br/>
          <label>
            <input
              type="radio"
              value="Frontend Engineer"
              checked={bootcamp === 'Frontend Engineer'}
              onChange={() => setBootcamp('Frontend Engineer')}
            />
            Frontend Engineer
          </label> <br/>
          <label>
            <input
              type="radio"
              value="Digital Marketing"
              checked={bootcamp === 'Digital Marketing'}
              onChange={() => setBootcamp('Digital Marketing')}
            />
            Digital Marketing
          </label>
        </div>
        <button type="submit">Next</button>
      </form>
      <Link to="/welcome" className="link-button">
      </Link>
    </div>
  );
};

export default Step1;
