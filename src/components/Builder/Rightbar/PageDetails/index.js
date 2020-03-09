
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import { createNewPage, updatePageName } from '../../../../redux/actions/dataActions';
import _ from 'lodash';


class PageDetails extends React.Component {
  getActivePageName = data => {
    var t =  _.find(data, d => {
      return d.active === true;
    });
    if(t) {
      return t.name
    }
    return null
  }
  updatePageName = (event) => {
    var val = event.target.value;
    if(val) {
      this.props.updatePageName(val)
    }
  }
  render() {
    const  { builderData } = this.props;
    const pageName = this.getActivePageName(builderData);
    return (
        <div className="box">
        <div className="head bordered">
            PAGE DETAILS
        </div>
        <div className="content">
          <div className={builderData.length <= 0 ? "disabler" : ""}></div>
            <div className="property">
            <div className="slds-grid slds-p-left_small slds-p-right_small">
              <div className="slds-col active slds-large-size_4-of-12 key">Name</div>
              <div className="slds-col active slds-large-size_8-of-12 value">
                <input onChange={val => this.updatePageName(val)} value={pageName || ""} className="value text" type="text" />
              </div>
            </div>
            </div>
        </div>
        {/* <div className="head bordered">
        GRID CONTAINER
        </div>
        <div className="content">
          <div className={builderData.length <= 0 ? "disabler" : ""}></div>
            <div className="property">
                <div className="name">Column Height</div>
                <input onChange={val => this.updatePageName(val)} value={pageName} defaultValue={pageName} className="value text" type="text" />
            </div>
            <div className="property">
                <div className="name">Background Color</div>
                <input onChange={val => this.updatePageName(val)} value={pageName} defaultValue={pageName} className="value text" type="text" />
            </div>
        </div> */}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    builderData: state.dataReducer.builderData
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      reduxCreateNewPage: () => dispatch(createNewPage()),
      updatePageName: (val) => dispatch(updatePageName(val))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageDetails);
