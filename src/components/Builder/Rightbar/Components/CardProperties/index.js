// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import CardProperty from './CardProperty';
import CardHeader from './CardHeader';
import CardHeaderIcon from './CardHeader/icon'
//import _ from 'lodash';

//import { getBuilderData } from '../../../../../redux/actions/dataActions';

class CardProperties extends React.Component {

  render() {
    //const { builderData } = this.props;
    return (
      <div>
        <CardProperty />
        <CardHeader/>
        <CardHeaderIcon/>
        
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
      //reduxGetDemoData: () => dispatch(getBuilderData()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardProperties);