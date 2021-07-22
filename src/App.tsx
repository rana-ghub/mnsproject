import React from 'react';
import Parent from './Parent';
import './App.scss';


const App = () => {

  const items = [
    { id: 1, value: "clothing", name: "Clothing, home (excluding furniture) and beauty" },
    { id: 2, value: "flower", name: "Flowers" },
    { id: 3, value: "wine", name: "Wine" },
    { id: 4, value: "hamper", name: "Hamper" },
    { id: 5, value: "furniture", name: "Furniture" },
  ];

  return (
    <div className="App">
      <h1>UK Delivery and collection</h1>
      <h2> If you've ordered...</h2>
      {
        items.map((item) => {
          return (<Parent items={item} />)
        })
      }
    </div>
  );
}

export default App;
