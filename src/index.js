import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonCard from './components/PersonCard';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="container">
      <PersonCard nombre="Marcos" apellido="Benítez" edad="26" hairColor="Blue"/>
      <PersonCard nombre="Maria" apellido="Cabrera" edad="27" hairColor="Pink"/>
      <PersonCard nombre="Marcelo" apellido="Benítez" edad="41" hairColor="Black"/>
      <PersonCard nombre="Blas" apellido="Benítez" edad="66" hairColor="Blue"/>
      <PersonCard nombre="Maria" apellido="Paredes" edad="66" hairColor="Red"/>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
