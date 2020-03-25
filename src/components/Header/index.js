
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Constants from '../../config/constants';
import { setPageAction } from '../../redux/actions/pageActions';
import Pagination from './Pagination';
import './index.css';

class Header extends React.Component {

  setTab = state => [
    this.setState({
      showBuilder: state
    }, () => {
      this.props.setPageAction(this.state.showBuilder ? "builder": "code")
    })
  ]
  
  fetchSidebarData = pages => {
    var sidebarData = [];
    _.each(pages, page => {
      sidebarData.push({
        id: page.id,
        name: page.name,
        active: page.active
      });
    });
    return sidebarData;
  }

  render() {
    var { builderData } = this.props;
    if(builderData.length === 0) {
      return null;
    }
    const newData = builderData.slice();
    const pageTabData = this.fetchSidebarData(builderData);
    const activePage = _.find(newData, page => {
      return page.active === true;
    });
    const tabState = activePage.state ;
    return (
      <div  className={this.props.type}>
      <div className="pageTabs">
        <Pagination pages={pageTabData}/>
      </div>
      {
        activePage.component.data === null ? "" : 
          <div className="pageActions">
            <div title="Switch to Builder" onClick={() => {this.setTab(true)}} className={`slds-m-right_x-small slds-m-top_medium slds-float_left pageControl ${tabState === "builder" ? 'active': ''}`}>
                <span className="icon-title slds-m-right_small">Builder</span>
                <span className="slds-icon_container">
                  
                  <svg className="slds-icon slds-icon-text-default slds-icon_small" aria-hidden="true">
                    <use href="/assets/icons/utility-sprite/svg/symbols.svg#layout"></use>
                  </svg>
                </span>
            </div>
            <div title="Get Code" onClick={() => {this.setTab(false)}} className={`slds-m-right_large slds-m-top_medium slds-float_left pageControl ${tabState === "code" ? 'active': ''}`}>
                <span className="icon-title slds-m-right_small">Code</span>
                <span className="slds-icon_container">
                  <svg className="slds-icon slds-icon-text-default slds-icon_small" aria-hidden="true">
                    <use href="/assets/icons/utility-sprite/svg/symbols.svg#number_input"></use>
                  </svg>
                </span>
            </div>    
          </div>   
        }
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
      setPageAction: state => dispatch(setPageAction(state))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
