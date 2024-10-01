import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [materials, setMaterials] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('materials', materials);
    formData.append('photo', photo);

    try {
      const response = await axios.post('http://localhost:3001/api/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Item submitted:', response.data);
      // Reset form
      setName('');
      setDescription('');
      setPrice('');
      setMaterials('');
      setPhoto(null);
    } catch (error) {
      console.error('Error submitting item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="text" placeholder="Materials Used" value={materials} onChange={(e) => setMaterials(e.target.value)} required />
      <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
