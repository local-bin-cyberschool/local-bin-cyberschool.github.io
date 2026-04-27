import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Unable to mount app: #root element was not found.');
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
