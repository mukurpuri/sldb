// Imports: Dependencies
import React from 'react';
import _ from 'lodash';
import './index.css';

class CheckboxSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDevices: ""
        }
    }

    selectDevices = e => {
        this.props.setData(e.target.value, e.target.checked);
    }

  render() {
    const { data } = this.props;
    const items = [];
    _.each(data, item => {
        items.push(
            <div key={`hidein-device-header-${item.value}`}>
                <div className="slds-form-element item" htmlFor={item.value}>
                    <div className="slds-form-element__control">
                        <div className="slds-checkbox">
                        <input onChange={(e) => { this.selectDevices(e)}} checked={item.isSelected} type="checkbox" name="options" id={item.value} value={item.value} />
                        <label className="slds-checkbox__label" htmlFor={item.value}>
                            <span className="slds-checkbox_faux"></span>
                            <span className="slds-form-element__label">{item.label}</span>
                        </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="checkboxSelect">
                {items}
            </div>
        </div>
    );
  }
}

export default CheckboxSelect;