// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
//import _ from 'lodash';
import './index.css';

import { getBuilderData } from '../../../../../redux/actions/dataActions';

import RowProperties from './RowProperties';
import ColumnProperties from './ColumnProperties';

class GridProperties extends React.Component {

  render() {
    //const { builderData } = this.props;
    return (
      <div>
          <RowProperties/>
          <ColumnProperties/>
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
      reduxGetDemoData: () => dispatch(getBuilderData()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridProperties);