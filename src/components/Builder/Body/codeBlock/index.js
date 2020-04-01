
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './index.css';
import pretty from 'pretty';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Constants from '../../../../config/constants';
import { codeBuilder } from './codeBuilder';
import {
    setCode
} from '../../../../redux/actions/codeActions';
class CodeBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: _.find(this.props.builderData, d => {return d.active === true}),
      showCopied: false
    }
  }

  componentDidMount = () => {
    let code = "";
    switch(this.state.activePage.component.type) {
      case 'grid':
        code = this.state.activePage.component.data.properties;
        break;
      case 'card':
        code = this.state.activePage.component.data;
        break;
      case 'button':
        code = this.state.activePage.component.data;
        break;
        case 'checkbox':
          code = this.state.activePage.component.data;
          break;
        case 'icon':
          code = this.state.activePage.component.data;
          break;
        case 'input':
          code = this.state.activePage.component.data;
          break;
          case 'radio-group':
            code = this.state.activePage.component.data;
            break;
          case 'select':
            code = this.state.activePage.component.data;
            break;
      default:
        console.log('undefined');
    }
    let codeBuilderCode = codeBuilder(code, this.state.activePage.component.type);
    this.props.setCode(codeBuilderCode);
  }

  copyCode = () => {
    var copyText = document.getElementById("textToBeCopied");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setTimeout(() => {
      this.setState({
        showCopied: false
      })
    }, 50)
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
          textToBeCopied: canvasCode,
          showCopied: true
      }, () => {
          this.copyCode();
      })
      //document.getElementsByTagName("pre").style.opacity = 0;
  }


  render() {
    let canvasCode = this.state.activePage.code.lightning;
    if(!this.state.activePage.code.isMinified || this.state.activePage.code.isMinified === false) {
      canvasCode = pretty(canvasCode);
    }
    if(!this.state.activePage.code.allowVirtualProperties) {
      canvasCode = canvasCode.replace(/style="[^"]*"/g, "");
    }
    if(!this.state.activePage.code.innerText) {
      canvasCode = canvasCode.replace(/Inner Text/g, "");
    }
    return (
      <div className={`codeBlock ${Constants.appGradientTheme} ${this.state.activePage.code.isMinified ? "minified": ""}`}>
          {
            this.state.showCopied ? <div className={`copied ${Constants.appGradientTheme}`}></div> : null
          }
          
          <button onClick={() => this.setMessage(this.state.activePage)} className={`copyButton ${Constants.appGradientTheme}`}>Copy Code to Clipboard</button>
          <SyntaxHighlighter language="html" style={darcula}>
                {(canvasCode)}
            </SyntaxHighlighter>
            <textarea readOnly type="text" id="textToBeCopied" className="code-hide" value={this.state.textToBeCopied}></textarea>
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
      setCode: code => dispatch(setCode(code))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeBlock);