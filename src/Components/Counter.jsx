import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Incre, Decre } from '../Redux/Action';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,rgb(255, 255, 255),rgb(0, 166, 255))',
      }}
    >
      <div
        className="p-5 shadow-lg rounded-4 text-center"
        style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#fff',
          maxWidth: '400px',
          width: '90%',
        }}
      >
        <h2 className="fw-bold mb-4"> Redux Counter</h2>

        <div
          className="display-3 fw-bold mb-5"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
        >
          {count}
        </div>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-outline-light px-4 py-2 fw-semibold rounded-pill"
            onClick={() => dispatch(Incre())}
            style={{ transition: '0.3s', borderWidth: '2px' }}
          >
            ➕ Increment
          </button>

          <button
            className="btn btn-outline-warning px-4 py-2 fw-semibold rounded-pill"
            onClick={() => dispatch(Decre())}
            style={{ transition: '0.3s', borderWidth: '2px' }}
          >
            ➖ Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
