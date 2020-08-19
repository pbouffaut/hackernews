import React from 'react';
import './Loading.css';

const Loading:React.FC = () => {
  return (
    <div className="Loading" data-testid="loading">
      <div className="Loading__bounce1"></div>
      <div className="Loading__bounce2"></div>
      <div className="Loading__bounce3"></div>
    </div>
  );
}

export default Loading;
