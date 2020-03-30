
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import Body from './Body';
import './index.css';
import { getBuilderData , createNewPage } from '../../redux/actions/dataActions';

class Builder extends React.Component {

  componentDidMount = () => {
    this.props.reduxAddBuilderPage();
  }

  render() {
    const { builderData } = this.props;
    return (
      <div className="builder">
          <Sidebar builderData={builderData}></Sidebar>
          <Body builderData={builderData}></Body>
          <Rightbar></Rightbar>
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
      reduxAddBuilderPage : () => dispatch(createNewPage())
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder);