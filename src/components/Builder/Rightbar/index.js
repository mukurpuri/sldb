// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import PageDetails from './PageDetails';
import _ from 'lodash';
import './index.css';
import GridProperties from './Components/GridProperties';
import { getBuilderData } from '../../../redux/actions/dataActions';

class Rightbar extends React.Component {

  renderComponentProperties = builderData => {
    if(builderData.length === 0) {
      return "";
    }
    const activePage = _.find(builderData, page => { return page.active === true });
    if(activePage !== null) {
      const type = activePage.component.type;
      switch(type) {
        case 'grid':
        return <GridProperties/>

        default:
        return null
      }
    }
    return null
  }

  render() {
    const { builderData } = this.props;
    return (
      <div className="rightbar">
        <PageDetails/>
        { this.renderComponentProperties(builderData) }
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

export default connect(mapStateToProps, mapDispatchToProps)(Rightbar);