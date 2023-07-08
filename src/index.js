import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Frontpage from './Frontpage';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Root = () => {    
  const [showApp, setShowApp] = useState(false);

 

  return (
    <React.StrictMode>
      {showApp ? (
        <App setShowApp={setShowApp}/>
      ) : (
        <Frontpage setShowApp={setShowApp} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();
