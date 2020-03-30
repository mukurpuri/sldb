// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import Constants from '../../../../config/constants';
import _ from 'lodash';
import { setPageAction } from '../../../../redux/actions/pageActions';
import './index.css';

class PageMode extends React.Component {

    setTab = state => [
      this.setState({
        showBuilder: state
      }, () => {
        this.props.setPageAction(this.state.showBuilder ? "builder": "code")
      })
    ]

  render() {
    const { builderData } = this.props;
    const activePage = _.find(builderData, b => { return b.active === true });
    
    if(activePage && !activePage.component.data) {
      return null;
    }
    const tabState = activePage && activePage.state ;
    return (
        <React.Fragment>
        {
        activePage && activePage.component.data === null ? "" : 
          
            <div className={`pageActions  ${Constants.appGradientTheme}`}>
                <div title="Switch to Builder" onClick={() => {this.setTab(true)}} className={`slds-m-right_x-small slds-float_left pageControl ${tabState === "builder" ? 'active': ''}`}>
                    <span className="icon-title slds-m-right_small">Builder</span>
                    <span className="slds-icon_container">
                    
                    <svg className="slds-icon slds-icon-text-default slds-icon_small" aria-hidden="true">
                        <use href="/assets/icons/utility-sprite/svg/symbols.svg#layout"></use>
                    </svg>
                    </span>
                </div>
                <div title="Get Code" onClick={() => {this.setTab(false)}} className={`slds-m-right_large slds-float_left pageControl ${tabState === "code" ? 'active': ''}`}>
                    <span className="icon-title slds-m-right_small">Code</span>
                    <span className="slds-icon_container">
                    <svg className="slds-icon slds-icon-text-default slds-icon_small" aria-hidden="true">
                        <use href="/assets/icons/utility-sprite/svg/symbols.svg#number_input"></use>
                    </svg>
                    </span>
                </div>    
          </div>
        }
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
      setPageAction: state => dispatch(setPageAction(state))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMode);