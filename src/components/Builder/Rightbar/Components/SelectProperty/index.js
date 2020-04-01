import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
    updateSelectSpacing,
    setSelectLabelValue,
    setHasLabel,
    setSelectIsRequired,
    setSelectIsDisabled,
    setSelectHasError,
    setSelectErrorText
} from '../../../../../redux/actions/selectActions';

class SelectProperty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
    
      setInputMargin = e => {
        let value = e.target.value;
        this.updateSelectSpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setInputPadding = e => {
        let value = e.target.value;
        this.updateSelectSpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateSelectSpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateSelectSpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateSelectSpacing(key, value);
          break;
    
          default:
          console.log("undefined property")
        }
      }
  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let defaultInputMarginValue = "";
    let defaultInputPaddingValue = "";
    let defaultSelectLabelText = "";
    let defaultShowLabel = "";
    let defaultSelectIsRequired = ""
    let defaultSelectHasError = ""
    let defaultSelectErrorText = ""
    let defaultSelectIsDisabled = ""
    if(activePage.component.data) {
      defaultInputMarginValue = (activePage.component.data.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultInputPaddingValue = (activePage.component.data.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultSelectLabelText = activePage.component.data.label;
      defaultShowLabel = activePage.component.data.hasLabel;
      defaultSelectIsRequired = activePage.component.data.isRequired;
      defaultSelectHasError =  activePage.component.data.hasError;
      defaultSelectErrorText = activePage.component.data.erroLabel;
      defaultSelectIsDisabled = activePage.component.data.isDisabled;
    }

    return (
        <React.Fragment>
        <div className="box">
        <div className="head bordered">
                LABEL PROPERTIES
            </div>
            <div className="content">
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Show Label
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultShowLabel} onChange={(e) => this.props.setHasLabel(e.target.value)} className="slds-select">
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    defaultShowLabel ? <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                    <div className="slds-col slds-large-size_6-of-12 key">
                        Text
                    </div>
                    <div className="slds-col slds-large-size_6-of-12 value">
                        <input value={defaultSelectLabelText} onChange={e => this.props.setSelectLabelValue(e.target.value)} className="value text" type="text" />
                        </div>
                    </div>
                    </div> : null
                }
                
            </div>
            <div className="head bordered">
                RADIO GROUP PROPERTIES
            </div>
            <div className="content">
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
                                <select value={defaultInputMarginValue} onChange={this.setInputMargin} className="slds-select">
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
                            <select value={defaultInputPaddingValue} onChange={this.setInputPadding} className="slds-select">
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
                            Is Required
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultSelectIsRequired} onChange={(e) => this.props.setSelectIsRequired(e.target.value)} className="slds-select">
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
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
                            Is Disabled
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultSelectIsDisabled} onChange={(e) => this.props.setSelectIsDisabled(e.target.value)} className="slds-select">
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
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
                            Has Error
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultSelectHasError} onChange={(e) => this.props.setSelectHasError(e.target.value)} className="slds-select">
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    defaultSelectHasError ? <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Error Text
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <input value={defaultSelectErrorText} onChange={e => this.props.setSelectErrorText(e.target.value)} className="value text" type="text" />
                        </div>
                    </div>
                </div> : ""
                }
            </div>
        </div>
    </React.Fragment>
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
        updateSelectSpacing: (key, value) => dispatch(updateSelectSpacing(key, value)),
        setSelectLabelValue: (value) => dispatch(setSelectLabelValue(value)),
        setHasLabel: value => dispatch(setHasLabel(value)),
        setSelectIsRequired: val => dispatch(setSelectIsRequired(val)),
        setSelectIsDisabled: val => dispatch(setSelectIsDisabled(val)),
        setSelectHasError: val => dispatch(setSelectHasError(val)),
        setSelectErrorText: val => dispatch(setSelectErrorText(val))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProperty);