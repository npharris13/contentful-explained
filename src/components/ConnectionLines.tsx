import React from 'react';
import './ConnectionLines.css';

const ConnectionLines: React.FC = () => {
  return (
    <div className="connection-lines">
      <svg width="100" height="780" className="connection-svg">
        {/* Main vertical line from admin */}
        <line x1="10" y1="80" x2="10" y2="680" stroke="#2478cc" strokeWidth="3"/>
        
        {/* Branch lines to each device - positioned to align with device centers */}
        <line x1="10" y1="80" x2="90" y2="80" stroke="#2478cc" strokeWidth="2"/>
        <line x1="10" y1="380" x2="90" y2="380" stroke="#2478cc" strokeWidth="2"/>
        <line x1="10" y1="680" x2="90" y2="680" stroke="#2478cc" strokeWidth="2"/>
        
        {/* Connection dots at branch points */}
        <circle cx="10" cy="80" r="3" fill="#2478cc"/>
        <circle cx="10" cy="380" r="3" fill="#2478cc"/>
        <circle cx="10" cy="680" r="3" fill="#2478cc"/>
        
        {/* End dots pointing to devices */}
        <circle cx="90" cy="80" r="3" fill="#2478cc"/>
        <circle cx="90" cy="380" r="3" fill="#2478cc"/>
        <circle cx="90" cy="680" r="3" fill="#2478cc"/>

        {/* Animated data flow effect */}      
        <circle cx="10" cy="80" r="5" fill="none" stroke="#2478cc" strokeWidth="1.5" opacity="0.7">
          <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" begin="0.7s"/>
          <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" begin="0.7s"/>
        </circle>
        <circle cx="10" cy="380" r="5" fill="none" stroke="#2478cc" strokeWidth="1.5" opacity="0.7">
          <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" begin="0.7s"/>
          <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" begin="0.7s"/>
        </circle>
        <circle cx="10" cy="680" r="5" fill="none" stroke="#2478cc" strokeWidth="1.5" opacity="0.7">
          <animate attributeName="r" values="5;10;5" dur="2s" repeatCount="indefinite" begin="0.7s"/>
          <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" begin="0.7s"/>
        </circle>
        
        {/* Flowing data particles */}
        <circle cx="0" cy="80" r="2" fill="#2478cc" opacity="0.8">
          <animate attributeName="cx" values="10;90;10" dur="3s" repeatCount="indefinite" begin="1s"/>
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <circle cx="0" cy="380" r="2" fill="#2478cc" opacity="0.8">
          <animate attributeName="cx" values="10;90;10" dur="3s" repeatCount="indefinite" begin="1s"/>
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <circle cx="0" cy="680" r="2" fill="#2478cc" opacity="0.8">
          <animate attributeName="cx" values="10;90;10" dur="3s" repeatCount="indefinite" begin="1s"/>
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </svg>
      
      <div className="connection-label">
        <span>API</span>
      </div>
    </div>
  );
};

export default ConnectionLines; 