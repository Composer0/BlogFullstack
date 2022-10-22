import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root'); //change from app to root to make work.
const root = createRoot(container);
root.render(<App tab="home" />);
//React 18 Method


//React 17 and older method
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// )