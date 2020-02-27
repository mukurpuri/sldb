
// Imports: Dependencies
import React from 'react';
import { Header, Builder } from '../../components';
import './index.css';

function BuilderScreen() {
  return (
    <div className="wrapper">
        <Header type="header-builder"/>
        <Builder />
    </div>
  );
}

export default BuilderScreen;
