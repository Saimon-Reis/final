import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ItemList from './components/ItemList';
import ApiData from './components/ApiData';
import Footer from './components/Footer';
import './index';

function App() {
  const [items, setItems] = useState([]);
  const [apiData, setApiData] = useState([]);

  // Fetch API data when component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setApiData(data.slice(0, 5)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Add item
  const addItem = async (newItem) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title: newItem }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setItems([...items, data]);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  // Delete item
  const deleteItem = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
      <ApiData data={apiData} />
      <Footer />
    </div>
  );
}

export default App;