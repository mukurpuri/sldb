import React from 'react';
import { connect } from 'react-redux';

class CardHeaderIcon extends React.Component {

  render() {
    return (
      <div className="box">
        <div className="head bordered">
            HEADER ICON PROPERTIES
        </div>
        <div className="content">
        </div>
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
    //   reduxGetDemoData: () => dispatch(getBuilderData()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardHeaderIcon);