// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateCardFooterSpacing, cardFooterHideInDeviceList, setCardFooterText} from '../../../../../../redux/actions/cardActions';
import CheckboxSelect from '../../../../../../components/UI/CheckboxSelect'

class CardFooter extends React.Component {
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
        this.updateCardFooterSpacing(this.state.spacing.margin.property, value , "margin");
      }
    
      setCardPadding = e => {
        let value = e.target.value;
        this.updateCardFooterSpacing(this.state.spacing.padding.property, value , "padding");
      }
    
      updateCardFooterSpacing = (key, value, property) => {
        key =  key.split("-")[1];
        switch(property) {
          case 'margin':
          value = `slds-m-${key}_${value}`
          this.props.updateCardFooterSpacing(key, value);
          break;
    
          case 'padding':
          value = `slds-p-${key}_${value}`
          this.props.updateCardFooterSpacing(key, value);
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
          this.props.cardFooterHideInDeviceList(val, state);
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
    let defaultFooterText = "";
    let footerHiddenDevices = activePage.component.data.footer.hidden.slice();
    if(activePage.component.data) {
      defaultCardMarginValue = (activePage.component.data.footer.spacings.margin[this.state.spacing.margin.property.split("-")[1]]).split("_")[1] || "";
      defaultCardPaddingValue = (activePage.component.data.footer.spacings.padding[this.state.spacing.padding.property.split("-")[1]]).split("_")[1] || "";
      defaultFooterText = activePage.component.data.footer.text;
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
        <div onClick={() => this.props.setTab("footer", !minimizer)} className="head bordered">
            FOOTER PROPERTIES
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
                    <input placeholder="None" value={this.reduceHideIn(footerHiddenDevices)} readOnly onClick={this.showCheckboxSelected} className="value text inputSelector" type="text" />
                    {
                        this.state.showDeviceVisibilityCheckBox ?
                        <CheckboxSelect setData={this.setDataHideinDevices} data={[
                        { isSelected: footerHiddenDevices.indexOf("slds-hide") >= 0 ? true : false, value: "hide", label: "All"},
                        { isSelected: footerHiddenDevices.indexOf("slds-hide_small") >= 0 ? true : false, value: "small", label: "Small"},
                        { isSelected: footerHiddenDevices.indexOf("slds-hide_medium") >= 0 ? true : false, value: "medium", label: "Medium"},
                        { isSelected: footerHiddenDevices.indexOf("slds-hide_large") >= 0 ? true : false, value: "large", label: "Large"},
                        {  isSelected: footerHiddenDevices.indexOf("slds-hide_x-large") >= 0 ? true : false, value: "x-large", label: "Extra Large"}
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
                    <input value={defaultFooterText} onChange={e => this.props.setCardFooterText(e.target.value)} className="value text" type="text" />
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
        updateCardFooterSpacing: (key, value) => dispatch(updateCardFooterSpacing(key, value)),
        cardFooterHideInDeviceList: (device, state) => dispatch(cardFooterHideInDeviceList(device, state)),
        setCardFooterText: (device, state) => dispatch(setCardFooterText(device, state))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardFooter);