
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './index.css';

class AddComponent extends React.Component {
  render() {
    const { builderData } = this.props;
    if(builderData.length === 0) {
      return null
    }
    return (
      <div className="componentDemo">
        <h1>Hello Artisan <span role="img" arial-label="emoij">&#128075;</span></h1>
        <h2>This is your Component Builder</h2>
        <h3 className="slds-m-top_x-large">Select SLDS components from leftbar and<br/> Set properties from the rightbar </h3>
        <h3 className="slds-m-top_x-large">
            <strong>or</strong>
        </h3>
        <h3 className="slds-m-top_x-large">Press <span className="code-key slds-m-left--small  slds-m-right--small">{window.navigator.userAgent.indexOf("Mac") !== -1 ? "Cmd" : "Ctrl"} + Shift + O</span> to create custom components</h3>
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
      
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
