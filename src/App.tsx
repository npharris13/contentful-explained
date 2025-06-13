import React, { useState } from 'react';
import './App.css';
import ContentfulAdmin from './components/ContentfulAdmin';
import ConnectionLines from './components/ConnectionLines';
import OutputChannels from './components/OutputChannels';
import Header from './components/Header';

function App() {
  const [content, setContent] = useState({
    title: 'Our Amazing Product',
    description: 'Discover the perfect solution for your needs.',
    ctaText: 'Buy now',
    price: '$29.99'
  });

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="demo-container">
          <div className="left-section">
            <ContentfulAdmin content={content} onContentChange={setContent} />
          </div>
          <div className="connection-section">
            <ConnectionLines />
          </div>
          <div className="right-section">
            <OutputChannels content={content} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App; 