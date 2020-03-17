// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateCardHeaderSpacing, cardHeaderHideInDeviceList, setCardHeaderFlip } from '../../../../../../redux/actions/cardActions';
import CheckboxSelect from '../../../../../../components/UI/CheckboxSelect'
//import CardHeaderIcon from './icon';
import Helpers from '../../../../../../config/helpers';
//import { getBuilderData } from '../../../../../redux/actions/dataActions';

class CardHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          showDeviceVissibilityCheckBox: false,
          hideInDeviceList: "",
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
        this.updateCardHeaderSpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setCardPadding = e => {
        let value = e.target.value;
        this.updateCardHeaderSpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateCardHeaderSpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateCardHeaderSpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateCardHeaderSpacing(key, value);
          break;
    
          default:
          console.log("undefined property")
        }
      }
      showCheckboxSelected = () => {
          this.setState({
              showDeviceVissibilityCheckBox: !this.state.showDeviceVissibilityCheckBox
          })
      }

      setDataHideinDevices = (val, state) => {
        this.setState({
          showDeviceVissibilityCheckBox: false
        }, () => {
          this.props.cardHeaderHideInDeviceList(val, state);
        })
      }

      reduceHideIn = (str) => {
          if(str.length === 0) {
              return "";
          }
          return _.map(str, d => {
              return d.split("_")[1]
          }).join(",")
      }

  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let defaultCardMarginValue = "";
    let defaultCardPaddingValue = "";
    let defaultFlipValue = "";
    let headerHiddenDevices = activePage.component.data.header.hidden.slice();
    if(activePage.component.data) {
      defaultCardMarginValue = (activePage.component.data.header.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultCardPaddingValue = (activePage.component.data.header.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultFlipValue = activePage.component.data.header.flip;
    }
    return (
        <div className="box">
        <div className="head bordered">
            HEADER PROPERTIES
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
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 key">
                    Hide in device(s)
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                    <input placeholder="None" value={this.reduceHideIn(headerHiddenDevices)} readOnly onClick={this.showCheckboxSelected} className="value text inputSelector" type="text" />
                    {
                        this.state.showDeviceVissibilityCheckBox ?
                        <CheckboxSelect setData={this.setDataHideinDevices} data={[
                        { isSelected: headerHiddenDevices.indexOf("slds-show_all") >= 0 ? true : false, value: "all", label: "All"},
                        {  isSelected: headerHiddenDevices.indexOf("slds-show_x-small") >= 0 ? true : false, value: "x-small", label: "Extra Small"},
                        { isSelected: headerHiddenDevices.indexOf("slds-show_small") >= 0 ? true : false, value: "small", label: "Small"},
                        { isSelected: headerHiddenDevices.indexOf("slds-show_medium") >= 0 ? true : false, value: "medium", label: "Medium"},
                        { isSelected: headerHiddenDevices.indexOf("slds-show_large") >= 0 ? true : false, value: "large", label: "Large"},
                        {  isSelected: headerHiddenDevices.indexOf("slds-show_x-large") >= 0 ? true : false, value: "x-large", label: "Extra Large"}
                        ]}/> : null
                    }
                  </div>
                </div>
            </div>
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 key">
                    Reverse Content
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select value={defaultFlipValue} onChange={(e) => this.props.setCardHeaderFlip(e.target.value)} className="slds-select">
                            <option value="">No</option>
                            <option value="slds-grid_reverse">Yes</option>
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
        updateCardHeaderSpacing: (key, value) => dispatch(updateCardHeaderSpacing(key, value)),
        cardHeaderHideInDeviceList: (device, state) => dispatch(cardHeaderHideInDeviceList(device, state)),
        setCardHeaderFlip: val => dispatch(setCardHeaderFlip(val))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardHeader);