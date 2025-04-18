import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function PostItem() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Accessories');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('Good');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("You must be logged in to post.");
      return;
    }

    if (!image) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);

    try {
      const imageRef = ref(storage, `items/${uuidv4()}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'listings'), {
        userId: currentUser.uid,
        title,
        category,
        price,
        description,
        condition,
        imageUrl,
        createdAt: serverTimestamp()
      });

      alert("Item posted successfully!");
      navigate('/');
    } catch (error) {
      console.error("Error posting item:", error);
      alert("Posting failed: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>📦 Post an Item</h2>
      <form onSubmit={handleUpload}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Accessories</option>
          <option>Vehicles</option>
          <option>Property</option>
          <option>Fashion</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Books</option>
          <option>Others</option>
        </select><br /><br />

        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required /><br /><br />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required /><br /><br />

        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option>New</option>
          <option>Good</option>
          <option>Fair</option>
          <option>Used</option>
        </select><br /><br />

        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required /><br /><br />

        <button type="submit" disabled={loading}>
          {loading ? 'Posting...' : 'Post Item'}
        </button>
      </form>
    </div>
  );
}

export default PostItem;