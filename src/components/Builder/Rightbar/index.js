// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import PageDetails from './PageDetails';
import _ from 'lodash';
import './index.css';
import GridProperties from './Components/GridProperties';
import CodeProperties from './codeProperties';
import { getBuilderData } from '../../../redux/actions/dataActions';
import CardProperties from './Components/CardProperties';
import ButtonProperty from './Components/ButtonProperty';
import CheckBoxProperty  from './Components/CheckProperty';
import IconProperty from './Components/IconProperty';
import InputProperty from './Components/InputProperty';
import PageMode from './PageMode';

class Rightbar extends React.Component {

  renderCodeProperty = data => {
    const activePage = _.find(data, d => {return d.active === true});
    if(activePage && activePage.state !== "code") {
      return null;
    }
    return <CodeProperties/>
  }

  renderComponentProperties = builderData => {
    if(builderData.length === 0) {
      return "";
    }
    const activePage = _.find(builderData, page => { return page.active === true });
    if(activePage !== null && activePage.state === "builder") {
      const type = activePage.component.type;
      switch(type) {
        case 'grid':
        return <GridProperties/>

        case 'card':
        return <CardProperties/>

        case 'button':
        return <ButtonProperty/>

        case 'checkbox':
        return <CheckBoxProperty/>

        case 'icon':
        return <IconProperty/>

        case 'input':
        return <InputProperty/>

        default:
        return null
      }
    }
    return null
  }

  render() {
    const { builderData } = this.props;
    return (
      <div className="rightbar slds-show_large">
        <PageMode/>
        <PageDetails/>
        { this.renderComponentProperties(builderData) }
        { this.renderCodeProperty(builderData) }
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