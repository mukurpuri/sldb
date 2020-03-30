// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setButtonIconSize,updateButtonSpacing, buttonHideInDeviceList, setButtonText, setButtonTheme, setButtonStreched, setButtonStrong, setButtonDisabled, setButtonIcon, setButtonFloat, setButtonHasIcon, setButtonIconPosition } from '../../../../../redux/actions/buttonActions';
import CheckboxSelect from '../../../../../components/UI/CheckboxSelect';
import IconSelectorModal from '../../../../UI/IconSelector';

class ButtonProperties extends React.Component {
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
    
      setCardMargin = e => {
        let value = e.target.value;
        this.updateButtonSpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setCardPadding = e => {
        let value = e.target.value;
        this.updateButtonSpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateButtonSpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateButtonSpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateButtonSpacing(key, value);
          break;
    
          default:
          console.log("undefined property")
        }
      }
      showCheckboxSelected = () => {
          this.setState({
              showDeviceVisibilityCheckBox: !this.state.showDeviceVisibilityCheckBox
          })
      }

      setDataHideinDevices = (val, state) => {
        this.setState({
          showDeviceVisibilityCheckBox: false
        }, () => {
          this.props.buttonHideInDeviceList(val, state);
        })
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

      openModal = () => {
        this.setState({
          modalIsOpen: true
        })
      }
    
      selectIcon = (icon) => {
        this.setState({
          modalIsOpen: false
        }, ()=> {
          this.props.setButtonIcon(icon)
        })
      }
  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let defaultCardMarginValue = "";
    let defaultCardPaddingValue = "";
let defaultHeaderButtonTheme = "";
    let defaultHeaderButtonText = "";
    let defaultHeaderButtonStreched = "";
    let defaultHeaderButtonStrong = false;
    let defaultButtonDisabled = false;
    let defaultButtonHasIcon = false;
    let defaultButtonFloat = "";
    let defaultButtonIconDirection = "";
    let defaultButtonIconSize = "";
    let headerHiddenDevices = activePage.component.data.hidden.slice();
    if(activePage.component.data) {
      defaultCardMarginValue = (activePage.component.data.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultCardPaddingValue = (activePage.component.data.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultHeaderButtonText = activePage.component.data.text; 
      defaultHeaderButtonTheme = activePage.component.data.theme;
      defaultHeaderButtonStreched = activePage.component.data.streched;
      defaultHeaderButtonStrong = activePage.component.data.strong;
      defaultButtonDisabled = activePage.component.data.isDisabled;
      defaultButtonFloat = activePage.component.data.float;
      defaultButtonHasIcon = activePage.component.data.hasIcon;
      defaultButtonIconDirection = activePage.component.data.icon.position;
      defaultButtonIconSize = activePage.component.data.icon.size;
    }
    return (
        <React.Fragment>
        <IconSelectorModal selectClose={() => {this.setState({modalIsOpen: false})}} selectIconClose={this.selectIcon} modalOpen={this.state.modalIsOpen} />
        <div className="box">
            <div className="head bordered">
                BUTTON PROPERTIES
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
                                this.state.showDeviceVisibilityCheckBox ?
                                <CheckboxSelect setData={this.setDataHideinDevices} data={[
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
                            Text
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <input value={defaultHeaderButtonText} onChange={e => this.props.setButtonText(e.target.value)} className="value text" type="text" />
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Theme
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                            <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                <select value={defaultHeaderButtonTheme} onChange={(e) => this.props.setButtonTheme(e.target.value)} className="slds-select">
                                    <option value="link">Link</option>
                                    <option value="slds-button_neutral">Neutral</option>
                                    <option value="slds-button_brand">Brand</option>
                                    <option value="slds-button_outline-brand">Outline Brand</option>
                                    <option value="slds-button_destructive">Destructive</option>
                                    <option value="slds-button_text-destructive">Text Destructive</option>
                                    <option value="slds-button_success">Success</option>
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
                            Streched
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultHeaderButtonStreched} onChange={(e) => this.props.setButtonStreched(e.target.value)} className="slds-select">
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
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
                            Font Weight
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-select_container">
                                <select value={defaultHeaderButtonStrong} onChange={(e) => this.props.setButtonStrong(e.target.value)} className="slds-select">
                                <option value="">No</option>
                                <option value={true}>Bold</option>
                                </select>
                            </div>
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
                                <select value={defaultButtonDisabled} onChange={(e) => this.props.setButtonDisabled(e.target.value)} className="slds-select">
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
                            Float Button
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-select_container">
                                <select value={defaultButtonFloat} onChange={(e) => this.props.setButtonFloat(e.target.value)} className="slds-select">
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
                            Has Icon
                        </div>
                        <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-select_container">
                                <select value={defaultButtonHasIcon} onChange={(e) => this.props.setButtonHasIcon(e.target.value)} className="slds-select">
                                <option value={false}>No</option>
                                <option value={true}>Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
            {
                    defaultButtonHasIcon === "true" ?
                    <React.Fragment>
                    <div className="head bordered">
                        BUTTON ICON PROPERTIES
                    </div>
                    <div className="property">
                        <div className="slds-grid slds-p-left_small slds-p-right_small">
                                <div className="slds-col slds-large-size_6-of-12 key">
                                    Set Icon
                                </div>
                                <div className="slds-col slds-large-size_6-of-12 value">
                                    <div className="icon-selector">
                                        <input type="button" onClick={this.openModal} value="Select Icon"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="property">
                        <div className="slds-grid slds-p-left_small slds-p-right_small">
                                <div className="slds-col slds-large-size_6-of-12 key">
                                    Set Icon Direction
                                </div>
                                <div className="slds-col slds-large-size_6-of-12 value">
                                <div className="slds-select_container">
                                    <select value={defaultButtonIconDirection} onChange={(e) => this.props.setButtonIconPosition(e.target.value)} className="slds-select">
                                    <option value="slds-button__icon_right">Right</option>
                                    <option value="slds-button__icon_left">Left</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property">
                        <div className="slds-grid slds-p-left_small slds-p-right_small">
                        <div className="slds-col slds-large-size_6-of-12 key">
                            Set Icon Size
                            </div>
                            <div className="slds-col slds-large-size_6-of-12 value">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                <div className="slds-select_container">
                                    <select value={defaultButtonIconSize} onChange={(e) => this.props.setButtonIconSize(e.target.value)} className="slds-select">
                                    <option value="slds-icon_xx-small">xx-Small</option>
                                    <option value="slds-icon_x-small">x-Small</option>
                                    <option value="slds-icon_small">Small</option>
                                    <option value="slds-icon_large">Large</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </React.Fragment>
                    : ""
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
        updateButtonSpacing: (key, value) => dispatch(updateButtonSpacing(key, value)),
        buttonHideInDeviceList: (device, state) => dispatch(buttonHideInDeviceList(device, state)),
        setButtonText: val => dispatch(setButtonText(val)),
        setButtonTheme: val => dispatch(setButtonTheme(val)),
        setButtonStreched: val => dispatch(setButtonStreched(val)),
        setButtonStrong: val => dispatch(setButtonStrong(val)),
        setButtonDisabled: val => dispatch(setButtonDisabled(val)),
        setButtonIcon: val => dispatch(setButtonIcon(val)),
        setButtonFloat: val => dispatch(setButtonFloat(val)),
        setButtonHasIcon: val => dispatch(setButtonHasIcon(val)),
        setButtonIconPosition: val => dispatch(setButtonIconPosition(val)),
        setButtonIconSize: val => dispatch(setButtonIconSize(val))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonProperties);