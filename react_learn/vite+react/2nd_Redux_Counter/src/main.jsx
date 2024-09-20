import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {ReduxStore} from "./store/ReduxStore.js";
import {Provider} from "react-redux";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </StrictMode>,
)
