import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'listings'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setListings(items);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <h2>🛍️ Latest Listings</h2>
      {listings.length === 0 ? (
        <p>No items posted yet.</p>
      ) : (
        <div>
          {listings.map(item => (
            <div className="item-card" key={item.id}>
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.title} />
              )}
              <h3>{item.title}</h3>
              <p><strong>Price:</strong> R{item.price}</p>
              <p><strong>Condition:</strong> {item.condition}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
