import React, { Fragment } from 'react';
import AppRouter from './routing/routing.component';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function App() {
  return (
  <Fragment>
    <AppRouter />
  </Fragment>
  );
}

export default App;
