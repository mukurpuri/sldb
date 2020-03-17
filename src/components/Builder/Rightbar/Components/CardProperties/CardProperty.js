// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getBuilderData } from '../../../../../redux/actions/dataActions';
import { updateCardSpacing } from '../../../../../redux/actions/cardActions';

class CardProperty extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      spacing: {
        margin: {
          property: "margin-top",
        },
        padding: {
          property: "padding-top",
        }
      },
    }
  }

  setMarginProperty = e => {
    const { spacing } = this.state;
    spacing.margin.property = e.target.value;
    this.setState(spacing)
  }

  setPaddingProperty = e => {
    const { spacing } = this.state;
    spacing.padding.property = e.target.value;
    this.setState(spacing)
  }

  setCardMargin = e => {
    let value = e.target.value;
    this.updateCardSpacing(this.state.spacing.margin.property, value , "margin");
  }

  setCardPadding = e => {
    let value = e.target.value;
    this.updateCardSpacing(this.state.spacing.padding.property, value , "padding");
  }

  updateCardSpacing = (key, value, property) => {
    key =  key.split("-")[1];
    switch(property) {
      case 'margin':
      value = `slds-m-${key}_${value}`
      this.props.updateCardSpacing(key, value);
      break;

      case 'padding':
      value = `slds-p-${key}_${value}`
      this.props.updateCardSpacing(key, value);
      break;

      default:
      console.log("undefined property")
    }
  }

  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let defaultCardMarginValue = "";
    let defaultCardPaddingValue = "";
    if(activePage.component.data) {
      defaultCardMarginValue = (activePage.component.data.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultCardPaddingValue = (activePage.component.data.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
    }
    return (
      <div className="box">
        <div className="head bordered">
            CARD PROPERTIES
        </div>
        <div className="content">
          <div>
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 value property">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select className="slds-select" value={this.state.spacing.margin.property} onChange={this.setMarginProperty}>
                            <option value="margin-top">Margin Top</option>
                            <option value="margin-bottom">Margin Bottom</option>
                            <option value="margin-left">Margin Left</option>
                            <option value="margin-right">Margin Right</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select value={defaultCardMarginValue} onChange={this.setCardMargin} className="slds-select">
                            <option value="">None</option>
                            <option value="xxx-small">xxx-Small</option>
                            <option value="xx-small">xx-Small</option>
                            <option value="x-small">x-Small</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="x-large">x-Large</option>
                            <option value="xx-large">xx-Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 value property">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select className="slds-select" value={this.state.spacing.padding.property} onChange={this.setPaddingProperty}>
                            <option value="padding-top">Padding Top</option>
                            <option value="padding-bottom">Padding Bottom</option>
                            <option value="padding-left">Padding Left</option>
                            <option value="padding-right">Padding Right</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select value={defaultCardPaddingValue} onChange={this.setCardPadding} className="slds-select">
                            <option value="">None</option>
                            <option value="x-small">x-Small</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="x-large">x-Large</option>
                            <option value="xx-large">xx-Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
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
      reduxGetDemoData: () => dispatch(getBuilderData()),
      updateCardSpacing: (key, value) => dispatch(updateCardSpacing(key, value))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardProperty);