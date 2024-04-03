import React from 'react';
import '../App.css';

export default function Head() {
  return (
    <div>
      <img src="/img/project/sly.jfif" alt="Discover" />
      <header className="header">
        <h1 style={{ color: '#FFFFFF' }}>
          Discover the vast expanses of
          <span className="space-color"> space </span>
        </h1>
      </header>
      <style>{`.space-color { color: #FF70D9;}`}</style>

      <span className="endless-color" style={{ color: '#EBFF01' }}>
        endless!
      </span>
      <h2>
        Where the possibilities are
        <span className="endless-color" style={{ color: '#EBFF01' }}>
          endless!
        </span>
        {/*  кнопка */}
        <button className="buttonStyle">Learn more</button>
      </h2>
    </div>
  );
}
