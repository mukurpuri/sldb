import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
    updateInputSpacing,
    setHasLabel,
    setInputLabel,
    setInputDisable,
    setInputRequire,
    setInputReadOnly,
    setInputValue,
    setInputPlaceholder,
    setInputSetError,
    setInputErrorText,
    setInputIcon,
    setInputIconDirection,
    setInputIconData,
    setInputShowClearIcon,
    setInputShowInlineHelp,
    setInputInlineHelpText
} from '../../../../../redux/actions/inputActions';
import IconSelectorModal from '../../../../UI/IconSelector';

class InputProperty extends React.Component {
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
        this.updateInputSpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setInputPadding = e => {
        let value = e.target.value;
        this.updateInputSpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateInputSpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateInputSpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateInputSpacing(key, value);
          break;
    
          default:
          console.log("undefined property")
        }
      }
    
      openModal = () => {
        this.setState({
          modalIsOpen: true
        })
      }
    
      selectIcon = (icon) => {
        this.setState({
          modalIsOpen: false
        }, ()=> {
          this.props.setInputIconData(icon)
        })
      }
  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let defaultInputMarginValue = "";
    let defaultInputPaddingValue = "";
    let defaultShowLabel = "";
    let defaultInputLabel = "";
    let defaultInputDisable="";
    let defaultInputRequire = "";
    let defaultInputReadOnly = "";
    let defaultInputText = "";
    let defaultInputPlaceholder = "";
    let defaultInputShowError = "";
    let defaultInputErrorText = "";
    let defaultInputShowIcon = "";
    let defaultInputIconDirection = "";
    let defaultInputShowClearIcon = "";
    let defaultInputShowInlineHelp = "";
    let defaultInputInlineHelpText = "";
    if(activePage.component.data) {
      defaultInputMarginValue = (activePage.component.data.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultInputPaddingValue = (activePage.component.data.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultShowLabel = activePage.component.data.hasLabel;
      defaultInputLabel = activePage.component.data.label;
      defaultInputDisable = activePage.component.data.isDisabled;
      defaultInputRequire =  activePage.component.data.isRequired;
      defaultInputReadOnly =  activePage.component.data.readOnly;
      defaultInputText =  activePage.component.data.value;
      defaultInputPlaceholder = activePage.component.data.placeholder;
      defaultInputShowError =  activePage.component.data.hasError;
      defaultInputErrorText =   activePage.component.data.errorLabel;
      defaultInputShowIcon =    activePage.component.data.hasIcon;
      defaultInputIconDirection = activePage.component.data.icon.direction;
      defaultInputShowClearIcon = activePage.component.data.clearButton;
      defaultInputShowInlineHelp =  activePage.component.data.inlineHelp.visible;
      defaultInputInlineHelpText =  activePage.component.data.inlineHelp.text;
    }
    return (
        <React.Fragment>
        <IconSelectorModal selectClose={() => {this.setState({modalIsOpen: false})}} selectIconClose={this.selectIcon} modalOpen={this.state.modalIsOpen} />
        <div className="box">
            <div className="head bordered">
                INPUT PROPERTIES
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
                        Value Text
                    </div>
                    <div className="slds-col slds-large-size_6-of-12 value">
                        <input value={defaultInputText} onChange={e => this.props.setInputValue(e.target.value)} className="value text" type="text" />
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                    <div className="slds-col slds-large-size_6-of-12 key">
                        Placeholder Text
                    </div>
                    <div className="slds-col slds-large-size_6-of-12 value">
                        <input value={defaultInputPlaceholder} onChange={e => this.props.setInputPlaceholder(e.target.value)} className="value text" type="text" />
                        </div>
                    </div>
                </div>
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
                    defaultShowLabel ?
                    <div className="property">
                        <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Label Text
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <input value={defaultInputLabel} onChange={e => this.props.setInputLabel(e.target.value)} className="value text" type="text" />
                            </div>
                        </div>
                    </div> : null
                }
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Disable
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultInputDisable} onChange={(e) => this.props.setInputDisable(e.target.value)} className="slds-select">
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
                            Required
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultInputRequire} onChange={(e) => this.props.setInputRequire(e.target.value)} className="slds-select">
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
                            Read only
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultInputReadOnly} onChange={(e) => this.props.setInputReadOnly(e.target.value)} className="slds-select">
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
                            Show Error
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultInputShowError} onChange={(e) => this.props.setInputSetError(e.target.value)} className="slds-select">
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
                    defaultInputShowError ? <div className="property">
                        <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Error Text
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <input value={defaultInputErrorText} onChange={e => this.props.setInputErrorText(e.target.value)} className="value text" type="text" />
                            </div>
                        </div>
                    </div> : null
                }
            </div>
        </div>
        <div className="box">
            <div className="head bordered">
                INPUT ICON PROPERTIES
            </div>
            <div className="content">
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Show Icon
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultInputShowIcon} onChange={(e) => this.props.setInputIcon(e.target.value)} className="slds-select">
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
                    defaultInputShowIcon ? <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Icon Direction
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultInputIconDirection} onChange={(e) => this.props.setInputIconDirection(e.target.value)} className="slds-select">
                                    <option value="left">Left</option>
                                    <option value="right">Right</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null
                }
                {
                    defaultInputShowIcon ? <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Change Icon
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="icon-selector">
                                <input type="button" onClick={this.openModal} value="Select Icon"/>
                            </div>
                        </div>
                    </div>
                </div> : null
                }
            </div>
        </div>
        {
            defaultInputShowIcon ? <div className="box">
            <div className="head bordered">
                CLEAR ICON
            </div>
            <div className="content">
            <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Show Icon
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultInputShowClearIcon} onChange={(e) => this.props.setInputShowClearIcon(e.target.value)} className="slds-select">
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
        </div>  : null
        }
        <div className="box">
            <div className="head bordered">
                INLINE HELP
            </div>
            <div className="content">
            <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Show Inline Help
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultInputShowInlineHelp} onChange={(e) => this.props.setInputShowInlineHelp(e.target.value)} className="slds-select">
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
                    defaultInputShowInlineHelp ? <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Inline Help Text
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <input value={defaultInputInlineHelpText} onChange={e => this.props.setInputInlineHelpText(e.target.value)} className="value text" type="text" />
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
        updateInputSpacing: (key, value) => dispatch(updateInputSpacing(key, value)),
        setHasLabel: val => dispatch(setHasLabel(val)),
        setInputLabel: val => dispatch(setInputLabel(val)),
        setInputDisable: val => dispatch(setInputDisable(val)),
        setInputRequire: val => dispatch(setInputRequire(val)),
        setInputReadOnly: val => dispatch(setInputReadOnly(val)),
        setInputValue: val => dispatch(setInputValue(val)),
        setInputPlaceholder: val => dispatch(setInputPlaceholder(val)),
        setInputSetError: val => dispatch(setInputSetError(val)),
        setInputErrorText: val => dispatch(setInputErrorText(val)),
        setInputIcon: val => dispatch(setInputIcon(val)),
        setInputIconDirection: val => dispatch(setInputIconDirection(val)),
        setInputIconData: val => dispatch(setInputIconData(val)),
        setInputShowClearIcon: val => dispatch(setInputShowClearIcon(val)),
        setInputShowInlineHelp: val => dispatch(setInputShowInlineHelp(val)),
        setInputInlineHelpText: val => dispatch(setInputInlineHelpText(val)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputProperty);