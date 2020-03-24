// Imports: Dependencies
import React from 'react';
import './index.css';

class PropertyIconBox extends React.Component {
  render() {
    const { icon } = this.props;
    return (
        <div className="propertyIconBox">
            <span className={`slds-icon_container  slds-icon-${icon.type}-${icon.name}`}>
                <svg className="slds-icon slds-icon_xx-small " aria-hidden="true">
                    <use href={`/assets/icons/${icon.type}-sprite/svg/symbols.svg#${icon.name}`}></use>
                </svg>
            </span>
        </div>
    );
  }
}

export default PropertyIconBox;