import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
    updateCheckBoxSpacing,
    setCheckBoxText,
    setCheckBoxDisabled,
    setCheckBoxFloat,
    setCheckBoxState,
    setCheckBoxRequired,
    setCheckBoxShowError,
    setCheckBoxErrorLabel
} from '../../../../../redux/actions/checkBoxActions';

class CheckBoxProperty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          showDeviceVisibilityCheckBox: false,
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
    
      setCheckBoxMargin = e => {
        let value = e.target.value;
        this.updateCheckBoxSpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setCheckBoxPadding = e => {
        let value = e.target.value;
        this.updateCheckBoxSpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateCheckBoxSpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateCheckBoxSpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateCheckBoxSpacing(key, value);
          break;
    
          default:
          console.log("undefined property")
        }
      }

      reduceHideIn = (str) => {
          if(str.length === 0) {
              return "";
          }
          let cls = _.map(str, d => { 
            if(d === "slds-hide") {
              return "all"
            }
            return d.split("_")[1] }
          ).join(",");
          return cls
      }
    
      selectIcon = (icon) => {
        this.setState({
          modalIsOpen: false
        }, ()=> {
          this.props.setCheckBoxIcon(icon)
        })
      }
  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let defaultCheckBoxMarginValue = "";
    let defaultCheckBoxPaddingValue = "";
    let defaultCheckBoxText = "";
    let defaultCheckBoxDisabled = false;
    let defaultCheckBoxFloat = "";
    let defaultCheckBoxState = false;
    let defaultCheckBoxHasError = false;
    let defaultCheckBoxRequired = false;
    let defaultCheckBoxErrorLabel = "";
    if(activePage.component.data) {
      defaultCheckBoxMarginValue = (activePage.component.data.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultCheckBoxPaddingValue = (activePage.component.data.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultCheckBoxText = activePage.component.data.label;
      defaultCheckBoxDisabled = activePage.component.data.isDisabled;
      defaultCheckBoxFloat = activePage.component.data.float;
      defaultCheckBoxState = activePage.component.data.checked;
      defaultCheckBoxHasError = activePage.component.data.showError;
      defaultCheckBoxRequired = activePage.component.data.isRequired;
      defaultCheckBoxErrorLabel = activePage.component.data.errorLabel;
    }
    return (
        <React.Fragment>
        <div className="box">
            <div className="head bordered">
                CHECKBOX PROPERTIES
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
                                <select value={defaultCheckBoxMarginValue} onChange={this.setCheckBoxMargin} className="slds-select">
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
                            <select value={defaultCheckBoxPaddingValue} onChange={this.setCheckBoxPadding} className="slds-select">
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
                            Text
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <input value={defaultCheckBoxText} onChange={e => this.props.setCheckBoxText(e.target.value)} className="value text" type="text" />
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Disabled
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-select_container">
                                <select value={defaultCheckBoxDisabled} onChange={(e) => this.props.setCheckBoxDisabled(e.target.value)} className="slds-select">
                                <option value="">No</option>
                                <option value={true}>Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Float
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-select_container">
                                <select value={defaultCheckBoxFloat} onChange={(e) => this.props.setCheckBoxFloat(e.target.value)} className="slds-select">
                                <option value="slds-float--none">None</option>
                                <option value="slds-float_left">Left</option>
                                <option value="slds-float_right">Right</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Default State
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-select_container">
                                <select value={defaultCheckBoxState} onChange={(e) => this.props.setCheckBoxState(e.target.value)} className="slds-select">
                                <option value={false}>Unchecked</option>
                                <option value={true}>Checked</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                          Required Field
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-select_container">
                                <select value={defaultCheckBoxRequired} onChange={(e) => this.props.setCheckBoxRequired(e.target.value)} className="slds-select">
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Show Error
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-select_container">
                                <select value={defaultCheckBoxHasError} onChange={(e) => this.props.setCheckBoxShowError(e.target.value)} className="slds-select">
                                <option value={false}>False</option>
                                <option value={true}>True</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {
                  defaultCheckBoxHasError === "true" ?
                  <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Error Label
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                          <input value={defaultCheckBoxErrorLabel} onChange={e => this.props.setCheckBoxErrorLabel(e.target.value)} className="value text" type="text" />
                        </div>
                    </div>
                </div> : null
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
        updateCheckBoxSpacing: (key, value) => dispatch(updateCheckBoxSpacing(key, value)),
        setCheckBoxText: val => dispatch(setCheckBoxText(val)),
        setCheckBoxDisabled: val => dispatch(setCheckBoxDisabled(val)),
        setCheckBoxFloat: val => dispatch(setCheckBoxFloat(val)),
        setCheckBoxState: val => dispatch(setCheckBoxState(val)),
        setCheckBoxShowError: val => dispatch(setCheckBoxShowError(val)),
        setCheckBoxRequired: val => dispatch(setCheckBoxRequired(val)),
        setCheckBoxErrorLabel: val => dispatch(setCheckBoxErrorLabel(val))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxProperty);