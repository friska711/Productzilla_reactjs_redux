import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './store/formSlice';
import Step1 from './components/form/Step1';
import Step2 from './components/form/Step2';
import Step3 from './components/form/Step3';
import Welcome from './components/welcome/Welcome';


const store = configureStore({
  reducer: {
    formData: formReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
