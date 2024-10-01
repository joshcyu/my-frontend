// src/App.js
import React from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

const App = () => {
  return (
    <div>
      <h1>Item Submission Form</h1>
      <ItemForm />
      <ItemList />
    </div>
  );
};

export default App;
