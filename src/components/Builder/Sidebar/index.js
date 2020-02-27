
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
    </div>
  );
}

export default Sidebar;
