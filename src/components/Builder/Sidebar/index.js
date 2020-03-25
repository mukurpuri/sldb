
// Imports: Dependencies
import React from 'react';
import './index.css';
import Pagination from '../../Header/Pagination';
import Controls from './Controls';
import Constants from '../../../config/constants';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className={`header-logo  ${Constants.appGradientTheme}`}>
        <div className="cloud">
          <div className={`slds-cloud`}></div>
        </div>
      </div>
      { props.builderData.length > 0 ? <Controls /> : null }
      <div className="footer-author slds-text-align_center">
        Built for Trailblazers by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/mukurrr">@mukurrr</a>
      </div>
    </div>
  );
}

export default Sidebar;
