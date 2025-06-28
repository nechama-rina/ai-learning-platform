// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'primereact/resources/themes/lara-light-indigo/theme.css'; // או כל ערכת עיצוב אחרת
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { Provider } from 'react-redux';
// import { store } from './store/store'; // ודאי שזה הנתיב הנכון לקובץ שלך

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

