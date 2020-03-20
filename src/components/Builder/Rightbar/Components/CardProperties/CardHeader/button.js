// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateCardHeaderButtonSpacing,
    cardHeaderButtonHideInDeviceList,
    setCardHeaderButtonText,
    setCardHeaderButtonTheme,
    setCardHeaderButtonStreched,
    setCardHeaderButtonStrong,
    setCardHeaderButtonDisabled,
    setHeaderButtonIcon
} from '../../../../../../redux/actions/cardActions';
import CheckboxSelect from '../../../../../../components/UI/CheckboxSelect'
import IconSelectorModal from '../../../../../UI/IconSelector';

class CardHeaderButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          minimizer: true,
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
        this.updateCardHeaderButtonSpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setCardPadding = e => {
        let value = e.target.value;
        this.updateCardHeaderButtonSpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateCardHeaderButtonSpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateCardHeaderButtonSpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateCardHeaderButtonSpacing(key, value);
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
          this.props.cardHeaderButtonHideInDeviceList(val, state);
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
          this.props.setHeaderButtonIcon(icon)
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
    let defaultHeaderButtonDisabled = false;
    let headerHiddenDevices = activePage.component.data.header.button.hidden.slice();
    if(activePage.component.data) {
      defaultCardMarginValue = (activePage.component.data.header.button.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultCardPaddingValue = (activePage.component.data.header.button.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultHeaderButtonText = activePage.component.data.header.button.text; 
      defaultHeaderButtonTheme = activePage.component.data.header.button.theme;
      defaultHeaderButtonStreched = activePage.component.data.header.button.streched;
      defaultHeaderButtonStrong = activePage.component.data.header.button.strong;
      defaultHeaderButtonDisabled = activePage.component.data.header.button.isDisabled;
    }
    return (
        <React.Fragment>
        <IconSelectorModal selectClose={() => {this.setState({modalIsOpen: false})}} selectIconClose={this.selectIcon} modalOpen={this.state.modalIsOpen} />
        <div className="box">
        <div onClick={() => this.setState({minimizer: !this.state.minimizer}) } className="head bordered">
            HEADER BUTTON PROPERTIES
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
                    <input placeholder="None" value={this.reduceHideIn(headerHiddenDevices)} readOnly onClick={this.showCheckboxSelected} className="value text inputSelector" type="text" />
                    {
                        this.state.showDeviceVisibilityCheckBox ?
                        <CheckboxSelect setData={this.setDataHideinDevices} data={[
                        { isSelected: headerHiddenDevices.indexOf("slds-hide") >= 0 ? true : false, value: "hide", label: "All"},
                        { isSelected: headerHiddenDevices.indexOf("slds-hide_small") >= 0 ? true : false, value: "small", label: "Small"},
                        { isSelected: headerHiddenDevices.indexOf("slds-hide_medium") >= 0 ? true : false, value: "medium", label: "Medium"},
                        { isSelected: headerHiddenDevices.indexOf("slds-hide_large") >= 0 ? true : false, value: "large", label: "Large"},
                        {  isSelected: headerHiddenDevices.indexOf("slds-hide_x-large") >= 0 ? true : false, value: "x-large", label: "Extra Large"}
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
                    <input value={defaultHeaderButtonText} onChange={e => this.props.setCardHeaderButtonText(e.target.value)} className="value text" type="text" />
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
                          <select value={defaultHeaderButtonTheme} onChange={(e) => this.props.setCardHeaderButtonTheme(e.target.value)} className="slds-select">
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
                            <select value={defaultHeaderButtonStreched} onChange={(e) => this.props.setCardHeaderButtonStreched(e.target.value)} className="slds-select">
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
                        <select value={defaultHeaderButtonStrong} onChange={(e) => this.props.setCardHeaderButtonStrong(e.target.value)} className="slds-select">
                        <option value="">No</option>
                        <option value="slds-button_stretch">Yes</option>
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
                        <select value={defaultHeaderButtonDisabled} onChange={(e) => this.props.setCardHeaderButtonDisabled(e.target.value)} className="slds-select">
                        <option value="">No</option>
                        <option value="slds-button_stretch">Yes</option>
                        </select>
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
        updateCardHeaderButtonSpacing: (key, value) => dispatch(updateCardHeaderButtonSpacing(key, value)),
        cardHeaderButtonHideInDeviceList: (device, state) => dispatch(cardHeaderButtonHideInDeviceList(device, state)),
        setCardHeaderButtonText: val => dispatch(setCardHeaderButtonText(val)),
        setCardHeaderButtonTheme: val => dispatch(setCardHeaderButtonTheme(val)),
        setCardHeaderButtonStreched: val => dispatch(setCardHeaderButtonStreched(val)),
        setCardHeaderButtonStrong: val => dispatch(setCardHeaderButtonStrong(val)),
        setCardHeaderButtonDisabled: val => dispatch(setCardHeaderButtonDisabled(val)),
        setHeaderButtonIcon: val => dispatch(setHeaderButtonIcon(val))
        
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardHeaderButton);