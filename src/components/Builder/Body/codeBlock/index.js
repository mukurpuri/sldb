
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
      activePage: _.find(this.props.builderData, d => {return d.active === true})
    }
  }

  componentWillMount = () => {
    let code = "";
    switch(this.state.activePage.component.type) {
      case 'grid':
        code = this.state.activePage.component.data.properties;
        break;
      case 'card':
        code = this.state.activePage.component.data;
        break;
      default:
        console.log('undefined');
    }
    this.props.setCode(codeBuilder(code, this.state.activePage.component.type));
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
          <SyntaxHighlighter language="html" style={darcula}>
                {(canvasCode)}
            </SyntaxHighlighter>
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