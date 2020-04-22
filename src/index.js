import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import Routes from './store/routes';

const urlIcon = 'https://www.nytimes.com/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico';

ReactDOM.render(
  <div>
    <Favicon url={urlIcon} />
    <Routes />
  </div>,
  document.getElementById('root'),
);
