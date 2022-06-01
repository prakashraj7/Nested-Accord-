import * as React from 'react';
import Folder from './components/Folder';
import explorer from './data/Datas';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Nested Accordian!</h1>
      <hr />
      <Folder explorer={explorer} />
    </div>
  );
}
