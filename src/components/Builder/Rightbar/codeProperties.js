// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import Constants from '../../../config/constants';
import _ from 'lodash';
import pretty from 'pretty';
import './index.css';
import {
    setCodeMinify,
    setCodeVirtualProperty,
    setCodeinnerText
} from '../../../redux/actions/codeActions';
const messages = ["👊 You got it! Go make something awesome.","👌 Excellent Choice! It'll look amazing.","🙌 Very well, master.","👍 Done. Go for it.","✌️ Nice one! You have good taste."];
class CodeProperties extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            textToBeCopied: "",
            message: ""
        }
    }

    setCodeMinify = (boo) => {
        this.props.setCodeMinify(boo);
    }

    setMessageText = () => {
        this.setState({
          message: messages[Math.floor(Math.random() * Math.floor(messages.length))]
        }, () => {
          setTimeout(() => {
            this.setState({
                message: ""
            });
          }, 2000)
        })
      }

    copyCode = () => {
        var copyText = document.getElementById("textToBeCopied");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        this.setMessageText();
      }

    setMessage = (activePage) => {
        let newCode = "";
        newCode = activePage.code.lightning;
        if (newCode === "" ||  !newCode)  {
            return null;
        }
        let canvasCode = newCode;
        if(!activePage.code.isMinified || activePage.code.isMinified === false) {
        canvasCode = pretty(canvasCode);
        }
        if(!activePage.code.allowVirtualProperties) {
        canvasCode = canvasCode.replace(/style="[^"]*"/g, "");
        }
        if(!activePage.code.innerText) {
        canvasCode = canvasCode.replace(/Inner Text/g, "");
        }
        this.setState({
            textToBeCopied: canvasCode
        }, () => {
            this.copyCode();
        })
    }
    render() {
        const { builderData } = this.props;
        if(builderData.length === 0) {
            return null;
        }
        
        const activePage = _.find(builderData, d => {return d.active === true});
        const isMinified = activePage.code.isMinified;
        const activeStyles = activePage.code.allowVirtualProperties;
        const innerText = activePage.code.innerText;
        return (
        <div className="box">
            <div className="head bordered">CODE PROPERTIES</div>
            <div className="content">
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small slds-p-top_small slds-p-bottom_small">
                        <div className="slds-col slds-large-size_12-of-12 key">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                    <div className="slds-checkbox">
                                    <input checked={activeStyles} onChange={(e) => { this.props.setCodeVirtualProperty(e.target.checked)}} type="checkbox" name="virtual-styles" id="virtual-styles" />
                                    <label className="slds-checkbox__label" htmlFor="virtual-styles">
                                        <span className="slds-checkbox_faux"></span>
                                        <span className="slds-form-element__label">Keep Virtual Styles</span>
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small slds-p-top_small slds-p-bottom_small">
                        <div className="slds-col slds-large-size_12-of-12 key">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                    <div className="slds-checkbox">
                                    <input checked={innerText} onChange={(e) => { this.props.setCodeinnerText(e.target.checked)}} type="checkbox" name="vt" id="vt" />
                                    <label className="slds-checkbox__label" htmlFor="vt">
                                        <span className="slds-checkbox_faux"></span>
                                        <span className="slds-form-element__label">Keep Virtual Text</span>
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property">
                    <div className="slds-grid slds-p-left_small slds-p-right_small slds-p-top_small slds-p-bottom_small">
                        <div className="slds-col slds-large-size_12-of-12 key">
                            <div className="slds-form-element">
                                <div className="slds-form-element__control">
                                    <div checked="" className="slds-checkbox">
                                    <input checked={isMinified} onChange={(e) => { this.setCodeMinify(e.target.checked)}} type="checkbox" name="minified" id="minified" />
                                    <label className="slds-checkbox__label" htmlFor="minified">
                                        <span className="slds-checkbox_faux"></span>
                                        <span className="slds-form-element__label">Minified Code</span>
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="property slds-hide">
                    <div className="slds-grid slds-p-left_small slds-p-right_small slds-p-top_medium slds-p-bottom_medium">
                        <button onClick={() => this.setMessage(activePage)} className={`copyButton ${Constants.appGradientTheme}`}>Copy Code to Clipboard</button>
                    </div>
                    <p className={`copy-message ${this.state.message.length > 0 ? 'show': ''}`}>
                        {this.state.message}
                    </p>
                </div>
                <textarea readOnly type="text" id="textToBeCopied" className="code-hide slds-hide" value={this.state.textToBeCopied}></textarea> */}
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
        setCodeMinify: (boo) => {
            dispatch(setCodeMinify(boo))
        },
        setCodeVirtualProperty: boo => {
            dispatch(setCodeVirtualProperty(boo))
        },
        setCodeinnerText: boo => {
            dispatch(setCodeinnerText(boo))
        }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeProperties);