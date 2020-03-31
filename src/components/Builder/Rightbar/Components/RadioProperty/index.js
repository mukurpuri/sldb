import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
    updateRadioSpacing,
    setRadioLabelValue,
    setHasLabel,
    setRadioIsRequired,
    setRadioIsDisabled,
    setRadioHasError,
    setRadioErrorText,
    setRadioButtonText,
    setRadioButtonDisabled,
    setRadioDirection,
    setRadioSpacing,
    deleteRadioButton,
    addNewRadioButton
} from '../../../../../redux/actions/radioActions';

class RadioProperty extends React.Component {
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
        this.updateRadioSpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setInputPadding = e => {
        let value = e.target.value;
        this.updateRadioSpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateRadioSpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateRadioSpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateRadioSpacing(key, value);
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
    let defaultRadioLabelText = "";
    let defaultShowLabel = "";
    let defaultRadioIsRequired = ""
    let defaultRadioHasError = ""
    let defaultRadioErrorText = ""
    let defaultRadioDirection = ""
    let defaultRadioSpacing = ""
    if(activePage.component.data) {
      defaultInputMarginValue = (activePage.component.data.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultInputPaddingValue = (activePage.component.data.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultRadioLabelText = activePage.component.data.label;
      defaultShowLabel = activePage.component.data.hasLabel;
      defaultRadioIsRequired = activePage.component.data.isRequired;
      defaultRadioHasError =  activePage.component.data.hasError;
      defaultRadioErrorText = activePage.component.data.erroLabel;
      defaultRadioDirection =  activePage.component.data.floatChildren;
      defaultRadioSpacing =   activePage.component.data.innerGapping;
    }

    let radioButtons = [];
    _.each(activePage.component.data.radioButtons, (radioButton, index) => {
        radioButtons.push(
            <div key={index}>
            <div className="head bordered">
                RADIO BUTTON {index + 1}
                <div title="Delete Radio Button" className="minimizer-icon" onClick={() => {this.props.deleteRadioButton(index)}}>
                    <div dir="ltr"><span className="slds-icon_container slds-icon-utility-delete" title="delete"><svg className="slds-icon-text-light slds-icon_x-small slds-icon slds-icon-text-default" aria-hidden="true"><use href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use></svg>  <span className="slds-assistive-text">Description of Icon</span></span></div>
                </div>
            </div>
            <div className="content">
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Text
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <input value={radioButton.text} onChange={e => this.props.setRadioButtonText(e.target.value, index)} className="value text" type="text" />
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                    <div className="slds-col slds-large-size_6-of-12 key">
                        Disable
                    </div>
                    <div className="slds-col slds-large-size_6-of-12 value">
                        <div className="slds-form-element">
                            <div className="slds-form-element__control">
                            <div className="slds-select_container">
                                <select value={radioButton.isDisabled} onChange={(e) => this.props.setRadioButtonDisabled(e.target.value, index)} className="slds-select">
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                                </select>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    })
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
                        <input value={defaultRadioLabelText} onChange={e => this.props.setRadioLabelValue(e.target.value)} className="value text" type="text" />
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
                                    <select value={defaultRadioIsRequired} onChange={(e) => this.props.setRadioIsRequired(e.target.value)} className="slds-select">
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
                                    <select value={defaultRadioHasError} onChange={(e) => this.props.setRadioHasError(e.target.value)} className="slds-select">
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
                    defaultRadioHasError ? <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Error Text
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <input value={defaultRadioErrorText} onChange={e => this.props.setRadioErrorText(e.target.value)} className="value text" type="text" />
                        </div>
                    </div>
                </div> : ""
                }
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Radio Flow
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultRadioDirection} onChange={(e) => this.props.setRadioDirection(e.target.value)} className="slds-select">
                                    <option value="slds-float--left">Horizontal</option>
                                    <option value="slds-float--none">Vertical</option>
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
                            Inner Spacing
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultRadioSpacing} onChange={(e) => this.props.setRadioSpacing(e.target.value)} className="slds-select">
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
                        <div className="slds-col slds-large-size_12-of-12">
                        <div className="property">
                            <div className="slds-grid slds-p-around_x-small">
                                <div className="slds-col slds-large-size_12-of-12 key">
                                    <button onClick={() => this.props.addNewRadioButton()} className="slds-button slds-float--none  slds-button_brand slds-button_stretch"><span><strong>Add Radio Button</strong><svg className="slds-button__icon slds-button__icon_right slds-m-bottom_xx-small" aria-hidden="true"><use href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use></svg></span></button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {radioButtons}
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
        updateRadioSpacing: (key, value) => dispatch(updateRadioSpacing(key, value)),
        setRadioLabelValue: (value) => dispatch(setRadioLabelValue(value)),
        setHasLabel: value => dispatch(setHasLabel(value)),
        setRadioIsRequired: val => dispatch(setRadioIsRequired(val)),
        setRadioIsDisabled: val => dispatch(setRadioIsDisabled(val)),
        setRadioHasError: val => dispatch(setRadioHasError(val)),
        setRadioErrorText: val => dispatch(setRadioErrorText(val)),
        setRadioButtonText: (val, index) => dispatch(setRadioButtonText(val, index)),
        setRadioButtonDisabled: (val, index) => dispatch(setRadioButtonDisabled(val, index)),
        setRadioDirection: val => dispatch(setRadioDirection(val)),
        setRadioSpacing: val => dispatch(setRadioSpacing(val)),
        deleteRadioButton: val => dispatch(deleteRadioButton(val)),
        addNewRadioButton: () => dispatch(addNewRadioButton()),
        
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioProperty);