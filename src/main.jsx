import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root');

const reactRootElement = createRoot(rootElement);

reactRootElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
