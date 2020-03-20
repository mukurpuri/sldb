import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setCardHeaderIconColor, updateCardHeaderIconSpacing, cardHeaderIconHideInDeviceList, setCardHeaderIconFlip, setCardHeaderIcon, setCardHeaderIconSize } from '../../../../../../redux/actions/cardActions';
import CheckboxSelect from '../../../../../../components/UI/CheckboxSelect'
import IconSelectorModal from '../../../../../UI/IconSelector';

class CardHeaderIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minimizer: true,
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
          showDeviceVisibilityCheckBox: !this.state.showDeviceVisibilityCheckBox
      })
  }

  setDataHideinDevices = (val, state) => {
    this.setState({
      showDeviceVisibilityCheckBox: false
    }, () => {
      this.props.cardHeaderHideInDeviceList(val, state);
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
      this.props.setHeaderIcon(icon)
    })
  }
  
  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let defaultCardMarginValue = "";
    let defaultCardPaddingValue = "";
    let defaultFlipValue = "";
    let defaultHeaderIconSize = "";
    let headerIcon = activePage.component.data.header.icon;
    let headerIconHiddenDevices = headerIcon.hidden.slice();
    let defaultHeaderIconColor = "";
    if(activePage.component.data) {
      defaultCardMarginValue = (headerIcon.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultCardPaddingValue = (headerIcon.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultFlipValue = headerIcon.flip;
      defaultHeaderIconSize = headerIcon.size;
      defaultHeaderIconColor = headerIcon.color;
    }
    return (
      <React.Fragment>
      <IconSelectorModal selectClose={() => {this.setState({modalIsOpen: false})}} selectIconClose={this.selectIcon} modalOpen={this.state.modalIsOpen} />
      <div className="box">
      <div onClick={() => this.setState({minimizer: !this.state.minimizer}) } className="head bordered">
          HEADER ICON PROPERTIES
          <span className="minimizer-icon">
              <span className={`slds-icon_container slds-icon-utility-${this.state.minimizer ? "add": "dash"}`}>
                <svg className="slds-icon slds-icon-text-default slds-icon_xx-small" aria-hidden="true">
                  <use href={`/assets/icons/utility-sprite/svg/symbols.svg#${this.state.minimizer ? "add": "dash"}`}></use>
                </svg>
              </span>
            </span>
      </div>
      <div className={`content ${this.state.minimizer ? 'collapse': ''}`}>
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
                  <input placeholder="None" value={this.reduceHideIn(headerIconHiddenDevices)} readOnly onClick={this.showCheckboxSelected} className="value text inputSelector" type="text" />
                  {
                      this.state.showDeviceVisibilityCheckBox ?
                      <CheckboxSelect setData={this.setDataHideinDevices} data={[
                      { isSelected: headerIconHiddenDevices.indexOf("slds-hide") >= 0 ? true : false, value: "hide", label: "All"},
                      { isSelected: headerIconHiddenDevices.indexOf("slds-hide_small") >= 0 ? true : false, value: "small", label: "Small"},
                      { isSelected: headerIconHiddenDevices.indexOf("slds-hide_medium") >= 0 ? true : false, value: "medium", label: "Medium"},
                      { isSelected: headerIconHiddenDevices.indexOf("slds-hide_large") >= 0 ? true : false, value: "large", label: "Large"},
                      {  isSelected: headerIconHiddenDevices.indexOf("slds-hide_x-large") >= 0 ? true : false, value: "x-large", label: "Extra Large"}
                      ]}/> : null
                  }
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
                        <select value={defaultHeaderIconSize} onChange={(e) => this.props.setCardHeaderIconSize(e.target.value)} className="slds-select">
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
                        <select value={defaultHeaderIconColor} onChange={(e) => this.props.setCardHeaderIconColor(e.target.value)} className="slds-select">
                          <option value="slds-icon-text-default">Default</option>
                          <option value="slds-current-color">Current</option>
                          <option value="slds-icon-text-success">Success</option>
                          <option value="slds-icon-text-warning">Warning</option>
                          <option value="slds-icon-text-error">Error</option>
                          <option value="slds-icon-text-light">Light</option>
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
        updateCardHeaderSpacing: (key, value) => dispatch(updateCardHeaderIconSpacing(key, value)),
        cardHeaderHideInDeviceList: (device, state) => dispatch(cardHeaderIconHideInDeviceList(device, state)),
        setCardHeaderFlip: val => dispatch(setCardHeaderIconFlip(val)),
        setHeaderIcon: icon => dispatch(setCardHeaderIcon(icon)),
        setCardHeaderIconSize: iconSize => dispatch(setCardHeaderIconSize(iconSize)),
        setCardHeaderIconColor: color => dispatch(setCardHeaderIconColor(color))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardHeaderIcon);