import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateIconSpacing,setIconColor,setIconSize,setIcon, setIconFloat, setIconFlip, setIconDescription } from '../../../../../redux/actions/iconActions';
import IconSelectorModal from '../../../../UI/IconSelector';
import CheckboxSelect from '../../../../UI/CheckboxSelect';
class IconProperty extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDeviceVisibilityCheckBox: false,
      modalIsOpen: false,
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

  setIconMargin = e => {
    let value = e.target.value;
    this.updateIconSpacing(this.state.spacing.margin.property, value , "margin");
  }

  setIconPadding = e => {
    let value = e.target.value;
    this.updateIconSpacing(this.state.spacing.padding.property, value , "padding");
  }

  updateIconSpacing = (key, value, property) => {
    key =  key.split("-")[1];
    switch(property) {
      case 'margin':
      value = `slds-m-${key}_${value}`
      this.props.updateIconSpacing(key, value);
      break;

      case 'padding':
      value = `slds-p-${key}_${value}`
      this.props.updateIconSpacing(key, value);
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
      this.props.setIcon(icon)
    })
  }
  
  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let Icon = activePage.component.data;
    let defaultIconMarginValue = "";
    let defaultIconPaddingValue = "";
    let defaultFlipValue = "";
    let defaultIconSize = "";
    let defaultIconColor = "";
    let defaultIcon = "";
    let defaultIconFloat = "";
    let defaultIconDescription = "";
    if(activePage.component.data) {
      defaultIconMarginValue = (Icon.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultIconPaddingValue = (Icon.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultFlipValue = Icon.flip;
      defaultIconSize = Icon.size;
      defaultIconColor = Icon.color;
      defaultIconFloat = Icon.float;
      defaultIconDescription = Icon.description;
      defaultIcon = {
        name: Icon.name,
        type: Icon.type
      }

    }
    return (
      <React.Fragment>
      <IconSelectorModal selectClose={() => {this.setState({modalIsOpen: false})}} selectIconClose={this.selectIcon} modalOpen={this.state.modalIsOpen} />
      <div className="box">
      <div className="head bordered">
          ICON PROPERTIES
      </div>
      <div className={`content`}>
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
                        <select value={defaultIconMarginValue} onChange={this.setIconMargin} className="slds-select">
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
                        <select value={defaultIconPaddingValue} onChange={this.setIconPadding} className="slds-select">
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
          {/* <div className="property">
            <div className="slds-grid slds-p-left_small slds-p-right_small">
              <div className="slds-col slds-large-size_6-of-12 key">
                  Hide in device(s)
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <input placeholder="None" value={this.reduceHideIn(IconHiddenDevices)} readOnly onClick={this.showCheckboxSelected} className="value text inputSelector" type="text" />
                  {
                      this.state.showDeviceVisibilityCheckBox ?
                      <CheckboxSelect setData={this.setDataHideinDevices} data={[
                      { isSelected: IconHiddenDevices.indexOf("slds-hide") >= 0 ? true : false, value: "hide", label: "All"},
                      { isSelected: IconHiddenDevices.indexOf("slds-show_small") >= 0 ? true : false, value: "small", label: "Small"},
                      { isSelected: IconHiddenDevices.indexOf("slds-show_medium") >= 0 ? true : false, value: "medium", label: "Medium"},
                      { isSelected: IconHiddenDevices.indexOf("slds-show_large") >= 0 ? true : false, value: "large", label: "Large"},
                      {  isSelected: IconHiddenDevices.indexOf("slds-show_x-large") >= 0 ? true : false, value: "x-large", label: "Extra Large"}
                      ]}/> : null
                  }
                </div>
              </div>
          </div> */}
          <div className="property">
            <div className="slds-grid slds-p-left_small slds-p-right_small">
              <div className="slds-col slds-large-size_6-of-12 key">
                  Description
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                    <input value={defaultIconDescription} onChange={e => this.props.setIconDescription(e.target.value)} className="value text" type="text" />
                </div>
              </div>
          </div>
          <div className="property">
            <div className="slds-grid slds-p-left_small slds-p-right_small">
              <div className="slds-col slds-large-size_6-of-12 key">
                  Flip Icon
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select value={defaultFlipValue} onChange={(e) => this.props.setIconFlip(e.target.value)} className="slds-select">
                          <option value="">No</option>
                          <option value="slds-grid_reverse">Yes</option>
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
                  Float
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select value={defaultIconFloat} onChange={(e) => this.props.setIconFloat(e.target.value)} className="slds-select">
                          <option value="">None</option>
                          <option value="slds-float--left">Left</option>
                          <option value="slds-float--right">Right</option>
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
                  Change Icon
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
                  Set Icon Size
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select value={defaultIconSize} onChange={(e) => this.props.setIconSize(e.target.value)} className="slds-select">
                          <option value="slds-icon_medium">Medium</option>
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
          <div className="property">
            <div className="slds-grid slds-p-left_small slds-p-right_small">
              <div className="slds-col slds-large-size_6-of-12 key">
                  Set Icon Color
                </div>
                <div className="slds-col slds-large-size_6-of-12 value">
                  <div className="slds-form-element">
                    <div className="slds-form-element__control">
                      <div className="slds-select_container">
                        <select value={defaultIconColor} onChange={(e) => this.props.setIconColor(e.target.value)} className="slds-select">
                          <option value="slds-icon-text-default">Default</option>
                          <option value="slds-current-color">Current</option>
                          <option value="slds-icon-text-success">Success</option>
                          <option value="slds-icon-text-warning">Warning</option>
                          <option value="slds-icon-text-error">Error</option>
                          <option value="slds-icon-text-light">Light</option>
                          <option value="slds-text-color_inverse">White</option>
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
        updateIconSpacing: (key, value) => dispatch(updateIconSpacing(key, value)),
        setIconFlip: val => dispatch(setIconFlip(val)),
        setIcon: icon => dispatch(setIcon(icon)),
        setIconSize: iconSize => dispatch(setIconSize(iconSize)),
        setIconColor: color => dispatch(setIconColor(color)),
        setIconFloat: val => dispatch(setIconFloat(val)),
        setIconDescription: val => dispatch(setIconDescription(val))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconProperty);