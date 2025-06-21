import React from 'react';
import './OutputChannels.css';

interface Content {
  title: string;
  description: string;
  ctaText: string;
  price: string;
}

interface OutputChannelsProps {
  content: Content;
}

const OutputChannels: React.FC<OutputChannelsProps> = ({ content }) => {
  return (
    <div className="output-channels">
      {/* Laptop */}
      <div className="device-container">
        <div className="device laptop">
          <div className="laptop-screen">
            <div className="laptop-bezel">
              <div className="website-content">
                <h4>{content.title}</h4>
                <p>{content.description}</p>
                <div className="website-footer">
                  <span className="price">{content.price}</span>
                  <button className="cta-button">{content.ctaText}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="laptop-base">
            <div className="laptop-keyboard"></div>
            <div className="laptop-trackpad"></div>
          </div>
        </div>
      </div>

      {/* Mobile Phone */}
      <div className="device-container">
        <div className="device mobile-phone">
          <div className="phone-bezel">
            <div className="phone-speaker"></div>
            <div className="phone-screen">
              <div className="mobile-content">
                <h5>{content.title}</h5>
                <p>{content.description.slice(0, 80)}...</p>
                <div className="mobile-actions">
                  <span className="mobile-price">{content.price}</span>
                  <button className="mobile-cta">{content.ctaText}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kiosk */}
      <div className="device-container">
        <div className="device kiosk">
          <div className="kiosk-screen">
            <div className="kiosk-bezel">
              <div className="kiosk-content">
                <h6>{content.title}</h6>
                <div className="kiosk-info">
                  <span className="kiosk-price">{content.price}</span>
                  <button className="kiosk-cta">{content.ctaText}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="kiosk-stand">
            <div className="kiosk-base"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputChannels; 