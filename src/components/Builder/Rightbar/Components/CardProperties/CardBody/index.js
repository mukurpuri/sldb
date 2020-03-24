// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateCardBodySpacing, cardBodyHideInDeviceList, setCardBodyText, setCardBodyAlign, setCardBodyColor, setCardBodySize } from '../../../../../../redux/actions/cardActions';
import CheckboxSelect from '../../../../../../components/UI/CheckboxSelect'

class CardBody extends React.Component {
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
        this.updateCardBodySpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setCardPadding = e => {
        let value = e.target.value;
        this.updateCardBodySpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateCardBodySpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateCardBodySpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateCardBodySpacing(key, value);
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
          this.props.cardBodyHideInDeviceList(val, state);
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

  render() {
    const { builderData, minimizer } = this.props;
    const activePage = _.find(builderData, page => { return page.active === true } );
    let defaultCardMarginValue = "";
    let defaultCardPaddingValue = "";
    let defaultBodyText = "";
    let defaultCardBodyAlign = "";
    let bodyHiddenDevices = activePage.component.data.body.hidden.slice();
    let defaultCardBodyColor = "";
    let defaultCardBodySize = "";
    if(activePage.component.data) {
      defaultCardMarginValue = (activePage.component.data.body.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultCardPaddingValue = (activePage.component.data.body.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultBodyText = activePage.component.data.body.text;
      defaultCardBodyAlign = activePage.component.data.body.align;
      defaultCardBodyColor = activePage.component.data.body.color;
      defaultCardBodySize = activePage.component.data.body.size;
    }
    const disablerStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      width: "100%",
      height: "202px",
      left: "0",
      top: "24px",
      position: "absolute",
      display: "block",
      zIndex: "1"
    };
    return (
        <div className="box">
        <div onClick={() => this.props.setTab("body", !minimizer)} className="head bordered">
            BODY PROPERTIES
            <span className="minimizer-icon">
              <span className={`slds-icon_container slds-icon-utility-${minimizer ? "dash": "add"}`}>
                <svg className="slds-icon slds-icon-text-default slds-icon_xx-small" aria-hidden="true">
                  <use href={`/assets/icons/utility-sprite/svg/symbols.svg#${minimizer ? "dash": "add"}`}></use>
                </svg>
              </span>
            </span>
        </div>
        <div className={`content ${!minimizer ? 'collapse': ''}`}>
          <div>
          <div className="property">
                <div className="slds-grid slds-p-left_small slds-p-right_small">
                  <div className="slds-col slds-large-size_6-of-12 value key">
                    Remove
                    </div>
                    <div className="slds-col slds-large-size_6-of-12 value">
                      <div className="slds-form-element">
                        <div className="slds-form-element__control">
                          <div className="slds-select_container">
                            <select className="slds-select" value={this.props.removeElementData} onChange={this.props.removeElement}>
                              <option value={false}>No</option>
                              <option value={true}>Yes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            <div style={this.props.removeElementData ? disablerStyle: {}}></div>
          <div className="property">
                <div className="slds-grid slds-p-left_small slds-p-right_small">
                  <div className="slds-col slds-large-size_6-of-12 value key">
                    Remove
                    </div>
                    <div className="slds-col slds-large-size_6-of-12 value">
                      <div className="slds-form-element">
                        <div className="slds-form-element__control">
                          <div className="slds-select_container">
                            <select className="slds-select" value={this.props.removeElementData} onChange={this.props.removeElement}>
                              <option value={false}>No</option>
                              <option value={true}>Yes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            <div style={this.props.removeElementData ? disablerStyle: {}}></div>
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
                    <input placeholder="None" value={this.reduceHideIn(bodyHiddenDevices)} readOnly onClick={this.showCheckboxSelected} className="value text inputSelector" type="text" />
                    {
                        this.state.showDeviceVisibilityCheckBox ?
                        <CheckboxSelect setData={this.setDataHideinDevices} data={[
                        { isSelected: bodyHiddenDevices.indexOf("slds-hide") >= 0 ? true : false, value: "hide", label: "All"},
                        { isSelected: bodyHiddenDevices.indexOf("slds-hide_small") >= 0 ? true : false, value: "small", label: "Small"},
                        { isSelected: bodyHiddenDevices.indexOf("slds-hide_medium") >= 0 ? true : false, value: "medium", label: "Medium"},
                        { isSelected: bodyHiddenDevices.indexOf("slds-hide_large") >= 0 ? true : false, value: "large", label: "Large"},
                        {  isSelected: bodyHiddenDevices.indexOf("slds-hide_x-large") >= 0 ? true : false, value: "x-large", label: "Extra Large"}
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
                    <input value={defaultBodyText} onChange={e => this.props.setCardBodyText(e.target.value)} className="value text" type="text" />
                  </div>
                </div>
            </div>
            <div className="property">
              <div className="slds-grid slds-p-left_small slds-p-right_small">
                <div className="slds-col slds-large-size_6-of-12 key">
                    Align
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                    <div className="slds-form-element">
                      <div className="slds-form-element__control">
                        <div className="slds-select_container">
                          <select value={defaultCardBodyAlign} onChange={(e) => this.props.setCardBodyAlign(e.target.value)} className="slds-select">
                            <option value="slds-text-align_left">Left</option>
                            <option value="slds-text-align_right">Right</option>
                            <option value="slds-text-align_center">Center</option>
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
                    Color Style
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                      <div className="slds-form-element">
                          <div className="slds-form-element__control">
                              <div className="slds-select_container">
                                  <select value={defaultCardBodyColor} onChange={(e) => this.props.setCardBodyColor(e.target.value)} className="slds-select">
                                  <option value="slds-text-color_default">Default</option>
                                  <option value="slds-text-color_success">Success</option>
                                  <option value="slds-text-color_weak">Weak</option>
                                  <option value="slds-text-color_error">Error</option>
                                  <option value="slds-text-color_inverse">Inverse</option>
                                  <option value="slds-text-color_inverse-weak">Inverse Weak</option>
                                  <option value="slds-text-font_monospace">Monospace</option>
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
                    Sizing Style
                  </div>
                  <div className="slds-col slds-large-size_6-of-12 value">
                      <div className="slds-form-element">
                          <div className="slds-form-element__control">
                              <div className="slds-select_container">
                                  <select value={defaultCardBodySize} onChange={(e) => this.props.setCardBodySize(e.target.value)} className="slds-select">
                                  <option value="slds-text-body_small">Body small</option>
                                  <option value="slds-text-heading_large">Heading large</option>
                                  <option value="slds-text-heading_medium">Heading medium</option>
                                  <option value="slds-text-heading_small">Heading small</option>
                                  <option value="slds-text-title">Title</option>
                                  <option value="slds-text-title_caps">Title uppercase</option>
                                  <option value="slds-text-font_monospace">Monospace</option>
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
        updateCardBodySpacing: (key, value) => dispatch(updateCardBodySpacing(key, value)),
        cardBodyHideInDeviceList: (device, state) => dispatch(cardBodyHideInDeviceList(device, state)),
        setCardBodyText: (device, state) => dispatch(setCardBodyText(device, state)),
        setCardBodyAlign: (device, state) => dispatch(setCardBodyAlign(device, state)),
        setCardBodyColor: (device, state) => dispatch(setCardBodyColor(device, state)),
        setCardBodySize: (device, state) => dispatch(setCardBodySize(device, state)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardBody);