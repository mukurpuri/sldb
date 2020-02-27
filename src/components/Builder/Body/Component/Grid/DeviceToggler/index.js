
// Imports: Dependencies
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { setActiveGridDevice } from '../../../../../../redux/actions/gridActions';
import './index.css';

class DeviceToggler extends React.Component {
  ifActive = () => {
      const activePage = _.find(this.props.builderData, page => {
          return page.active === true;
      });
      return activePage.component.data.activeEditor
  }

  activate = device => {
      this.props.setActiveGridDevice(device);
  }

  render() {
    const activeState = this.ifActive();
    return (
      <div className={`deviceToggler ${activeState}`}>
        <div className={`toggle-link mobile`}>
            <span title="Mobile View" onClick={() => this.activate("sm")}>
            <svg className="slds-icon slds-icon-text-default slds-icon_small" aria-hidden="true">
                <use href="/assets/icons/utility-sprite/svg/symbols.svg#phone_portrait"></use>
              </svg>
            </span>
        </div>
        <div className={`toggle-link tablet`}>
            <span title="Tablet View" onClick={() => this.activate("md")}>
            <svg className="slds-icon slds-icon-text-default slds-icon_small" aria-hidden="true">
                <use href="/assets/icons/utility-sprite/svg/symbols.svg#tablet_portrait"></use>
              </svg>
            </span>
        </div>
        <div  className={`toggle-link desktop`}>
            <span title="Desktop View" onClick={() => this.activate("lg")}>
            <svg className="slds-icon slds-icon-text-default slds-icon_small" aria-hidden="true">
                <use href="/assets/icons/utility-sprite/svg/symbols.svg#desktop"></use>
              </svg>
            </span>
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
        setActiveGridDevice: device => dispatch(setActiveGridDevice(device))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceToggler);
