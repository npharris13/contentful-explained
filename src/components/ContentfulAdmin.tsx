import React from 'react';
import './ContentfulAdmin.css';

interface Content {
  title: string;
  description: string;
  ctaText: string;
  price: string;
}

interface ContentfulAdminProps {
  content: Content;
  onContentChange: (content: Content) => void;
}

const ContentfulAdmin: React.FC<ContentfulAdminProps> = ({ content, onContentChange }) => {
  const handleInputChange = (field: keyof Content, value: string) => {
    onContentChange({
      ...content,
      [field]: value
    });
  };

  return (
    <div className="contentful-admin">
      <div className="admin-header">
        <h3>Content Entry</h3>
        <div className="entry-status">
          <span className="status-indicator published"></span>
          Published
        </div>
      </div>
      
      <div className="content-fields">
        <div className="field-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={content.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="content-input"
            placeholder="Enter title..."
          />
        </div>

        <div className="field-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={content.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="content-textarea"
            placeholder="Enter description..."
            rows={4}
          />
        </div>

        <div className="field-group">
          <label htmlFor="ctaText">Call to Action</label>
          <input
            id="ctaText"
            type="text"
            value={content.ctaText}
            onChange={(e) => handleInputChange('ctaText', e.target.value)}
            className="content-input"
            placeholder="Enter CTA text..."
          />
        </div>

        <div className="field-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            value={content.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
            className="content-input"
            placeholder="Enter price..."
          />
        </div>
      </div>

      <div className="admin-footer">
        <button className="publish-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 5L6 12L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Auto-saved
        </button>
      </div>
    </div>
  );
};

export default ContentfulAdmin; 