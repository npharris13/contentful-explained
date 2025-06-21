import React, { useState } from 'react';
import './App.css';
import ContentfulAdmin from './components/ContentfulAdmin';
import ConnectionLines from './components/ConnectionLines';
import OutputChannels from './components/OutputChannels';
import Header from './components/Header';

function App() {
  const [content, setContent] = useState({
    title: 'Contentful',
    description: 'Create once, publish everywhere.',
    ctaText: 'Learn More',
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