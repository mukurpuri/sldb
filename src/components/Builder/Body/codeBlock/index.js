
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './index.css';


class CodeBlock extends React.Component {

  render() {
    return (
      <div className="codeBlock">
          
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

export default connect(mapStateToProps, mapDispatchToProps)(CodeBlock);