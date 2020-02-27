
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

  fetchSidebarData = pages => {
    var sidebarData = [];
    _.each(pages, page => {
      sidebarData.push({
        id: page.id,
        name: page.name,
        active: page.active
      });
    });
    return sidebarData;
  }

  render() {
    const { builderData } = this.props;
    const sidebarData = this.fetchSidebarData(builderData);
    return (
      <div className="builder">
          <Sidebar builderData={builderData} data={sidebarData}></Sidebar>
          <Body></Body>
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