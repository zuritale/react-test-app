import React from 'react';

const LoadingCard = () => {
  return (
    <div className="card p-2 h-100 w-100">
      <div className="loading-content card-body d-flex flex-column justify-content-between">
        <div className="h-50 w-100" />
        <div className="loading-text-placeholder w-100" />
        <div className="loading-text-placeholder w-75" />
        <div className="loading-text-placeholder w-50" />
        <div className="loading-text-placeholder w-75" />
        <div className="loading-text-placeholder w-25" />
      </div>
    </div>
  );
}

export default LoadingCard;
