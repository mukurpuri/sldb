
import React from "react";
import {
  Link,
  useRouteMatch,
} from "react-router-dom";
import Constants from '../../config/constants';

import './index.css';
function HomeScreen() {
  let match = useRouteMatch();
  return (
    <div className="home">
      {/* <div className="home-header">
        <div className="cloud">
          <div className={`slds-cloud  whiteCloud`}></div>
        </div>
      </div> */}
      <div className="homebody slds-text-align--center"> 
        <h1 className="headline slds-m-bottom--none">
          SLDB
        </h1>
        <h2 className="sub-headline slds-text-align--center">
          Salesforce Lightning Design Builder
        </h2>
        <div className="c2a">
        <Link to={`/builder`}>
          <button onClick={() => {}} className="builderNavigate">
            Launch Builder 
          </button>
        </Link>
        
        </div>
        <div className="screenshots-wrappers">
          <div className="screenshot-container">
            <img src="./screen1.png" />
          </div>
        </div>
      </div>
        
      <div className="footer"></div>
    </div>
  );
}

export default HomeScreen;
