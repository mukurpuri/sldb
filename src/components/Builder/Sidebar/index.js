
// Imports: Dependencies
import React from 'react';
import './index.css';
import Pagination from '../../Header/Pagination';
import SideProperties from './SideProperties';
import Controls from './Controls';
import _ from 'lodash';
import Constants from '../../../config/constants';

function Sidebar(props) {
  const { builderData } = props;
  const  activePage = _.find(builderData, b => { return b.active === true });
  return (
    <div className="sidebar slds-show_large">
      <div className={`header-logo  ${Constants.appGradientTheme}`}>
        <div className="cloud">
          <div className={`slds-cloud`}></div>
        </div>
        <p>
          <img src="./textLogo.png"/>
        </p>
      </div>
      { props.builderData.length > 0 ? <Controls /> : null }
      {
        activePage && activePage.component.type ? 
        <SideProperties/> : null
      }
      <div className="footer-author slds-text-align_center">
        Built for Trailblazers by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/mukurrr">@mukurrr</a>
      </div>
    </div>
  );
}

export default Sidebar;
