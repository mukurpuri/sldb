
// Imports: Dependencies
import React from 'react';
import './index.css';
import Pagination from './Pagination';
import Controls from './Controls';
function Sidebar(props) {
  return (
    <div className="sidebar">
      <Pagination pages={props.data}/>
      { props.builderData.length > 0 ? <Controls /> : null }
      <div className="footer-author slds-text-align_center">
        Handicraft with love by <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/mukurrr">@mukurrr</a>
      </div>
    </div>
  );
}

export default Sidebar;
