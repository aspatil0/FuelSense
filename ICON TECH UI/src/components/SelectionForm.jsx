import React, { useState } from 'react';
import { SmallLogo, AnchorLogo } from './Logo';

const SelectionForm = ({ onContinue }) => {
  const [selected, setSelected] = useState(null);

  const modules = [
    { id: 'fleet', name: 'FLEET', sub: 'SENSE', disabled: false },
    { id: 'fuel', name: 'FUEL', sub: 'SENSE', disabled: false },
    { id: 'assets', name: 'ASSETS', sub: 'SENSE', disabled: false },
    { id: 'fleet-2', name: 'FLEET', sub: 'SENSE', disabled: true },
  ];

  return (
    <div className="form-wrapper" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <SmallLogo />
      
      <div className="form-inner">
        <h2 className="welcome-title">Get Started</h2>
        <p className="welcome-subtitle" style={{ marginBottom: "20px" }}>Tell us where you want to start with</p>
        
        <div className="module-grid">
          {modules.map((mod) => (
            <button 
              key={mod.id}
              className={`module-btn ${selected === mod.id ? 'selected' : ''} ${mod.disabled ? 'disabled' : ''}`}
              onClick={() => !mod.disabled && setSelected(mod.id)}
              disabled={mod.disabled}
            >
              <div className="module-icon">
                 <AnchorLogo 
                   size={24} 
                   tealColor={mod.disabled ? "#D1D5DB" : "#31B2A1"} 
                   anchorColor={mod.disabled ? "#FDBA74" : "#F37021"} 
                 />
              </div>
              <div className="module-text">
                <span className="mod-name">{mod.name}</span>
                <span className="mod-sub">{mod.sub}</span>
              </div>
            </button>
          ))}
        </div>
        
        <p className="helper-text">
          <em>Helper : Click the 9-dot icon in the top-right corner to open and switch to other apps.</em>
        </p>
        
        <button 
          className="submit-btn continue-btn" 
          onClick={onContinue}
          style={{ backgroundColor: selected ? '#228481' : '#8cc6c3' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectionForm;
