// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import CardProperty from './CardProperty';
import CardHeader from './CardHeader';
import CardHeaderIcon from './CardHeader/icon';
import CardHeaderTitle from './CardHeader/title';
import CardHeaderButton from './CardHeader/button';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import _ from 'lodash';

import { setCardTab } from '../../../../../redux/actions/cardActions';
import { removeElement } from '../../../../../redux/actions/dataActions';

class CardProperties extends React.Component {
  render() {
    const { builderData } = this.props;
    const selectedCard = _.find(builderData, page => { return page.active === true } ).component.data.selectedProperties;
    const removeCard = _.find(builderData, page => { return page.active === true } ).component.data.remove;
    return (
      <div>
        <CardProperty />
        <CardHeader removeElement={() => this.props.removeElement("header")} removeElementData={removeCard.header} minimizer={selectedCard.header} setTab={(type, val) => this.props.setCardTab(type, val)}/>
        <CardHeaderIcon removeElement={() => this.props.removeElement("icon")} removeElementData={removeCard.icon}  minimizer={selectedCard.headerIcon} setTab={(type, val) => this.props.setCardTab(type, val)}/>
        <CardHeaderTitle removeElement={() => this.props.removeElement("title")} removeElementData={removeCard.title} minimizer={selectedCard.headerTitle} setTab={(type, val) => this.props.setCardTab(type, val)}/>
        <CardHeaderButton removeElement={() => this.props.removeElement("button")} removeElementData={removeCard.button}  minimizer={selectedCard.headerButton} setTab={(type, val) => this.props.setCardTab(type, val)}/>
        <div className="property-divider"></div>
        <CardBody removeElement={() => this.props.removeElement("body")} removeElementData={removeCard.body} minimizer={selectedCard.body} setTab={(type, val) => this.props.setCardTab(type, val)}/>
        <div className="property-divider"></div>
        <CardFooter removeElement={() => this.props.removeElement("footer")} removeElementData={removeCard.footer} minimizer={selectedCard.footer} setTab={(type, val) => this.props.setCardTab(type, val)}/>
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
      setCardTab: (type, val) => dispatch(setCardTab(type, val)),
      removeElement: type =>  dispatch(removeElement(type))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardProperties);