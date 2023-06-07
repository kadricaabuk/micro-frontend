import React, { useState } from 'react';
import App from './App';

export default function MainApp() {
  const [name, setName] = useState(null);
  return (
    <>
      <h1>PLAYGROUND CONTAINER (DUMMY HOST)</h1>
      <h3 style={{ textAlign: 'center' }}>{ name ? <p>Your name is: {name}</p> : null }</h3>
      <App onChange={(e) => setName(e.target.value)} />
    </>
  );
}